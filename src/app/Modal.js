export class Modal {
  constructor(id) {
    this.overlay = document.getElementById(id);
    this.content = this.overlay.querySelector('.modal__content');
    this.closeBtn = this.overlay.querySelector('.modal-form__close-btn');
    this.init();
  }

  open() {
    this.overlay.classList.add('modal-showed');
  }

  close() {
    this.overlay.classList.remove('modal-showed');
  }

  isOpen() {
    if (this.overlay.classList.contains('modal-showed')) {
      console.log('Модалка открыта');
    } else {
      console.log('Модалка закрыта');
    }
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) {
        this.close();
      }
    });
  }
}