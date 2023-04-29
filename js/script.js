{
    const link = document.querySelector(".js-section__link");
    const image = document.querySelector(".js-section__image");
    const imageTitle = document.querySelector(".section__imageTitle");

    let clickCounter = 1;

    const nextImage = (counter) => {
        switch (counter) {
            case (1):
                link.src = "images/WKD-Kanie-2.JPG";
                link.alt = "Stacja kolejki WKD w Kaniach (zdjęcie 2)";
                image.href = "images/WKD-Kanie-2.JPG";
                imageTitle.innerText = "Stacja kolejki WKD w Kaniach (zdjęcie 2)";
                return counter += 1;
            case (2):
                link.src = "images/WKD-Kanie-3.JPG";
                link.alt = "Stacja kolejki WKD w Kaniach (zdjęcie 3)";
                image.href = "images/WKD-Kanie-3.JPG";
                imageTitle.innerText = "Stacja kolejki WKD w Kaniach (zdjęcie 3)";
                return counter += 1;
            case (3):
            default:
                link.src = "images/WKD-Kanie-1.JPG";
                link.alt = "Stacja kolejki WKD w Kaniach (zdjęcie 1)";
                image.href = "images/WKD-Kanie-1.JPG";
                imageTitle.innerText = "Stacja kolejki WKD w Kaniach (zdjęcie 1)";
                return 1;
        }
    }

    const onButtonClick = () => {
        clickCounter = nextImage(clickCounter);
    }

    document.querySelector(".section__button").addEventListener("click", onButtonClick);
}
