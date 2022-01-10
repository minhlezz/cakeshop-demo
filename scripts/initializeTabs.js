initializeTabs();

function initializeTabs() {
    hideAllTabs();
    initTabDefault();
    scrollToTop();
}

function onChangeTab(e, tabName) {
    clearActiveTabs();
    displayCurrentTab(e, tabName);
}

function initTabDefault() {
    let home = document.getElementById('home');
    home.style.display = 'block';

}

function clearActiveTabs() {
    hideAllTabs();
    removeAllActiveTabsName();
}

function hideAllTabs() {
    let tabContent = document.getElementsByClassName('main-tab');
    let i;
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
}

function removeAllActiveTabsName() {
    let tablinks = document.getElementsByClassName("tablinks");
    let i;
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
}


function displayCurrentTab(e, tabName) {
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}