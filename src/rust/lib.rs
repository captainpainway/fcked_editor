mod processing;

use wasm_bindgen::prelude::*;
use processing::process_markdown;

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

#[wasm_bindgen]
pub fn process(markdown: &str) -> String {
    process_markdown(markdown.to_owned())
}
