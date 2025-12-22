export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector('.modal-form__close-btn');
    this.init();
  }
  
  open() {
    this.modal.classList.add('modal-showed');
  }
  
  close() {
    this.modal.classList.remove('modal-showed');
  }
  
  isOpen() {
    if (this.modal.classList.contains('modal-showed')) {
      console.log('Модалка открыта');
    } else {
      console.log('Модалка закрыта');
    }
  }
  
  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}

const check = new Modal('registration-modal');
check.isOpen();