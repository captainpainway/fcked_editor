import {getSelection, refresh} from './text_parsing.js'

export class Link {
    constructor(editor) {
        this.editor = editor;
        this.menu_background = document.querySelector("#menu_background");
        this.link_modal = document.querySelector('#link_modal');
        this.cancel = document.querySelector('#cancel_link');
        this.save = document.querySelector('#save_link');
        this.link_url = document.querySelector('#link_url');
        this.link_text = document.querySelector('#link_text');
    }

    init() {
        this.menu_background.addEventListener('click', () => {
            this.closeLinkModal();
        });
        this.cancel.addEventListener('click', () => {
            this.closeLinkModal();
        });
        this.save.addEventListener('click', () => {
            this.addLink();
            this.closeLinkModal();
        });
        this.link_url.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addLink();
                this.closeLinkModal();
            }
        });
        this.link_text.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addLink();
                this.closeLinkModal();
            }
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.closeLinkModal();
            }
        });
        this.link_url.value = '';
        this.link_text.value = '';
        this.openLinkModal();
    }

    closeLinkModal() {
        this.link_modal.dataset.open = "false";
        this.link_modal.setAttribute('aria-hidden', 'true');
        this.menu_background.style.display = "none";
    }

    openLinkModal() {
        this.link_modal.dataset.open = "true";
        this.link_modal.setAttribute('aria-hidden', 'false');
        this.menu_background.style.display = "block";
        this.link_url.focus();

        let {start, end, text, before, after} = getSelection(this.editor);
        if (text !== "") {
            this.link_text.value = text;
        }
    }

    addLink() {
        let {start, end, text, before, after} = getSelection(this.editor);
        const link = "[" + this.link_text.value + "](" + this.link_url.value + ")";
        this.editor.value = before + link + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start, end + link.length);
    }
}