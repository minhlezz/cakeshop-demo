
// Cake collection automatic slideshow
main();

var currentIndex = 0;

function main() {
    showCollectionSlide();

    //re-invoking main to call showCollectionSlide against
    setTimeout(main, 2000);
}


function showCollectionSlide() {
    let collections = document.querySelector('#slideCollectionID');
    let collectionItems = collections.children;
    let i;

    // Moving items to the left;
    for (i = 0; i < collectionItems.length; i++) {
        collectionItems[i].style.transform = `translate(-${currentIndex * 200}px )`;
        collectionItems[i].style.transitionDuration = "0.7s";
        collectionItems[i].style.transitionTimingFunction = "linear";

    }

    currentIndex++;

    //Reset index at the end of collection.
    if (currentIndex > collectionItems.length) {
        currentIndex = 0;
    }
}







