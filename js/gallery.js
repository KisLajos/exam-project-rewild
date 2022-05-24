var galleryItemCount = 6;

for (let galleryItemIndex = 0; galleryItemIndex < galleryItemCount; galleryItemIndex++) {
    
    // using let here is important because otherwise the variable popup (var popup = ...;) 
    // will be overwritten each time the for loop executes meaning that popup will be
    // equal to the last popup item (galleryItemIndex = 5)

    let popup = document.getElementById("popup-" + galleryItemIndex);
    let popupExit = popup.querySelector(".popup-exit");

    popupExit.addEventListener("click", function(event) {
        popup.classList.remove("show");
        scrollStatus("start")
    });

    popup.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.classList.remove("show");
            scrollStatus("start")
        }
    });

    let galleryItem = document.getElementById("gallery-item-" + galleryItemIndex);
    galleryItem.addEventListener("click", function(event) {
        popup.classList.add("show");
        scrollStatus("stop")
    });

    document.body.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            popup.classList.remove("show");
            scrollStatus("start")
        }
    });
}

/* Handles scrolling,
so if the modal is open, it's not possible to scroll,
but once the modal is closed, you can scroll again */
function scrollStatus(status) {
    if (status==="stop") {
        document.body.classList.add("stop-scrolling");
    }
    else if (status==="start") {
        document.body.classList.remove("stop-scrolling");
    }
    else {
        console.log("Wrong parameter received!");
    }
}

// ----------

