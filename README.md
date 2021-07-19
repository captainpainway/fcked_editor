# FCKed Editor

## The cursed markdown editor

This project has two parts, a Rust library that does all of the markdown processing and returns a mashup of Unicode characters and emojis, and a plain JavaScript editor.

Build instructions:
* Install Rust and Cargo [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
* Install [http](https://github.com/thecoshman/http/tree/0cd8ea2d74d71a33899de114af8289d78567d015) with `cargo install https`. This is an easy-to-use WASM-capable server.
* Build the WASM files using `wasm-pack build --target web`.
* Serve the page from the root directory with `http public`.