let instagrams = [
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-1.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-2.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-3.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-4.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-5.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-6.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-7.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-8.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
    {
        username: "weddingcaketemplate",
        image: "./images/instragram/insta-9.jpg",
        createdAt: "January 3",
        comment: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com",
        commentTime: "1d",
    },
];

let reverseInstagrams = instagrams.reverse();
let cloneInstagrams = [...instagrams, ...reverseInstagrams];
let currentImageInstagramIndex = 1;

// Initialize 
initInstagram()


function initInstagram() {
    initImageInstagram();
}


function initImageInstagram() {
    let instagramID = document.querySelector("#instagram-photos");
    renderImageInstagram(instagramID);

}

function renderImageInstagram(instagramID) {
    cloneInstagrams.forEach((element, index) => {
        let photoDetail = `
                <div class="col-4 p-5" id="instaPhotos" onclick="showModalInstagram(); currentImageSelection(${index})">
                    <div class="instagram-photos">
                        <img src="${element.image}" alt="1" class="instagram-image">
                        <div class="instragram-photos-content">
                            <p>${element.comment}</p>
                        </div>
                    </div>
                </div>
        `
        instagramID.insertAdjacentHTML("beforeend", photoDetail);
    });

}

//Trigger onClick photos show Modal Box 
function showModalInstagram() {
    toggleModalInstagram();
    renderContentModalInstagram();

}

function toggleModalInstagram() {
    let modalID = document.getElementById('modal');
    openModal(modalID);
    closeModal(modalID);
}

function openModal(modalID) {
    modalID.style.display = "block";
}

function closeModal(modalID) {
    let closeBtn = document.getElementsByClassName('modal-close');

    closeBtn[0].addEventListener("click", () => {
        modalID.style.display = "none";
    });
}

function renderContentModalInstagram() {
    let content = document.querySelector('#md-content');
    cloneInstagrams.forEach((item) => {
        let modalDetail = `
            <div class="modal-content-slide">
                <div class="modal-image">
                    <img id="modalImg" src="${item.image}" alt="">
                </div>
                <div class="modal-body">
                        <!-- Modal Header -->
                        <div class="modal-header d-flex-center-btw">
                            <div class="user">
                                <div class="user-avatar d-flex-center-center">M</div>
                                <div class="user-infomation">
                                    <span class="user-name">${item.username}</span>
                                    <span class="user-postAt">${item.createdAt}</span>
                                </div>
                            </div>
                            <div class="user-social">
                                <img src="./images/general/instagram-svg.svg" alt="">
                            </div>
                        </div>
                        <!-- End Modal Header -->
                        <!-- Modal Comments -->
                        <div class="modal-comments">
                            <div class="modal-comments-content">
                                <span>${item.comment}</span>
                            </div>
                            <div class="modal-comments-timeAt">
                                <span>${item.commentTime}</span>
                            </div>
                        </div>
                        <!--End Modal Comments -->
                        <!-- Modal Footer -->
                        <div class="modal-footer"></div>
                        <!-- End Modal Footer -->
                </div>
            </div>
        `
        content.insertAdjacentHTML("beforeend", modalDetail);
    });
}


function currentImageSelection(index) {
    showSlides(currentImageInstagramIndex = index);
}


function showSlides(index) {
    let photos = document.querySelectorAll(".modal-content-slide");
    hideAllPhotosInstagramInSlideshow(photos);
    setListRange(index, photos)
    displayCurrentPhoto(photos)

}


function hideAllPhotosInstagramInSlideshow(photos) {
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }

}

function displayCurrentPhoto(photos) {
    photos[currentImageInstagramIndex].style.display = "flex";
}

function setListRange(index, photos) {
    if (index >= photos.length) {
        currentImageInstagramIndex = photos.length - 1;
    };

    if (index < 1) {
        currentImageInstagramIndex = 0
    };
}



function onPrevPhotoInstagram(numberPrev) {
    showSlides(currentImageInstagramIndex += numberPrev);
}

function onNextPhotoInstagram(numberNext) {
    showSlides(currentImageInstagramIndex += numberNext);
}

