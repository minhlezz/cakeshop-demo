
//Load more instagram photos
loadMore();

function loadMore() {
    const loadMore = document.querySelector("#loadmore");
    const instaPhotos = document.querySelectorAll("#instaPhotos");
    //loading onInit 9 photos -> setCurrentPhoto = 9
    const currentPhoto = 9;

    //Adding event intro loadmore button
    loadMore.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = currentPhoto; i < instaPhotos.length; i++) {
            if (instaPhotos[i]) {
                instaPhotos[i].style.display = "block";
            }
        }
        e.target.style.display = "none";
    });

}