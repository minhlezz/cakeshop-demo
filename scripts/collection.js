
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

var currentPhotoCollectionIndex = 1;
var currentPhotoIndex = 0;

initCollection();



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

    autoTransitionPhotos(collectionPhotos);
    resetIndexAtLastItem(collectionLength);

}

function autoTransitionPhotos(collectionPhotos) {
    for (let i = 0; i < collectionPhotos.length; i++) {
        collectionPhotos[i].style.transform = `translate(-${currentPhotoIndex * 200}px )`;
        collectionPhotos[i].style.transitionDuration = "1s";
        collectionPhotos[i].style.transitionTimingFunction = "linear";
    }
    currentPhotoIndex++;
}

function resetIndexAtLastItem(collectionLength) {
    if (currentPhotoIndex > collectionLength) {
        currentPhotoIndex = 0;
    }
}

function renderCollectionView(collectionID) {
    collections.forEach((item, index) => {
        let itemDetail = `
            <div class="collection-card" onclick="initModalCollection(),getIndexPhotoSelection(${index})" >
                    <img src="${item.image}" alt="1" class="collection-image">
            </div>
        `
        collectionID.insertAdjacentHTML('beforeend', itemDetail);
    });
}


function initModalCollection() {
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


function getIndexPhotoSelection(index) {
    showCurrentSlidePhotoCollection(currentPhotoCollectionIndex = index)
}

function showCurrentSlidePhotoCollection(indexPosition) {

    let imgNodes = document.querySelectorAll('.modal-collection-image');
    let i;

    //Set slideIndex = lastIndex at the end of List
    if (indexPosition >= imgNodes.length) {
        currentPhotoCollectionIndex = imgNodes.length - 1;
    };

    //Set slideIndex = firstIndex at the head of List
    if (indexPosition < 1) {
        currentPhotoCollectionIndex = 0
    };

    for (i = 0; i < imgNodes.length; i++) {
        imgNodes[i].style.display = "none";
    }

    // Display current slide 
    imgNodes[currentPhotoCollectionIndex].style.display = "block"
}

function onPrevItem(n) {
    showCurrentSlidePhotoCollection(currentPhotoCollectionIndex += n);
}

function onNextItem(n) {
    showCurrentSlidePhotoCollection(currentPhotoCollectionIndex += n);
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





