mod font_fckin;
mod emojifck;

use regex::Regex;
use font_fckin::*;
use emojifck::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

#[wasm_bindgen]
pub fn process(markdown: &str) -> String {
    process_markdown(markdown.to_owned())
}

fn process_markdown(markdown: String) -> String {
    let html = process_text(markdown.to_string());
    println!("{}", html);
    html
}

fn process_text(contents: String) -> String {
    let mut text = process_headers(contents);
    text = process_blockquotes(text);
    text = process_code_block(text);
    text = process_link(text);
    text = process_unordered_list(text);
    text = process_ordered_list(text);
    text = process_image(text);
    text = process_bold_italic(text);
    text = process_hashtags(text);
    text = process_code(text);
    text = process_paragraphs(text);
    text
}

fn join_strings(strings: Vec<String>) -> String {
    strings.join("\n")
}

fn process_headers(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(^#+)\s(.+)").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            for cap in re.captures_iter(line) {
                match cap[1].len() {
                    1 => vec.push("<h1>".to_owned() + &header_fck(cap[2].to_string(), "square") + "</h1>"),
                    2 => vec.push("<h2>".to_owned() + &header_fck(cap[2].to_string(), "circle") + "</h2>"),
                    3 => vec.push("<h3>".to_owned() + &header_fck(cap[2].to_string(), "square") + "</h3>"),
                    4 => vec.push("<h4>".to_owned() + &header_fck(cap[2].to_string(), "circle") + "</h4>"),
                    5 => vec.push("<h5>".to_owned() + &header_fck(cap[2].to_string(), "square") + "</h5>"),
                    6 => vec.push("<h6>".to_owned() + &header_fck(cap[2].to_string(), "circle") + "</h6>"),
                    _ => vec.push("".to_owned()),
                }
            }
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}

fn process_blockquotes(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(^>)\s?(.+)?").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            for cap in re.captures(line) {
                  vec.push("<blockquote>".to_owned() +
                      &blockquote_fck(cap.get(2).map_or("".to_string(), |m| m.as_str().to_string())) +
                      "</blockquote>"
                  );
            }
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}

fn process_code_block(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(^\s{4,})(.+)?").unwrap();
    let mut all_code_lines = "".to_owned();
    for line in contents.lines() {
        if re.is_match(line) {
            all_code_lines += &(code_fck(line.to_owned()) + "\n");
        } else {
            let len = all_code_lines.len();
            if len > 0 {
                all_code_lines.truncate(len - 1);
                vec.push("<pre><code>".to_owned() + &all_code_lines + "</code></pre>");
                all_code_lines = "".to_owned();
            } else {
                vec.push(line.to_owned());
            }
        }
    }
    let len = all_code_lines.len();
    if len > 0 {
        all_code_lines.truncate(len - 1);
        vec.push("<pre><code>".to_owned() + &all_code_lines + "</code></pre>");
    }
    join_strings(vec)
}

fn process_unordered_list(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(^-|^\*)\s(.+)").unwrap();
    let mut in_list = false;
    for line in contents.lines() {
        if re.is_match(line) {
            if !in_list {
                vec.push("<ul>".to_owned());
                in_list = true;
            }
            for cap in re.captures_iter(line) {
                vec.push("<li>".to_owned() + &list_fck(cap[2].to_string()) + "</li>");
            }
        } else {
            if in_list {
                vec.push("</ul>".to_owned());
                in_list = false;
            }
            vec.push(line.to_owned());
        }
    }
    if in_list {
        vec.push("</ul>".to_owned());
    }
    join_strings(vec)
}

fn process_ordered_list(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(^\d\.)\s(.+)").unwrap();
    let mut in_list = false;
    for line in contents.lines() {
        if re.is_match(line) {
            if !in_list {
                vec.push("<ol>".to_owned());
                in_list = true;
            }
            for cap in re.captures_iter(line) {
                vec.push("<li>".to_owned() + &list_fck(cap[2].to_string()) + "</li>");
            }
        } else {
            if in_list {
                vec.push("</ol>".to_owned());
                in_list = false;
            }
            vec.push(line.to_owned());
        }
    }
    if in_list {
        vec.push("</ol>".to_owned());
    }
    join_strings(vec)
}

fn process_paragraphs(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"^[<\s]").unwrap();
    for line in contents.lines() {
        if re.is_match(line) || line.len() == 0 {
            vec.push(line.to_owned());
        } else {
            let fcked_words = emojifck(line);
            vec.push("<p>".to_owned() + &fcked_words.to_owned() + "</p>");
        }
    }
    join_strings(vec)
}

fn process_bold_italic(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(\*+|_+)([\w\d\s']+)(\*+|_+)").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            let mut line_dup = line.to_owned();
            for cap in re.captures_iter(line) {
                let split_line = line_dup.split(&cap[0]).collect::<Vec<&str>>();
                match cap[1].len() {
                    1 => line_dup = split_line[0].to_owned() + "<i>" + &italic_fck(cap[2].to_string()) + "</i>" + split_line[1],
                    2 => line_dup = split_line[0].to_owned() + "<b>" + &bold_fck(cap[2].to_string()) + "</b>" + split_line[1],
                    _ => line_dup = split_line[0].to_owned() + split_line[1],
                }
            }
            vec.push(line_dup);
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}

fn process_hashtags(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(\#)([\w\d]+)").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            let mut line_dup = line.to_owned();
            for cap in re.captures_iter(line) {
                let split_line = line_dup.split(&cap[0]).collect::<Vec<&str>>();
                line_dup = split_line[0].to_owned() + "<u>" + &hashtag_fck(cap[0].to_string()) + "</u>" + split_line[1];
            }
            vec.push(line_dup);
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}

fn process_code(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(`)(.+)(`)").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            let mut line_dup = line.to_owned();
            for cap in re.captures_iter(line) {
                let split_line = line_dup.split(&cap[0]).collect::<Vec<&str>>();
                line_dup = split_line[0].to_owned() + "<span>" + &glitched_fck(cap[2].to_string()) + "</span>" + split_line[1];
            }
            vec.push(line_dup);
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}

fn process_image(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(.+)(!\[)(.*)(\])(\()(https?://.+)(\))(.+)").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            for cap in re.captures_iter(line) {
                vec.push(cap[1].to_owned() + "<img src=\"" + &cap[6] + "\" alt=\"" + &cap[3] + "\">" + &cap[8]);
            }
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}

fn process_link(contents: String) -> String {
    let mut vec: Vec<String> = Vec::new();
    let re = Regex::new(r"(.*)(\[)(.+)(\])(\()(https?://.+)(\))(.*)").unwrap();
    for line in contents.lines() {
        if re.is_match(line) {
            for cap in re.captures_iter(line) {
                vec.push(cap[1].to_owned() + "<a href=\"" + &cap[6] + "\">" + &link_fck(cap[3].to_owned()) + "</a>" + &cap[8]);
            }
        } else {
            vec.push(line.to_owned());
        }
    }
    join_strings(vec)
}
