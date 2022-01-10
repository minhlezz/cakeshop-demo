
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


initCollection();

var currentIndex = 0;

function initCollection() {
    showCollectionPhotos();
}

function showCollectionPhotos() {
    let collectionID = document.querySelector('#slideCollectionID');

    renderCollectionView(collectionID);
    collectionSlider();

    //Automatic slideshow
    setTimeout(showCollectionPhotos, 2000);
}

function collectionSlider() {
    const collectionID = document.querySelector('#slideCollectionID');
    const collectionPhotos = collectionID.children;
    const collectionLength = collectionPhotos.length;

    transitionItems(collectionPhotos);
    resetIndexAtLastItem(collectionLength);

}

function transitionItems(collectionPhotos) {
    for (let i = 0; i < collectionPhotos.length; i++) {
        collectionPhotos[i].style.transform = `translate(-${currentIndex * 200}px )`;
        collectionPhotos[i].style.transitionDuration = "1s";
        collectionPhotos[i].style.transitionTimingFunction = "linear";
    }
    currentIndex++;
}

function resetIndexAtLastItem(collectionLength) {
    if (currentIndex > collectionLength) {
        currentIndex = 0;
    }
}

function renderCollectionView(collectionID) {
    collections.forEach((item, index) => {
        let itemDetail = `
            <div class="collection-card" onclick="onClickModalCollection(),getCurrentSlide(${index})" >
                    <img src="${item.image}" alt="1" class="collection-image">
            </div>
        `
        collectionID.insertAdjacentHTML('beforeend', itemDetail);
    });
}


function onClickModalCollection() {
    let mdCollectionContent = document.querySelector('.modal-collection-content');
    //Loading IMG into Modal Data;
    renderModalCollection(mdCollectionContent);
    toggleModalCollection();
    // initRequestFullscreen();

}

// Loading data into Modal
function renderModalCollection(node) {
    collections.forEach(item => {
        let itemDetail = `
            <img src="${item.image}" id="md-img" class="modal-collection-image" alt="">
        `
        node.insertAdjacentHTML('beforeend', itemDetail);
    })
}

// Toogle Modal
function toggleModalCollection() {
    let modalCollection = document.querySelector('.modal-collection');
    openModalCollection(modalCollection);
    closeModalCollection(modalCollection);

}

function openModalCollection(modalCollection) {
    modalCollection.style.display = "flex";
}

function closeModalCollection(modalCollection) {
    let modalClose = document.querySelector('.modal-collection-close-icon');
    modalClose.addEventListener("click", () => {
        modalCollection.style.display = "none";
    })
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

function initRequestFullscreen() {
    let fullScreen = document.querySelector('.modal-fullscreen');
    let exitFSc = document.querySelector('.exit-fullscreen');

    fullScreen.addEventListener("click", () => {
        openFullscreen();
    })

    exitFSc.addEventListener("click", () => {
        closeFullscreen();
    })
}

function openFullscreen() {
    let modalCollection = document.querySelector('.modal-collection');
    if (modalCollection.requestFullscreen) {
        modalCollection.requestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}





