import {getSelection, refresh} from './text_parsing.js'

export class Image {
    constructor(editor) {
        this.editor = editor;
        this.menu_background = document.querySelector("#menu_background");
        this.image_modal = document.querySelector('#image_modal');
        this.cancel = document.querySelector('#cancel_image');
        this.save = document.querySelector('#save_image');
        this.image_url = document.querySelector('#image_url');
        this.image_description = document.querySelector('#image_description');
    }

    init() {
        this.menu_background.addEventListener('click', () => {
            this.closeImageModal();
        });
        this.cancel.addEventListener('click', () => {
            this.closeImageModal();
        });
        this.save.addEventListener('click', () => {
            this.addImage();
            this.closeImageModal();
        });
        this.image_url.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addImage();
                this.closeImageModal();
            }
        });
        this.image_description.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addImage();
                this.closeImageModal();
            }
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.closeImageModal();
            }
        });
        this.image_url.value = '';
        this.image_description.value = '';
        this.openImageModal();
    }

    closeImageModal() {
        this.image_modal.dataset.open = "false";
        this.image_modal.setAttribute('aria-hidden', 'true');
        this.menu_background.style.display = "none";
    }

    openImageModal() {
        this.image_modal.dataset.open = "true";
        this.image_modal.setAttribute('aria-hidden', 'false');
        this.menu_background.style.display = "block";
        this.image_url.focus();

        let {start, end, text, before, after} = getSelection(this.editor);
        if (text !== "") {
            this.image_description.value = text;
        }
    }

    addImage() {
        let {start, end, text, before, after} = getSelection(this.editor);
        const image = "![" + this.image_description.value + "](" + this.image_url.value + ")";
        this.editor.value = before + image + after;
        refresh(this.editor);
        this.editor.focus();
        this.editor.setSelectionRange(start, end + image.length);
    }
}