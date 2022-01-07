
form()

function form() {
    submitForm();

}



function submitForm() {
    let form = document.getElementById('form-contact-id');
    let formResult = {};
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        //Get input value
        let emailValue = form.elements["email"].value.trim();
        let nameValue = form.elements["name"].value.trim();
        let phoneValue = form.elements["phone"].value.trim();
        let messageValue = form.elements["message"].value.trim();



        if (validateEmail(emailValue) === false) {
            showErrorPopup();
        } else {
            formResult = {
                email: emailValue,
                name: nameValue,
                phone: phoneValue,
                message: messageValue,
            }

            showModalFormResult(formResult);
        }


    })

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

    console.log(contactTemplate);
}


function clearFormInput() {
    document.getElementById('form-contact-id').reset();
}







