"use strict";

const form = document.querySelector(".email-form");
const submitBtn = document.querySelector(".btn-form");
const formMessage = document.querySelector(".form-message");
const errIcon = document.querySelector(".error-icon");
const email = document.getElementById("mail");

class App {
  constructor() {
    form.addEventListener("submit", this.submitForm.bind(this));
  }

  submitForm(e) {
    e.preventDefault();
    const input = email.value;
    if (!this.validateEmail(input)) {
      this.showError();
    }
    if (this.validateEmail(input)) {
      this.removeError();
      this.showSuccess();
      this.disableForm();
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  showError() {
    formMessage.classList.add("form-message-error");
    errIcon.style.visibility = "visible";
    errIcon.style.opacity = 1;
  }

  removeError() {
    formMessage.classList.remove("form-message-error");
    errIcon.style.visibility = "hidden";
    errIcon.style.opacity = 0;
  }

  showSuccess() {
    setTimeout(function () {
      formMessage.textContent = "Thank you for signing up!";
      formMessage.classList.add("form-message-success");
    }, 200);
  }

  disableForm() {
    email.value = "";
    email.setAttribute("disabled", "disabled");
    submitBtn.setAttribute("disabled", "disabled");
  }
}

const app = new App();
