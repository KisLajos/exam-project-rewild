let windowWidth = window.innerWidth;

/* Check window width every time the windows is resized */
window.addEventListener('resize', function() {
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
    const currpix = document.getElementById('currpix'); 
    currpix.textContent = value.toFixed(5).toString();

    bg.style.top = value * 0.5 + 'px';
    city.style.top = value * 1.5 + 'px';
    grass.style.top = value * 0.15 + 'px';
    flowers.style.top = value * 0.15 + 'px';
    text1.style.top = value * 2.5 + 'px';
    text2.style.top = value * 2.5 + 'px';
})

/* Since Skrollr break the mobile site, we removed the animation on mobile views */
function hideAnimation() {
    let animation = document.getElementById('scene-container');
    let substitute = document.getElementById('scene-substitute');
    let section = document.getElementById('intersection-3');

    if (windowWidth <= 800) {
        animation.classList.add("hide-scene");
        substitute.classList.remove("hide-scene");
        section.style.height = "auto";
    }
    else {
        animation.classList.remove("hide-scene");
        substitute.classList.add("hide-scene");
        section.style.height = "11000px";
    }
}

//hideAnimation();

/* Trying to make Skrollr responsive */
function handlequery(x) {
    if (x.matches) { // If media query matches
        correctAnimation('animation-flowers-in-hand')
    }
}

var mediaquery = window.matchMedia("(max-width: 1150px)");
handlequery(mediaquery);
mediaquery.addEventListener('change', handlequery);

function correctAnimation(animation_name) {
    const current_animation = document.getElementById(animation_name);
    console.log(current_animation.dataset['6400'])
    current_animation.dataset['6400'] = "top:12rem;";
}
  
var s = skrollr.init({
        /* skrollrBody: 'intersection-3', */

        render: function(data) {
            //Log the current scroll position.
            console.log(data.curTop);
        }
    });

/* if (s.isMobile()) {
    s.destroy(); //since it breaks scrolling on mobile, we kill the Skrollr instance
} */

/* setTimeout(function(){      
    s.refresh();
},400); */