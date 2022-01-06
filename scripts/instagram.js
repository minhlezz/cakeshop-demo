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



// Initialize 
onInit()


function onInit() {
    showImageInstagram();
}


function showImageInstagram() {
    let instagramID = document.querySelector("#instagramID");
    // Load template Image 
    renderImages(instagramID);

}

function renderImages(instagramID) {
    cloneInstagrams.forEach((element, index) => {
        let photoDetail = `
                <div class="col-4 p-5" id="instaPhotos" onclick="showModal(); currentSlide(${index})">
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
function showModal() {
    let content = document.querySelector('#md-content');
    let modalID = document.getElementById('modal');
    let closeBtn = document.getElementsByClassName('modal-close');

    openModal(modalID);
    loadContentModal(content);
    closeModal(closeBtn, modalID);
}

function openModal(modalID) {
    modalID.style.display = "block";
}

function loadContentModal(content) {
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

function closeModal(closeBtn, modalID) {
    closeBtn[0].addEventListener("click", () => {
        modalID.style.display = "none";
    })
}




//Handling Modal Gallery
var slideIndex = 1;

function currentSlide(index) {
    showSlides(slideIndex = index);
}


function showSlides(currentIndex) {
    let slides = document.querySelectorAll(".modal-content-slide");
    let i;

    //Set slideIndex = lastIndex at the end of List
    if (currentIndex >= slides.length) {
        slideIndex = slides.length - 1;
    };

    //Set slideIndex = firstIndex at the head of List
    if (currentIndex < 1) {
        slideIndex = 0
    };
    // Hide All Elements as opening the modal
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display current slide 
    slides[slideIndex].style.display = "flex";

}

function onPrev(n) {
    showSlides(slideIndex += n);
}

function onNext(n) {
    showSlides(slideIndex += n);
}

