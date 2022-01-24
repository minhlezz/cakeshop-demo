form();

function form() {
  initializeForm();
}

function initializeForm() {
  let formResult = {};
  const form = document.getElementById("form-contact-id");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { email } = getFormValues();
    if (!isValidEmail(email)) {
      showErrorEmailMessage();
      setTimeout(() => hideErrorEmailMessage(), 2000);
    } else {
      formResult = getFormValues();
      showModalContactForm(formResult);
    }
  });
}

function getFormValues() {
  const form = document.getElementById("form-contact-id");
  const email = form.elements["email"].value.trim();
  const name = form.elements["name"].value.trim();
  const phone = form.elements["phone"].value.trim();
  const message = form.elements["message"].value.trim();
  return {
    email,
    name,
    phone,
    message,
  };
}

// validate on inputing email field
function onChangeEmail() {
  let emailValue = document.getElementById("email").value;
  showEmailError(emailValue);
}

function showEmailError(value) {
  if (!value || !isValidEmail(value)) {
    showBackgroundErrorInput();
  }
  resetBackgroundInput();
}

function isValidEmail(emailString) {
  const startPattern = "^";
  // letters without special characters except '.'.
  const letters = "\\w+([\\.]?\\w+)*";
  const sign = "@";
  const endWithDomain = "(\\.\\w{2,3})+$";

  const concatPattern = startPattern + letters + sign + letters + endWithDomain;

  const pattern = new RegExp(concatPattern, "g");

  return pattern.test(emailString);
}

function showBackgroundErrorInput() {
  const email = document.getElementById("email");
  email.style.backgroundColor = "#E8CFD31A";
  email.style.borderBottom = "1px solid rgba(255, 64, 64, 0.42)";
}

function resetBackgroundInput() {
  const email = document.getElementById("email");
  email.style.backgroundColor = "#fff";
  email.style.borderBottom = "1px solid var(--black)";
}

function showErrorEmailMessage() {
  const popup = document.getElementsByClassName("popup");
  popup[0].style.display = "block";
}

function hideErrorEmailMessage() {
  const popup = document.getElementsByClassName("popup");
  popup[0].style.display = "none";
}

// Handling Modal Contact
function showModalContactForm(formData) {
  const modalContact = document.getElementById("modal-contact");

  initModalContactForm(formData);
  openModalContactForm(modalContact);
  initCloseModalContact(modalContact);
}

function initCloseModalContact(modalContact) {
  const modalConfirmBtn = document.getElementById("modal-confirm-btn");

  modalConfirmBtn.addEventListener("click", () => {
    closeModalContactForm(modalContact);
    clearFormInput();
    clearRequestContactForm();
  });
}

function initModalContactForm(formData) {
  let contactTemplate = document.getElementById("contact-template");

  const { email, name, phone, message } = formData;

  let template = `
        <div class="row">
            <div class="col-12">
                <span class="fieldname">Name:</span>
                <span>${name}</span>
            </div>
            <div class="col-12">
                <span class="fieldname">Email:</span>
                <span>${email}</span>
            </div>
            <div class="col-12">
                <span class="fieldname">Phone:</span>
                <span>${phone}</span>
            </div>
            <div class="col-12">
                <span class="fieldname">Message:</span>
                <span>${message}</span>
            </div>
        </div>
    `;
  contactTemplate.insertAdjacentHTML("beforeend", template);
}

function openModalContactForm(modalContact) {
  modalContact.style.display = "flex";
}

function closeModalContactForm(modalContact) {
  modalContact.style.display = "none";
}

function clearRequestContactForm() {
  let contactTemplate = document.getElementById("contact-template");

  while (contactTemplate.hasChildNodes()) {
    contactTemplate.removeChild(contactTemplate.firstChild);
  }
}

function clearFormInput() {
  document.getElementById("form-contact-id").reset();
}
