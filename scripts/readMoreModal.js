
initReadMoreModal();

function initReadMoreModal() {
    registerEventOpenModalReadMore();
    registerEventCloseModalReadMore();
}

function registerEventOpenModalReadMore() {
    let rmOpenModal = document.querySelector('.header-link');
    rmOpenModal.addEventListener("click", () => {
        toggleModal(true);
    });
}

function registerEventCloseModalReadMore() {
    let rmClose = document.querySelector('#readmore-close');
    rmClose.addEventListener("click", () => {
        toggleModal(false);
    })
}


function toggleModal(value) {
    let readMoreModal = document.querySelector('.modal-readmore');
    if (value) {
        readMoreModal.style.display = "block";
    } else {
        readMoreModal.style.display = "none";
    }
}