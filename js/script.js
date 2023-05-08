{
    const imagesTable = {
        table: [],
        imageNumber: -1,
        nextImage() {
            this.imageNumber++;
            if (this.imageNumber >= this.table.length) this.imageNumber = 0;
            return this.table[this.imageNumber];
        }
    }

    const inputImages = (table) => {
        table.push({ link: "Zima w Kaniach.jpg", title: "Zima w Kaniach" });
        table.push({ link: "Odległość z Kań do Warszawy Cetrum.jpg", title: "Odległość z Kań do Warszawy Cetrum" });
        table.push({ link: "Stacja kolejki WKD w Kaniach-1.jpg", title: "Stacja kolejki WKD w Kaniach" });
        table.push({ link: "Stacja kolejki WKD w Kaniach-2.jpg", title: "Stacja kolejki WKD w Kaniach" });
        table.push({ link: "Stacja kolejki WKD w Kaniach-3.jpg", title: "Stacja kolejki WKD w Kaniach" });
    }

    const setNextImage = () => {
        let image = imagesTable.nextImage();
        document.querySelector(".js-section__image").src = `images/${image.link}`;
        document.querySelector(".js-section__image").alt = image.title;
        document.querySelector(".js-section__href").href = `images/${image.link}`;
        document.querySelector(".section__imageTitle").innerText = image.title;
    }

    const init = () => {
        inputImages(imagesTable.table);
        setNextImage();
    }

    init();
    document.querySelector(".section__button").addEventListener("click", setNextImage);
}