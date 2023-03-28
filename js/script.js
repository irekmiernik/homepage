let link = document.querySelector(".js-section__link");
let image = document.querySelector(".js-section__image");
let imageTitle = document.querySelector(".section__imageTitle");

let clickCounter = 1;

document.querySelector(".section__button").addEventListener("click", () => {
    switch (clickCounter) {
        case (1):
            clickCounter = clickCounter + 1;
            link.src = "images/WKD-Kanie-2.JPG";
            link.alt = "Stacja kolejki WKD w Kaniach (zdjęcie 2)";
            image.href = "images/WKD-Kanie-2.JPG";
            imageTitle.innerText = "Stacja kolejki WKD w Kaniach (zdjęcie 2)";
            break;
        case (2):
            clickCounter = clickCounter + 2;
            link.src = "images/WKD-Kanie-3.JPG";
            link.alt = "Stacja kolejki WKD w Kaniach (zdjęcie 3)";
            image.href = "images/WKD-Kanie-3.JPG";
            imageTitle.innerText = "Stacja kolejki WKD w Kaniach (zdjęcie 3)";
            break;
        case (3):
        default:
            clickCounter = 1;
            link.src = "images/WKD-Kanie-1.JPG";
            link.alt = "Stacja kolejki WKD w Kaniach (zdjęcie 1)";
            image.href = "images/WKD-Kanie-1.JPG";
            imageTitle.innerText = "Stacja kolejki WKD w Kaniach (zdjęcie 1)";
    }
});
