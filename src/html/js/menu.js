import {saveAs} from 'file-saver';
import {About} from './about.js';
import {Cheatsheet} from "./cheatsheet.js";

export class Menu {
    constructor(menu, editor, preview) {
        this.menu = menu;
        this.editor = editor;
        this.preview = preview;
        this.menu_background = document.querySelector("#menu_background");
        this.open_markdown_file = document.querySelector("#open_markdown");
    }

    init() {
        this.menu_background.addEventListener('click', () => {
            this.closeMenu();
        });

        this.open_markdown_file.addEventListener('change', () => {
            this.openMarkdownFile();
        });

        [...this.menu.querySelectorAll('button')].map(ele => {
            switch (ele.id) {
                case 'clear':
                    ele.addEventListener('click', () => {
                        this.clearEditor();
                        this.closeMenu();
                    })
                    break;
                case 'open':
                    ele.addEventListener('click', () => {
                        this.open_markdown_file.click();
                        this.closeMenu();
                    });
                    break;
                case 'save_markdown':
                    ele.addEventListener('click', () => {
                        this.saveMarkdownFile();
                        this.closeMenu();
                    });
                    break;
                case 'save_html':
                    ele.addEventListener('click', () => {
                        this.saveHTMLFile();
                        this.closeMenu();
                    });
                    break;
                case 'about':
                    ele.addEventListener('click', () => {
                        this.openAbout();
                        this.menu.dataset.open = "false";
                        this.menu.setAttribute('aria-hidden', 'true');
                    });
                    break;
                case 'markdown':
                    ele.addEventListener('click', () => {
                        this.openCheatsheet();
                        this.menu.dataset.open = "false";
                        this.menu.setAttribute('aria-hidden', 'true');
                    });
                    break;
                default:
                    ele.addEventListener('click', () => {
                        this.closeMenu();
                    });
                    break;
            }
        });
    }

    clearEditor() {
        this.editor.value = '';
        this.preview.innerHTML = '';
    }

    closeMenu() {
        this.menu.dataset.open = "false";
        this.menu.setAttribute('aria-hidden', 'true');
        this.menu_background.style.display = "none";
    }

    openMenu() {
        this.menu.dataset.open = "true";
        this.menu.setAttribute('aria-hidden', 'false');
        this.menu_background.style.display = "block";
    }

    openMarkdownFile() {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.editor.value = e.target.result;

            const event = new Event('update_preview');
            this.editor.dispatchEvent(event);
        };
        reader.readAsText(this.open_markdown_file.files[0]);
    }

    saveMarkdownFile() {
        const blob = new Blob([this.editor.value], {type: "text/markdown; charset=utf-8"});
        saveAs(blob);
    }

    saveHTMLFile() {
        const blob = new Blob([this.preview.innerHTML], {type: "text/html; charset=utf-8"});
        saveAs(blob);
    }

    openAbout() {
        const about_modal = new About();
        about_modal.init();
    }

    openCheatsheet() {
        const cheatsheet_modal = new Cheatsheet();
        cheatsheet_modal.init();
    }
}