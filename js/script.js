{
    const imagesTable = [
        { link: "images/Zima w Kaniach.jpg", title: "Zima w Kaniach" },
        { link: "images/Odległość z Kań do Warszawy Cetrum.jpg", title: "Odległość z Kań do centrum Warszawy" },
        { link: "images/Stacja kolejki WKD w Kaniach-1.jpg", title: "Stacja kolejki WKD w Kaniach" },
        { link: "images/Stacja kolejki WKD w Kaniach-2.jpg", title: "Stacja kolejki WKD w Kaniach" },
        { link: "images/Stacja kolejki WKD w Kaniach-3.jpg", title: "Stacja kolejki WKD w Kaniach" }
    ];
    let imageNumber = -1;

    const showNextImage = () => {
        imageNumber = imageNumber >= imagesTable.length - 1 ? 0 : ++imageNumber;
        const image = imagesTable[imageNumber];
        document.querySelector(".js-section__image").src = image.link;
        document.querySelector(".js-section__image").alt = image.title;
        document.querySelector(".js-section__href").href = image.link;
        document.querySelector(".section__imageTitle").innerText = image.title;
    }

    const init = () => {
        showNextImage();
        document.querySelector(".section__button").addEventListener("click", showNextImage);
    }

    init();
}