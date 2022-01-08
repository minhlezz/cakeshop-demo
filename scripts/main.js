main()

function main() {
    hideAllTabs();
    onTabInit();
    // scrollToTopHeader
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

function autoScrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
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

function changeTab(e, tabName) {
    //HideAllTab && remove active class
    hideAllTabs();
    removeClassActive();
    //Display current tab;
    showCurrentTab(e, tabName);
}
function onTabInit() {
    let home = document.getElementById('home');
    home.style.display = 'block';

}

function hideAllTabs() {
    let tabContent = document.getElementsByClassName('main-tab');
    let i;
    //Hide content all tabs
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    //Remove active class

}

function removeClassActive() {
    let tablinks = document.getElementsByClassName("tablinks");
    let i;
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
}



function showCurrentTab(e, tabName) {
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}