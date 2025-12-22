export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
  
  getValues() {
    const formData = new FormData(this.form)
    return Object.fromEntries(formData.entries())
  }

  isValid() {
    return this.form.checkValidity()
  }

  reset() {
    this.form.reset();
  }
}