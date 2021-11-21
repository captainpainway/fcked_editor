import {Link} from './link.js';
import {Image} from './image.js';
import {getSelection, refresh} from './text_parsing.js'

export class Toolbar {
    constructor(toolbar, editor, menu) {
        this.toolbar = toolbar;
        this.editor = editor;
        this.menu = menu;
    }

    init() {
        [...this.toolbar.querySelectorAll('button')].map(ele => {
            switch (ele.id) {
                case 'menu_btn':
                    ele.addEventListener('click', () => {
                        this.menu.menu.dataset.open === "true" ? this.menu.closeMenu() : this.menu.openMenu();
                    });
                    break;
                case 'bold':
                    ele.addEventListener('click', () => {
                        this.doBold();
                    });
                    break;
                case 'italic':
                    ele.addEventListener('click', () => {
                        this.doItalic();
                    });
                    break;
                case 'heading':
                    ele.addEventListener('click', () => {
                        this.addHeader();
                    });
                    break;
                case 'bullet_list':
                    ele.addEventListener('click', () => {
                        this.bulletList();
                    });
                    break;
                case 'number_list':
                    ele.addEventListener('click', () => {
                        this.numberedList();
                    });
                    break;
                case 'quote':
                    ele.addEventListener('click', () => {
                        this.addQuote();
                    });
                    break;
                case 'code':
                    ele.addEventListener('click', () => {
                        this.addCode();
                    });
                    break;
                case 'link':
                    ele.addEventListener('click', () => {
                        this.addLink();
                    });
                    break;
                case 'image':
                    ele.addEventListener('click', () => {
                        this.addImage();
                    });
                    break;
                default:
                    break;
            }
        });
    }

    doBold() {
        const {start, end, text, before, after} = getSelection(this.editor);
        this.editor.value = before + "**" + text + "**" + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start + 2, end + 2);
    }

    doItalic() {
        const {start, end, text, before, after} = getSelection(this.editor);
        this.editor.value = before + "*" + text + "*" + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start + 1, end + 1);
    }

    addHeader() {
        let {start, end, text, before, after} = getSelection(this.editor);

        // If there's a space between the previous # and the text, don't add another space.
        let offset = 2;
        const precedingCharacter = start > 0 ? before.substring(before.length - 1) : "";
        if (precedingCharacter === " ") {
            before = this.editor.value.substring(0, start - 1);
            offset = 1;
        }

        this.editor.value = before + "# " + text + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start + offset, end + offset);
    }

    bulletList() {
        let {start, end, text, before, after} = getSelection(this.editor);
        let offset = 0;
        const list = text.split("\n").map(line => {
            offset += 2;
            return "- " + line;
        }).join("\n");
        this.editor.value = before + list + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start, end + offset);
    }

    numberedList() {
        let {start, end, text, before, after} = getSelection(this.editor);
        let offset = 0;
        let numeral = 0;
        const list = text.split("\n").map(line => {
            numeral += 1;
            offset += 3;
            return numeral + ". " + line;
        }).join("\n");
        this.editor.value = before + list + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start, end + offset);
    }

    addQuote() {
        let {start, end, text, before, after} = getSelection(this.editor);
        let offset = 0;
        const list = text.split("\n").map(line => {
            offset += 2;
            return "> " + line;
        }).join("\n");
        this.editor.value = before + list + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start, end + offset);
    }

    addCode() {
        let {start, end, text, before, after} = getSelection(this.editor);
        let offset = 0;
        const list = text.split("\n").map(line => {
            offset += 4;
            return "    " + line;
        }).join("\n");
        this.editor.value = before + list + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start, end + offset);
    }

    addLink() {
        const link_modal = new Link(this.editor);
        link_modal.init();
    }

    addImage() {
        const image_modal = new Image(this.editor);
        image_modal.init();
    }
}