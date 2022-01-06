main()

function main() {

    // scrollToTop
    scrollToTop();
    
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