main()

function main() {

    // scrollToTop
    scrollToTop();
    showReadmoreModal();
}


function scrollToTop() {
    const scroll = document.querySelector("#scrollTop");
    scroll.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })
}

function showReadmoreModal() {
    let readMore = document.querySelector('.header-link');
    let readMoreModal = document.querySelector('.modal-readmore');
    let readMoreClose = document.querySelector('#readmore-close');

    readMore.addEventListener("click", () => {
        readMoreModal.style.display = "block";
    });

    readMoreClose.addEventListener("click", () => {
        readMoreModal.style.display = "none";
    })

}