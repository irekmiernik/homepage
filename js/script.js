{
    const imagesTable = {
        table: []
    }

    const link = () => { return document.querySelector(".js-section__link") }
    const image = () => { return document.querySelector(".js-section__image") }
    const imageTitle = () => { return document.querySelector(".section__imageTitle") }

    const clickCounter = {
        counter: NaN,
        setCounter(counter) { this.counter = counter },
        getCounter() { return this.counter }
    }

    const onButtonClick = () => {
        link().src = `images/${imagesTable.table[clickCounter.getCounter()].link}`;
        link().alt = imagesTable.table[clickCounter.getCounter()].title;
        image().href = `images/${imagesTable.table[clickCounter.getCounter()].link}`;
        imageTitle().innerText = imagesTable.table[clickCounter.getCounter()].title;
        if (clickCounter.getCounter() < (imagesTable.table.length - 1)) clickCounter.setCounter(clickCounter.getCounter() + 1);
        else clickCounter.setCounter(0);
    }

    const click = () => { document.querySelector(".section__button").addEventListener("click", onButtonClick); }

    const init = () => {
        imagesTable.table.push({ link: "Zima w Kaniach.jpg", title: "Zima w Kaniach" });
        imagesTable.table.push({ link: "Odległość z Kań do Warszawy Cetrum.jpg", title: "Odległość z Kań do Warszawy Cetrum" });
        imagesTable.table.push({ link: "Stacja kolejki WKD w Kaniach-1.jpg", title: "Stacja kolejki WKD w Kaniach" });
        imagesTable.table.push({ link: "Stacja kolejki WKD w Kaniach-2.jpg", title: "Stacja kolejki WKD w Kaniach" });
        imagesTable.table.push({ link: "Stacja kolejki WKD w Kaniach-3.jpg", title: "Stacja kolejki WKD w Kaniach" });
        clickCounter.setCounter(0);
        onButtonClick();
    }

    init();
    click();

}


