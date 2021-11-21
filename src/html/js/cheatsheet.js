export class Cheatsheet {
    constructor() {
        this.menu_background = document.querySelector("#menu_background");
        this.cheatsheet_modal = document.querySelector('#cheatsheet_modal');
    }

    init() {
        this.menu_background.addEventListener('click', () => {
            this.closeCheatsheetModal();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.closeCheatsheetModal();
            }
        });
        this.openCheatsheetModal();
    }

    closeCheatsheetModal() {
        this.cheatsheet_modal.dataset.open = "false";
        this.cheatsheet_modal.setAttribute('aria-hidden', 'true');
        this.menu_background.style.display = "none";
    }

    openCheatsheetModal() {
        this.cheatsheet_modal.dataset.open = "true";
        this.cheatsheet_modal.setAttribute('aria-hidden', 'false');
        this.menu_background.style.display = "block";
    }
}