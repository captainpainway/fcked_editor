import init, {process} from "../pkg";
import {Menu} from './menu.js';
import {Toolbar} from './toolbar.js';

export class Editor {
    constructor() {
        this.toolbar = document.querySelector("#toolbar");
        this.editor = document.querySelector("#input");
        this.menu = document.querySelector("#menu");
        this.preview = document.querySelector("#preview");
    }

    init() {
        const menu = new Menu(this.menu, this.editor, this.preview);
        menu.init();

        const toolbar = new Toolbar(this.toolbar, this.editor, menu);
        toolbar.init();

        this.processMarkdown(this.editor);
    }

    processMarkdown(editor) {
        init().then(() => {
            if (editor.value) {
                this.preview.innerHTML = process(editor.value);
            }
            const updateText = this.debounce(e => {
                this.preview.innerHTML = process(e.target.value);
            }, 100); // Debounce a bit b/c processing large amounts of text can be slower.
            editor.addEventListener("input", updateText);
            editor.addEventListener("update_preview", updateText);
        });
    }

    debounce(func, wait) {
        let timeout = null;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {func.apply(this, args);}, wait);
        };
    }
}