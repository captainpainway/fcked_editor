export class About {
    constructor() {
        this.menu_background = document.querySelector("#menu_background");
        this.about_modal = document.querySelector('#about_modal');
    }

    init() {
        this.menu_background.addEventListener('click', () => {
            this.closeAboutModal();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.closeAboutModal();
            }
        });
        this.openAboutModal();
    }

    closeAboutModal() {
        this.about_modal.dataset.open = "false";
        this.about_modal.setAttribute('aria-hidden', 'true');
        this.menu_background.style.display = "none";
    }

    openAboutModal() {
        this.about_modal.dataset.open = "true";
        this.about_modal.setAttribute('aria-hidden', 'false');
        this.menu_background.style.display = "block";
    }
}