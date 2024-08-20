// Turn pages when clicking next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains("turn")) {
            pageTurn.classList.remove("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Contact me button click function
const pages = document.querySelectorAll(".book-page.page-right");
const contactmebtn = document.querySelector(".btn.contact-me");

contactmebtn.onclick = (event) => {
    event.preventDefault();

    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add("turn");

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

let totalpages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalpages - 1;
    }
}

// Back profile button click function
const backprofilebtn = document.querySelector(".back-profile");

backprofilebtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

// Opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left")

// Opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

// Opening animation (page Left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

// Opening animation (all page right animation)
pages.forEach((page, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove("turn");

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});
