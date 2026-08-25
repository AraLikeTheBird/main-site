console.log("JS LOADED");


/* =====================================================
   FIND THE ELEMENTS
   ===================================================== */


/* IMAGE GALLERY */

const galleryImages =
    document.querySelectorAll(".gallery-image");

const imageModal =
    document.getElementById("image-modal");

const modalImage =
    document.getElementById("modal-image");

const imageCloseButton =
    document.getElementById("modalclose");

const previousButton =
    document.getElementById("previous");

const nextButton =
    document.getElementById("next");

const imageCounter =
    document.getElementById("image-counter");


/* WEBSITE GALLERY */

const websiteCards =
    document.querySelectorAll("[data-website]");

const websiteFrame =
    document.getElementById("website-frame");

const websiteFrameContainer =
    document.querySelector(".website-frame-container");

const websiteNextButton =
    document.getElementById("website-next");

const websiteCounter =
    document.getElementById("website-counter");


/* =====================================================
   KEEP TRACK OF WHICH ONE WE ARE LOOKING AT
   ===================================================== */

let currentImage = 0;

let currentWebsite = 0;

let currentType = "";


/*
   currentType can be:

   "image"
       or
   "website"

   This tells the buttons which carousel
   they should control.
*/


/* =====================================================
   IMAGE GALLERY
   ===================================================== */


galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentImage = index;

        currentType = "image";

        openImageModal();

    });

});


function openImageModal() {

    /* Show the image */

    modalImage.src =
        galleryImages[currentImage].src;

    modalImage.alt =
        galleryImages[currentImage].alt;


    /* Show image counter */

    imageCounter.textContent =
        (currentImage + 1) +
        " / " +
        galleryImages.length;


    /* Hide the website */

    websiteFrame.src = "";

    websiteFrameContainer.style.display = "none";

    websiteCounter.style.display = "none";


    /* Show the image */

    modalImage.style.display = "block";

    imageCounter.style.display = "block";


    /* Open modal */

    imageModal.style.display = "flex";

}


function closeImageModal() {

    imageModal.style.display = "none";

    modalImage.src = "";

    websiteFrame.src = "";

}


/* =====================================================
   NEXT IMAGE
   ===================================================== */


function showNextImage() {

    currentImage++;


    if (currentImage >= galleryImages.length) {

        currentImage = 0;

    }


    openImageModal();

}


/* =====================================================
   PREVIOUS IMAGE
   ===================================================== */


function showPreviousImage() {

    currentImage--;


    if (currentImage < 0) {

        currentImage =
            galleryImages.length - 1;

    }


    openImageModal();

}


/* =====================================================
   WEBSITE GALLERY
   ===================================================== */


websiteCards.forEach(function(card, index) {

    card.addEventListener("click", function() {

        currentWebsite = index;

        currentType = "website";

        openWebsiteModal();

    });

});


function openWebsiteModal() {

    /*
       Get the URL from the card.

       For example:

       data-website="https://example.com"

       becomes:

       websiteFrame.src = "https://example.com"
    */

    websiteFrame.src =
        websiteCards[currentWebsite].dataset.website;


    /* Update website counter */

    websiteCounter.textContent =
        (currentWebsite + 1) +
        " / " +
        websiteCards.length;


    /* Hide image */

    modalImage.style.display = "none";

    imageCounter.style.display = "none";


    /* Show website */

    websiteFrameContainer.style.display = "block";

    websiteCounter.style.display = "block";


    /* Open modal */

    imageModal.style.display = "flex";

}


/* =====================================================
   NEXT WEBSITE
   ===================================================== */


function showNextWebsite() {

    currentWebsite++;


    if (currentWebsite >= websiteCards.length) {

        currentWebsite = 0;

    }


    openWebsiteModal();

}


/* =====================================================
   PREVIOUS WEBSITE
   ===================================================== */


function showPreviousWebsite() {

    currentWebsite--;


    if (currentWebsite < 0) {

        currentWebsite =
            websiteCards.length - 1;

    }


    openWebsiteModal();

}


/* =====================================================
   CLOSE BUTTON
   ===================================================== */


imageCloseButton.addEventListener("click", function() {

    closeImageModal();

});


/* =====================================================
   PREVIOUS BUTTON
   ===================================================== */


/*
   You only have ONE previous button.

   So it checks what type of modal is open.
*/


previousButton.addEventListener("click", function() {

    if (currentType === "image") {

        showPreviousImage();

    }

    else if (currentType === "website") {

        showPreviousWebsite();

    }

});


/* =====================================================
   IMAGE NEXT BUTTON
   ===================================================== */


nextButton.addEventListener("click", function() {

    if (currentType === "image") {

        showNextImage();

    }

});


/* =====================================================
   WEBSITE NEXT BUTTON
   ===================================================== */


websiteNextButton.addEventListener("click", function() {

    if (currentType === "website") {

        showNextWebsite();

    }

});


/* =====================================================
   CLICK OUTSIDE TO CLOSE
   ===================================================== */


imageModal.addEventListener("click", function(event) {

    if (event.target === imageModal) {

        closeImageModal();

    }

});


/* =====================================================
   KEYBOARD CONTROLS
   ===================================================== */


document.addEventListener("keydown", function(event) {


    /* ESCAPE = CLOSE */

    if (event.key === "Escape") {

        closeImageModal();

    }


    /* RIGHT ARROW */

    if (event.key === "ArrowRight") {


        if (currentType === "image") {

            showNextImage();

        }


        else if (currentType === "website") {

            showNextWebsite();

        }

    }


    /* LEFT ARROW */

    if (event.key === "ArrowLeft") {


        if (currentType === "image") {

            showPreviousImage();

        }


        else if (currentType === "website") {

            showPreviousWebsite();

        }

    }

});
