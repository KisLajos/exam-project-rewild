let observer = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    for (const entry of entries) {
        console.log(entry)
        if (entry.isIntersecting) {
            const buttons = document.getElementsByClassName("navbar-button")
            for (const button of buttons) {
                button.classList.remove("selected")
            }

            if (entry.target.id === "intersection-1") {
                document.getElementById("button-1").classList.add("selected");
            }

            if (entry.target.id === "intersection-2") {
                document.getElementById("button-2").classList.add("selected");
            }

            if (entry.target.id === "intersection-3") {
                document.getElementById("button-3").classList.add("selected");
            }

            if (entry.target.id === "intersection-4") {
                document.getElementById("button-4").classList.add("selected");
            }

            if (entry.target.id === "intersection-5") {
                document.getElementById("button-5").classList.add("selected");
            }

            console.log(entry.target.id);
        }
    };
}, { threshold: 0.1 });

const intersections = document.querySelectorAll(".intersection");
for (const intersection of intersections) {
    observer.observe(intersection)
}


/* Learnt this parallax effect with Online Tutorials on: https://www.youtube.com/watch?v=TawH-AqHTXc */
let bg = document.getElementById("bg");
let city = document.getElementById("city");
let grass = document.getElementById("grass");
let flowers = document.getElementById("flowers");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2")

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    console.log(value)

    bg.style.top = value * 0.5 + 'px';
    city.style.top = value * 1.5 + 'px';
    grass.style.top = value * 0.15 + 'px';
    flowers.style.top = value * 0.15 + 'px';
    text1.style.top = value * 2.5 + 'px';
    text2.style.top = value * 2.5 + 'px';
})