// document.addEventListener("DOMContentLoaded", function () {
// //     // Header load karega
//     fetch("./components/nav-bar.html")
//         .then(response => response.text())
//     .then(data => {
//             document.getElementById("main-header").innerHTML = data;
//         });

//     // Footer load karega
//     fetch("./components/footer.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("main-footer").innerHTML = data;
//         });
// });


// // // const navLinks = document.getElementsByClassName('.main-nav-link');
// // const navLinks = document.querySelectorAll('.main-nav-link');
// // console.log(navLinks)

// const activePage = window.location.pathname;
// setTimeout(() => {
//     const navLinks = document.querySelectorAll('.main-nav-link').forEach(link =>{
//         if(link.href.includes(`${activePage}`)){
//             link.classList.add('active');
//         }
//     })
// }, 100);




// long code
// document.addEventListener("DOMContentLoaded", function () {
//     const activePage = window.location.pathname;

//     // Header load karega
//     fetch("./components/nav-bar.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("main-header").innerHTML = data;

//             // Navbar load hone ke baad active class lagao
//             const navLinks = document.querySelectorAll('.main-nav-link');
//             navLinks.forEach(link => {
//                 if (link.href.includes(`${activePage}`)) {
//                     link.classList.add('active');
//                 }
//             });
//         });

//     // Footer load karega
//     fetch("./components/footer.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("main-footer").innerHTML = data;
//         });
// });





// concise code
// document.addEventListener("DOMContentLoaded", async () => {
//     document.getElementById("main-header").innerHTML = await (await fetch("./components/nav-bar.html")).text();
//     document.getElementById("main-footer").innerHTML = await (await fetch("./components/footer.html")).text();

//     document.querySelectorAll('.main-nav-link').forEach(link => {
//         if (link.href.includes(window.location.pathname)) link.classList.add('active');
//     });
// });


// const carouselLeftBtn = document.querySelector('.left-arr-btn');
// const carouselRightBtn = document.querySelector('.right-arr-btn');
// const carouselSlider = document.querySelector('.main-carousel-slider');
// const allCarouselImages = document.querySelectorAll('.main-carousel-img');

// let slideNum = 1;

// // console.log(carouselLeftBtn);

// const carouselLength = allCarouselImages.length;

// const nextSlide = () => {
//     if (slideNum < carouselLength) {
//         carouselSlider.style.transform = `translateX(-${slideNum * 100}%)`;
//         slideNum++;
//     } else {
//         getFirstSlide();
//     }
// };

// const prevSlide = () => {
//     if (slideNum > 1) {
//         slideNum--;
//         carouselSlider.style.transform = `translateX(-${(slideNum - 1) * 100}%)`;
//     } else {
//         getLastSlide();
//     }
// };

// const getFirstSlide = ()=>{
//     carouselSlider.style.transform = `translateX(0px)`;
//     slideNum = 1;
// }

// const getLastSlide = () => {
//     carouselSlider.style.transform = `translateX(-${(carouselLength - 1) * 100}%)`;
//     slideNum = carouselLength;
// };

// carouselRightBtn.addEventListener('click', ()=>{
//     // if(slideNum < carouselLength) {
//     //     nextSlide();
//     // } else {
//     //     getFirstSlide();
//     // }
//     slideNum < carouselLength ? nextSlide() : getFirstSlide();
// })

// // carouselLeftBtn.addEventListener('click', ()=>{
// //     slideNum > 1 ? getFirstSlide() : nextSlide();
// // })

// // carouselLeftBtn.addEventListener('click', ()=>{
// //     slideNum > 1 ? prevSlide() : getLastSlide();
// // });

// carouselLeftBtn.addEventListener('click', () => {
//     if (slideNum > 1) {
//         prevSlide();
//     } else {
//         setTimeout(() => {
//             carouselSlider.style.transition = "none";
//             getLastSlide();
//             setTimeout(() => {
//                 carouselSlider.style.transition = "transform 0.5s ease-in-out";
//             }, 50);
//         }, 500);
//     }
// });


// function autoSliding() {
//     deleteInterval = setInterval(timer, 5000);
//     function timer() {
//         if (slideNum < carouselLength) {
//             nextSlide();
//         } else {
//             getFirstSlide();
//         }
//     }
// }
// autoSliding();





// new code

// document.addEventListener("DOMContentLoaded", async () => {
//     document.getElementById("main-header").innerHTML = await (await fetch("./components/nav-bar.html")).text();
//     document.getElementById("main-footer").innerHTML = await (await fetch("./components/footer.html")).text();

//     document.querySelectorAll('.main-nav-link').forEach(link => {
//         if (link.href.includes(window.location.pathname)) link.classList.add('active');
//     });
// });

// const carouselLeftBtn = document.querySelector('.left-arr-btn');
// const carouselRightBtn = document.querySelector('.right-arr-btn');
// const carouselSlider = document.querySelector('.main-carousel-slider');
// const allCarouselImages = document.querySelectorAll('.main-carousel-img');

// let slideNum = 1;
// const carouselLength = allCarouselImages.length;

// const nextSlide = () => {
//     if (slideNum < carouselLength) {
//         carouselSlider.style.transform = `translateX(-${slideNum * 100}%)`;
//         slideNum++;
//     } else {
//         resetToFirstSlide();
//     }
// };

// const prevSlide = () => {
//     if (slideNum > 1) {
//         slideNum--;
//         carouselSlider.style.transform = `translateX(-${(slideNum - 1) * 100}%)`;
//     } else {
//         resetToLastSlide();
//     }
// };

// const resetToFirstSlide = () => {
//     setTimeout(() => {
//         carouselSlider.style.transition = "none";
//         carouselSlider.style.transform = "translateX(0px)";
//         slideNum = 1;
//         setTimeout(() => {
//             carouselSlider.style.transition = "transform 0.5s ease-in-out";
//         }, 50);
//     }, 500);
// };

// const resetToLastSlide = () => {
//     setTimeout(() => {
//         carouselSlider.style.transition = "none";
//         carouselSlider.style.transform = `translateX(-${(carouselLength - 1) * 100}%)`;
//         slideNum = carouselLength;
//         setTimeout(() => {
//             carouselSlider.style.transition = "transform 0.5s ease-in-out";
//         }, 50);
//     }, 500);
// };

// carouselRightBtn.addEventListener('click', () => {
//     nextSlide();
// });

// carouselLeftBtn.addEventListener('click', () => {
//     prevSlide();
// });

// function autoSliding() {
//     setInterval(() => {
//         nextSlide();
//     }, 5000);
// }
// autoSliding();



// document.addEventListener("DOMContentLoaded", async () => {
//     document.getElementById("main-header").innerHTML = await (await fetch("./components/nav-bar.html")).text();
//     document.getElementById("main-footer").innerHTML = await (await fetch("./components/footer.html")).text();

//     document.querySelectorAll('.main-nav-link').forEach(link => {
//         if (link.href.includes(window.location.pathname)) link.classList.add('active');
//     });
// });

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("main-header").innerHTML = await (await fetch("/gym-website/components/nav-bar.html")).text();
    document.getElementById("main-footer").innerHTML = await (await fetch("/gym-website/components/footer.html")).text();

    document.querySelectorAll('.main-nav-link').forEach(link => {
        if (link.href.includes(window.location.pathname)) link.classList.add('active');
    });
});


const carouselLeftBtn = document.querySelector('.left-arr-btn');
const carouselRightBtn = document.querySelector('.right-arr-btn');
const carouselSlider = document.querySelector('.main-carousel-slider');
const allCarouselImages = document.querySelectorAll('.main-carousel-img');

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
    carouselSlider.style.transform = `translateX(-${(carouselLength - 1) * 100}%)`;
    slideNum = carouselLength;
};

carouselRightBtn.addEventListener('click', nextSlide);
carouselLeftBtn.addEventListener('click', prevSlide);

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
