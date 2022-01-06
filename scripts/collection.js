
let collections = [
    {
        image: './images/slider/jellycake.jpg',
        title: "I'm an image title",
        description: "Describe your image here"
    },
    {
        image: './images/slider/pinkcake.jpg',
        title: "I'm an image title",
        description: "Describe your image here"
    },
    {
        image: './images/slider/whitecake.jpg',
        title: "I'm an image title",
        description: "Describe your image here"
    },
    {
        image: './images/slider/whitecake-2.jpg',
        title: "I'm an image title",
        description: "Describe your image here"
    },
    {
        image: './images/slider/whitecake-3.jpg',
        title: "I'm an image title",
        description: "Describe your image here"
    },
    {
        image: './images/slider/whitecake-4.jpg',
        title: "I'm an image title",
        description: "Describe your image here"
    },
]


main();

var currentIndex = 0;

function main() {
    showCollectionSlide();
}

// Cake collection automatic slideshow
function showCollectionSlide() {
    let collectionID = document.querySelector('#slideCollectionID');
    let collectionItems = collectionID.children;
    let i;

    renderCollection(collectionID);

    // Moving items to the left;
    for (i = 0; i < collectionItems.length; i++) {
        collectionItems[i].style.transform = `translate(-${currentIndex * 200}px )`;
        collectionItems[i].style.transitionDuration = "1s";
        collectionItems[i].style.transitionTimingFunction = "linear";

    }

    currentIndex++;

    //Reset index at the end of collection.
    if (currentIndex > collectionItems.length) {
        currentIndex = 0;
    }
    //re-invoking  showCollectionSlide against
    setTimeout(showCollectionSlide, 3000);
}

function renderCollection(collectionID) {
    collections.forEach((item, index) => {
        let itemDetail = `
            <div class="collection-card" onclick="showModalCollection(),getCurrentSlide(${index})" >
                    <img src="${item.image}" alt="1" class="collection-image">
            </div>
        `
        collectionID.insertAdjacentHTML('beforeend', itemDetail);
    });
}

//Handling Modal
function showModalCollection() {
    let modalClose = document.querySelector('.modal-close-icon');
    let modalCollection = document.querySelector('.modal-collection');
    let collectionCard = document.querySelectorAll('.collection-card');
    let mdCollectionContent = document.querySelector('.modal-collection-content');
    //Loading IMG into Modal Data;
    renderModal(mdCollectionContent);
    //Toggle Modal
    toggle(modalClose, modalCollection, collectionCard);

}

// Loading data into Modal
function renderModal(node) {
    collections.forEach(item => {
        let itemDetail = `
            <img src="${item.image}" id="md-img" class="modal-collection-image" alt="">
        `
        node.insertAdjacentHTML('beforeend', itemDetail);
    })
}

// Toogle Modal
function toggle(modalClose, modalCollection) {
    // onClick open Modal
    displayModal(modalCollection);
    //Close Modal
    modalClose.addEventListener("click", () => {
        modalExit(modalCollection);
    })
}

function displayModal(modalCollection) {
    modalCollection.style.display = "flex";
}

function modalExit(modalCollection) {
    modalCollection.style.display = "none";
}


//Modal Gallery


function getCurrentSlide(index) {
    showCurrentSlide(currentSlideIndex = index)
}
var currentSlideIndex = 1;
function showCurrentSlide(currentPos) {

    let imgNodes = document.querySelectorAll('.modal-collection-image');
    let i;

    //Set slideIndex = lastIndex at the end of List
    if (currentPos >= imgNodes.length) {
        currentSlideIndex = imgNodes.length - 1;
    };

    //Set slideIndex = firstIndex at the head of List
    if (currentPos < 1) {
        currentSlideIndex = 0
    };

    for (i = 0; i < imgNodes.length; i++) {
        imgNodes[i].style.display = "none";
    }

    // Display current slide 
    imgNodes[currentSlideIndex].style.display = "block"
}

function onPrevItem(n) {
    showCurrentSlide(currentSlideIndex += n);
}

function onNextItem(n) {
    showCurrentSlide(currentSlideIndex += n);
}






