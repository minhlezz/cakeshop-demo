
loadMorePhotosInstagram();

function loadMorePhotosInstagram() {
    registerEventLoadMorePhotosInstagram();

}

function registerEventLoadMorePhotosInstagram() {
    const loadMore = document.querySelector("#loadmore");
    const numberPhotosPerLoad = 9;

    loadMore.addEventListener('click', (event) => {
        event.preventDefault();
        loadMorePhotos(numberPhotosPerLoad);
        hideLoadMoreButton(event);
    });
}

function loadMorePhotos(numberPhotosPerLoad) {
    const instaPhotos = document.querySelectorAll("#instaPhotos");
    for (let i = numberPhotosPerLoad; i < instaPhotos.length; i++) {
        if (instaPhotos[i]) {
            instaPhotos[i].style.display = "block";
        }
    }
}

function hideLoadMoreButton(event) {
    event.target.style.display = "none";
}