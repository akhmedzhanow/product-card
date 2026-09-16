export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeButton = this.modal.querySelector('.modal__close');
        this.overlay = document.querySelector('.overlay');
        this.addCloseListener();
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
        document.body.classList.add('modal-open');
    }

    close() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
        document.body.classList.remove('modal-open');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    addCloseListener() {
        this.closeButton.addEventListener('click', () => {
            this.close();
        });
    }

}