# FCKed Editor

## The cursed markdown editor

**Demo**: https://captainpainway.github.io/fcked_editor/

This project has two parts, a Rust library (located in `src/rust`) that does all of the markdown processing and returns a mashup of Unicode characters and emojis, and a plain JavaScript editor (located in `src/html`).

Build instructions:
* Install Rust and Cargo [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
* Install [http](https://github.com/thecoshman/http/tree/0cd8ea2d74d71a33899de114af8289d78567d015) with `cargo install https`. This is an easy-to-use WASM-capable server.
* Install [Sass](https://sass-lang.com/install).
* `npm install`.
* Build the project with `npm run build-all`. This will compile the Rust code as well as the JavaScript files.
* Serve the page from the root directory with `npm start`. The compiled files are served from the `docs` directory.

You can also build a binary file from the Rust code that runs on the command line with `cargo build --release`. The file will be found at `target/release/markdown_fckr`. It can be run on the command line from that directory as follows: `./markdown_fckr "your text here"`. Note that all of the text needs to be enclosed in quotation marks and all on one line. To add a newline without running the program, you can type `CTRL+V CTRL+J` to insert a newline character.
