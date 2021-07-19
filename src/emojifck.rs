use serde::{Deserialize};
use regex::Regex;

#[derive(Deserialize, Debug)]
struct Emoji {
    emoji: String,
    name: String,
    shortname: String,
    unicode: String,
    html: String,
    category: String,
    order: String
}

pub fn emojifck(line: &str) -> String {
    let contents = include_str!("./emojis.json");
    let mut new_line = line.to_owned();
    let mut matching_keywords = Vec::new();
    let emojis: Vec<Emoji> = serde_json::from_str(contents).unwrap();
    // Find emojis with matching keywords.
    for emoji in emojis {
        let keywords = emoji.shortname.replace(":", "").replace("-", "_");
        let keyword = keywords.replace("_", " ");
        if keyword.len() > 0 {
            if new_line.contains(&keyword) {
                matching_keywords.push([keyword, emoji.emoji]);
            }
        }
        matching_keywords.sort_by(|a, b| b[0].len().cmp(&a[0].len()));
    };
    // Replace words with the emoji with the longest matching keyword.
    for word in matching_keywords {
        new_line = new_line.replace(&word[0], &word[1]);
    }
    // Fix tags that may have been emojifcked.
    let re = Regex::new(r"(<.+?>)").unwrap();
    if re.is_match(line) {
        for (i, cap) in re.captures_iter(line).enumerate() {
            let cap2 = re.captures_iter(&new_line).collect::<Vec<_>>();
            new_line = new_line.replace(&cap2[i][0], &cap[0]);
        }
    }
    new_line
}