document.addEventListener("DOMContentLoaded", async () => {
    // Fetch and insert Navbar
    const header = document.getElementById("main-header");
    const response = await fetch("./components/nav-bar.html");
    header.innerHTML = await response.text();

    // Fetch and insert Footer
    const footer = document.getElementById("main-footer");
    const footerResponse = await fetch("./components/footer.html");
    footer.innerHTML = await footerResponse.text();

    // 🛠 Ensure active class is applied after inserting navbar
    setTimeout(() => {
        const currentPath =
            window.location.pathname.split("/").pop() || "index.html";

        let isActiveSet = false; // Flag to check if any nav link is active

        document.querySelectorAll(".main-nav-link").forEach((link) => {
            let linkPath = link.getAttribute("href").split("/").pop();

            if (currentPath === linkPath) {
                link.classList.add("active");
                isActiveSet = true; // Mark that at least one active link is set
            } else {
                link.classList.remove("active");
            }
        });

        // ⚡ If no active link is set, make "Home" active by default
        if (!isActiveSet) {
            document
                .querySelector('.main-nav-link[href="index.html"]')
                ?.classList.add("active");
        }
    }, 100);

    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-bar-elements");

    // hamburger.addEventListener("click", function () {
    //     navMenu.classList.toggle("active");
    //     hamburger.classList.toggle("active"); // For cross effect
    // });

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-bar-elements");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Navbar को show/hide करने के लिए toggle
        hamburger.classList.toggle("active"); // Hamburger animation के लिए
    });
    
});

const carouselLeftBtn = document.querySelector(".left-arr-btn");
const carouselRightBtn = document.querySelector(".right-arr-btn");
const carouselSlider = document.querySelector(".main-carousel-slider");
const allCarouselImages = document.querySelectorAll(".main-carousel-img");

let slideNum = 1;
const carouselLength = allCarouselImages.length;

const nextSlide = () => {
    if (slideNum < carouselLength) {
        carouselSlider.style.transition = "transform 0.5s ease-in-out";
        carouselSlider.style.transform = `translateX(-${slideNum * 100}%)`;
        slideNum++;
    } else {
        setTimeout(() => {
            carouselSlider.style.transition = "none";
            getFirstSlide();
        }, 500);
    }
};

const prevSlide = () => {
    if (slideNum > 1) {
        slideNum--;
        carouselSlider.style.transition = "transform 0.5s ease-in-out";
        carouselSlider.style.transform = `translateX(-${(slideNum - 1) * 100}%)`;
    } else {
        setTimeout(() => {
            carouselSlider.style.transition = "none";
            getLastSlide();
        }, 500);
    }
};

const getFirstSlide = () => {
    carouselSlider.style.transform = `translateX(0px)`;
    slideNum = 1;
};

const getLastSlide = () => {
    carouselSlider.style.transform = `translateX(-${(carouselLength - 1) * 100
        }%)`;
    slideNum = carouselLength;
};

carouselRightBtn.addEventListener("click", nextSlide);
carouselLeftBtn.addEventListener("click", prevSlide);

function autoSliding() {
    setInterval(() => {
        if (slideNum < carouselLength) {
            nextSlide();
        } else {
            setTimeout(() => {
                carouselSlider.style.transition = "none";
                getFirstSlide();
            }, 500);
        }
    }, 5000);
}
autoSliding();
