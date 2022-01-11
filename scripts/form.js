
form()

function form() {
    initializeForm();

}



function initializeForm() {
    let formResult = {};
    const form = document.getElementById('form-contact-id');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const { email } = getFormValues();
        if (!isValidEmail(email)) {
            showErrorPopupEmailMessage();
        } else {
            formResult = getFormValues();
            showModalFormContactResult(formResult);
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
    showEmailError(emailValue);
}

function showEmailError(value) {
    if (!value || !isValidEmail(value)) {
        showErrorBackgroundEmail(true)
        return false;
    }
    showErrorBackgroundEmail(false)
}

function isValidEmail(emailString) {
    const word = '\\w+([\\.]?\\w+)';
    const email = '@';
    const domain = '(\\.\\w{2,3})+';

    const concatPattern = '^' + word + '*' + email + word + '*' + domain + '$';

    const pattern = new RegExp(concatPattern, 'g');

    return pattern.test(emailString)
}

function showErrorBackgroundEmail(value) {
    let email = document.getElementById("email");
    if (value === true) {
        email.style.backgroundColor = "#E8CFD31A"
        email.style.borderBottom = "1px solid rgba(255, 64, 64, 0.42)"
    } else {
        email.style.backgroundColor = "#fff"
        email.style.borderBottom = "1px solid var(--black)"
    }

}


function showErrorPopupEmailMessage() {
    let popup = document.getElementsByClassName('popup');
    popup[0].style.display = "block";
    setTimeout(() => hidePopupErrorEmailMessage(popup), 2000);
}

function hidePopupErrorEmailMessage(popup) {
    popup[0].style.display = "none";
}

// Handling Modal Contact
function showModalFormContactResult(formData) {
    const modalContact = document.getElementById('modal-contact');

    renderModalContact(formData);
    openModalFormContact(modalContact);
    registerEventCloseModalContact(modalContact)

}

function registerEventCloseModalContact(modalContact) {
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');
    // Close Modal and remove formData
    modalConfirmBtn.addEventListener('click', () => {
        modalContact.style.display = "none";
        clearFormInput();
        clearRequestContactForm();
    })
}

function renderModalContact(formData) {
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


function openModalFormContact(modalContact) {
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







