/*MODAL STUFF FOR illustrations AND photography*/
/* =====================================================
   FIND THE ELEMENTS
   ===================================================== */
const photos = document.querySelectorAll(".mosaic-item");
const photoModal = document.getElementById("photo-modal");
const photoModalImage =
    document.getElementById("photo-modal-image");
const photoDescription =
    document.getElementById("photo-description");
const photoCloseButton =
    document.getElementById("photo-modal-close");
const photoPreviousButton =
    document.getElementById("photo-previous");
const photoNextButton =
    document.getElementById("photo-next");
const photoCounter =
    document.getElementById("photo-counter");


/* =====================================================
   KEEP TRACK OF THE CURRENT PHOTO
   ===================================================== */

let currentPhoto = 0;


/* =====================================================
   CLICKING A PHOTO
   ===================================================== */

photos.forEach(function(photo, index) {

    photo.addEventListener("click", function() {

        currentPhoto = index;

        openPhotoModal();

    });

});


/* =====================================================
   OPEN THE MODAL
   ===================================================== */

function openPhotoModal() {

    /*
        Get the image from data-image
    */

    photoModalImage.src =
        photos[currentPhoto].dataset.image;


    /*
        Get the description from data-description
    */

    photoDescription.textContent =
        photos[currentPhoto].dataset.description;


    /*
        Get the alt text from the original image
    */

    const originalImage =
        photos[currentPhoto].querySelector("img");

    photoModalImage.alt =
        originalImage.alt;


    /*
        Update the counter
    */

    photoCounter.textContent =
        (currentPhoto + 1) +
        " / " +
        photos.length;


    /*
        Show the modal
    */

    photoModal.style.display = "flex";

}


/* =====================================================
   CLOSE THE MODAL
   ===================================================== */

function closePhotoModal() {

    photoModal.style.display = "none";

    /*
        Clear the image when the modal closes.
        This isn't strictly necessary, but it prevents
        the image from remaining loaded in the background.
    */

    photoModalImage.src = "";

}


/* =====================================================
   NEXT PHOTO
   ===================================================== */

function showNextPhoto() {

    currentPhoto++;


    /*
        If we go past the final image,
        go back to the first image.
    */

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }


    openPhotoModal();

}


/* =====================================================
   PREVIOUS PHOTO
   ===================================================== */

function showPreviousPhoto() {

    currentPhoto--;


    /*
        If we go before the first image,
        go to the final image.
    */

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }


    openPhotoModal();

}


/* =====================================================
   CLOSE BUTTON
   ===================================================== */

photoCloseButton.addEventListener("click", function() {

    closePhotoModal();

});


/* =====================================================
   PREVIOUS BUTTON
   ===================================================== */

photoPreviousButton.addEventListener("click", function() {

    showPreviousPhoto();

});


/* =====================================================
   NEXT BUTTON
   ===================================================== */

photoNextButton.addEventListener("click", function() {

    showNextPhoto();

});


/* =====================================================
   CLICK OUTSIDE THE IMAGE TO CLOSE
   ===================================================== */

photoModal.addEventListener("click", function(event) {

    /*
        Only close if the user clicked the dark
        background itself.

        Clicking the image, arrows, description,
        etc. will NOT close the modal.
    */

    if (event.target === photoModal) {

        closePhotoModal();

    }

});


/* =====================================================
   KEYBOARD CONTROLS
   ===================================================== */

document.addEventListener("keydown", function(event) {


    /*
        ESCAPE = CLOSE
    */

    if (event.key === "Escape") {

        closePhotoModal();

    }


    /*
        RIGHT ARROW = NEXT
    */

    if (event.key === "ArrowRight") {

        /*
            Only do this if the modal is actually open.
        */

        if (photoModal.style.display === "flex") {

            showNextPhoto();

        }

    }


    /*
        LEFT ARROW = PREVIOUS
    */

    if (event.key === "ArrowLeft") {

        /*
            Only do this if the modal is actually open.
        */

        if (photoModal.style.display === "flex") {

            showPreviousPhoto();

        }

    }

});