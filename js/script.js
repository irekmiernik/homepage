{
    const showImage = (index, table) => {
        index = (index < 0 || index >= table.length) ? 0 : index;
        const image = table[index];
        document.querySelector(".js-section__image").src = image.link;
        document.querySelector(".js-section__image").alt = image.title;
        document.querySelector(".js-section__href").href = image.link;
        document.querySelector(".section__imageTitle").innerText = image.title;
    };
    const init = () => {
        const imagesTable = [
            { link: "images/Zima w Kaniach.jpg", title: "Zima w Kaniach" },
            { link: "images/Odległość z Kań do Warszawy Cetrum.jpg", title: "Odległość z Kań do centrum Warszawy" },
            { link: "images/Stacja kolejki WKD w Kaniach-1.jpg", title: "Stacja kolejki WKD w Kaniach" },
            { link: "images/Stacja kolejki WKD w Kaniach-2.jpg", title: "Stacja kolejki WKD w Kaniach" },
            { link: "images/Stacja kolejki WKD w Kaniach-3.jpg", title: "Stacja kolejki WKD w Kaniach" },
            { link: "images/Hotel dla koni w Kaniach.jpg", title: "Hotel dla koni w Kaniach" }
        ];
        let imageIndex = 0;
        showImage(imageIndex, imagesTable);
        document.querySelector(".section__button").addEventListener("click", () => {
            showImage(imageIndex = imageIndex >= imagesTable.length - 1 ? 0 : ++imageIndex, imagesTable)
        });
    };
    init();
}