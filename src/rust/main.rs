mod processing;

use std::env;
use processing::process_markdown;

fn main() {
    let args: Vec<String> = env::args().collect();
    let markdown = &args[1];
    process_markdown(markdown.to_owned());
}
