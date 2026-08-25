console.log("JS LOADED");



/*BURGER BUTTON*/
const burger = document.querySelector(".burgertoggle");
const nav = document.querySelector(".navlinks");
burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});





/*MODAL PORT SECTION*/
    /* Find stuff by class or id*/
    const projectCards =
        document.querySelectorAll(".project-card");

    const modal =
        document.getElementById("project-modal");

    const modalTitle =
        document.getElementById("modal-title");

    const websiteFrame =
        document.getElementById("website-frame");

    const closeButton =
        document.getElementById("close-modal");

    /*MODAL OPENS*/
    projectCards.forEach(function(card) {

        card.addEventListener("click", function() {

            const title =
                card.dataset.title;

            const website =
                card.dataset.website;


            modalTitle.textContent =
                title;

            websiteFrame.src =
                website;


            modal.style.display =
                "block";

        });

    });

    /* ALL THE DIFFERENT CLOSINGS */
    closeButton.addEventListener("click", function() {

        modal.style.display =
            "none";

        websiteFrame.src =
            "";

    });

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            modal.style.display =
                "none";

            websiteFrame.src =
                "";

        }

    });

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            modal.style.display =
                "none";

            websiteFrame.src =
                "";

        }

    });