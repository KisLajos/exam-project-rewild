let windowWidth = window.innerWidth;

/* Check window width every time the windows is resized */
window.addEventListener('resize', function () {
    windowWidth = window.innerWidth;
});

/* IntersectionObserver used to animate the navbar dots,
so when we arrive at a section, the corresponding dot gets animated */
let observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {

        if (entry.isIntersecting) {
            const buttons = document.getElementsByClassName("navbar-button");

            for (const button of buttons) {
                button.classList.remove("selected");
            }

            if (entry.target.id === "intersection-1") {
                document.getElementById("button-1").classList.add("selected");
            }

            if (entry.target.id === "intersection-2") {
                document.getElementById("button-2").classList.add("selected");
            }

            if (entry.target.id === "intersection-3" && windowWidth <= 800) {
                document.getElementById("button-3").classList.add("selected");
            }

            if (entry.target.id === "intersection-4") {
                document.getElementById("button-4").classList.add("selected");
            }

            if (entry.target.id === "intersection-5") {
                document.getElementById("button-5").classList.add("selected");
            }
        }
    };
}, { threshold: 0.25 });

/* Because the animation section is extra long due to the skrollr animations' nature
 we have to have a second observer with a much smaller threshold
 that only watches for the animation section */
let long_observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {

        if (entry.isIntersecting) {
            const buttons = document.getElementsByClassName("navbar-button");

            for (const button of buttons) {
                button.classList.remove("selected");
            }

            if (entry.target.id === "intersection-3") {
                document.getElementById("button-3").classList.add("selected");
            }
        }
    };
}, { threshold: 0.02 });

const intersections = document.querySelectorAll(".intersection");
for (const intersection of intersections) {
    observer.observe(intersection)

    if (windowWidth > 800) {
        long_observer.observe(intersection);
    }
}

/* Learnt this parallax effect with Online Tutorials on: https://www.youtube.com/watch?v=TawH-AqHTXc */
let bg = document.getElementById("bg");
let city = document.getElementById("city");
let grass = document.getElementById("grass");
let flowers = document.getElementById("flowers");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    /* debugging for animation */
    /* const currpix = document.getElementById('currpix');
    currpix.textContent = value.toFixed(5).toString(); */

    bg.style.top = value * 0.5 + 'px';
    city.style.top = value * 1.5 + 'px';
    grass.style.top = value * 0.15 + 'px';
    flowers.style.top = value * 0.15 + 'px';
    text1.style.top = value * 2.5 + 'px';
    text2.style.top = value * 2.5 + 'px';
})

/* Skrollr */

/* initializing Skrollr */

var s = skrollr.init({
    forceHeight: false,
    mobileCheck: function () {
        return false; //we force Skrollr's mobile version to be off, because otherwise it will break the page flow on iOS
    }
});

/* Skrollr responsivity */

/* Instead of dinamically messing around with each and every animation frame,
we just switch out for a new set of data attributes when needed */
function switchAnimation() {
    let animation = document.getElementById('scene-container');
    let substitute = document.getElementById('scene-substitute');

    if (windowWidth <= 1150) {
        animation.classList.add("hide-scene");
        substitute.classList.remove("hide-scene");
    }
    else {
        animation.classList.remove("hide-scene");
        substitute.classList.add("hide-scene");
    }
}

switchAnimation();

// refreshes animation from time to time, could be useful
/* setTimeout(function(){      
    s.refresh();
},400); */

/* SVG animation */

// Get the id of the <path> element and the length of <path>
var flowerline = document.getElementById("flowerline");
var length = flowerline.getTotalLength();

// The start position of the drawing
flowerline.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
flowerline.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var draw = length * scrollpercent;

    // Reverse the drawing (when scrolling upwards)
    flowerline.style.strokeDashoffset = length - draw;
}