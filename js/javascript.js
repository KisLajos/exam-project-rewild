let observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            document.getElementById("button-1").classList.remove("selected");
            document.getElementById("button-2").classList.remove("selected");
            document.getElementById("button-3").classList.remove("selected");
            document.getElementById("button-4").classList.remove("selected");
            document.getElementById("button-5").classList.remove("selected");

            if (entry.target.id==="intersection-1") {
                document.getElementById("button-1").classList.add("selected"); 
            }

            if (entry.target.id==="intersection-2") {
                document.getElementById("button-2").classList.add("selected");
            }

            if (entry.target.id==="intersection-3") {
                document.getElementById("button-3").classList.add("selected");
            }

            if (entry.target.id==="intersection-4") {
                document.getElementById("button-4").classList.add("selected");
            }

            if (entry.target.id==="intersection-5") {
                document.getElementById("button-5").classList.add("selected");
            }

            console.log(entry.target.id);
        }
    };
}, { threshold: 1 }); 

const intersections = document.getElementsByClassName("intersection");
for (const intersection of intersections) {
    observer.observe(intersection)
}