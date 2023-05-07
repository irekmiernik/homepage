{
    const imagesTable = [];

    const setImagesTable = () => {
        imagesTable.push({ link: "Zima w Kaniach.jpg", title: "Zima w Kaniach" });
        imagesTable.push({ link: "Odległość z Kań do Warszawy Cetrum.jpg", title: "Odległość z Kań do Warszawy Cetrum" });
        imagesTable.push({ link: "Stacja kolejki WKD w Kaniach-1.jpg", title: "Stacja kolejki WKD w Kaniach" });
        imagesTable.push({ link: "Stacja kolejki WKD w Kaniach-2.jpg", title: "Stacja kolejki WKD w Kaniach" });
        imagesTable.push({ link: "Stacja kolejki WKD w Kaniach-3.jpg", title: "Stacja kolejki WKD w Kaniach" });
    }

    const setImage = (imageAccount) => {
        const sectionImage = document.querySelector(".js-section__image");
        const sectionHref = document.querySelector(".js-section__href");
        const sectionImageTitle = document.querySelector(".section__imageTitle");

        sectionImage.src = `images/${imageAccount.link}`;
        sectionImage.alt = imageAccount.title;
        sectionHref.href = `images/${imageAccount.link}`;
        sectionImageTitle.innerText = imageAccount.title;
    }

    const clickCounter = {
        counter: NaN,
        setCounter(counter) { this.counter = counter },
        getCounter() { return this.counter }
    }

    const onButtonClick = () => {
        if (clickCounter.getCounter() < (imagesTable.length - 1)) clickCounter.setCounter(clickCounter.getCounter() + 1);
        else clickCounter.setCounter(0);
        setImage(imagesTable[clickCounter.getCounter()]);
    }

    const init = () => {
        setImagesTable();
        clickCounter.setCounter(0);
        setImage(imagesTable[0]);
    }

    init();
    document.querySelector(".section__button").addEventListener("click", onButtonClick);
}