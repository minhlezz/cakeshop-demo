
form()

function form() {
    initializeForm();

}



function initializeForm() {
    let formResult = {};
    const form = document.getElementById('form-contact-id');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const { email, phone, name, message } = getFormValues();
        if (!validateEmail(email)) {
            showErrorPopup();
        } else {
            formResult = {
                email,
                name,
                phone,
                message,
            }

            showModalFormResult(formResult);
        }
    })
}


function getFormValues() {
    const form = document.getElementById('form-contact-id');
    const email = form.elements["email"].value.trim();
    const name = form.elements["name"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const message = form.elements["message"].value.trim();
    return {
        email,
        name,
        phone,
        message
    }
}

// validate on inputing email field
function onChangeEmail() {
    let emailValue = document.getElementById('email').value;
    validateEmail(emailValue);
}

function validateEmail(value) {
    let email = document.getElementById("email");
    // Check value email empty || wrong pattern
    if (!value || !validateEmailPattern(value)) {
        email.style.backgroundColor = "#E8CFD31A"
        email.style.borderBottom = "1px solid rgba(255, 64, 64, 0.42)"
        return false;
    }
    email.style.backgroundColor = "#fff"
    email.style.borderBottom = "1px solid var(--black)"
    return true;
}

function validateEmailPattern(emailString) {
    const regexPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let result = regexPattern.test(emailString);
    return result
}

function showErrorPopup() {
    let popup = document.getElementsByClassName('popup');
    popup[0].style.display = "block";

    setTimeout(() => hidePopup(popup), 2000);
}

function hidePopup(popup) {
    popup[0].style.display = "none";
}

// Handling Modal Contact
function showModalFormResult(formData) {
    let modalContact = document.getElementById('modal-contact');
    let modalConfirmBtn = document.getElementById('modal-confirm-btn');

    loadingModalTemplate(formData);
    openModalFormResult(modalContact);

    // Close Modal and remove formData
    modalConfirmBtn.addEventListener('click', () => {
        modalContact.style.display = "none";
        clearFormInput();
        clearRequestContactForm();
    })
}


function loadingModalTemplate(formData) {
    let contactTemplate = document.getElementById('contact-template');

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


function openModalFormResult(modalContact) {
    modalContact.style.display = "flex";
}

function clearRequestContactForm() {
    let contactTemplate = document.getElementById('contact-template');

    while (contactTemplate.hasChildNodes()) {
        contactTemplate.removeChild(contactTemplate.firstChild);
    };
}


function clearFormInput() {
    document.getElementById('form-contact-id').reset();
}







