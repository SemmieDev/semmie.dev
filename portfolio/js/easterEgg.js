document.getElementById("easterEgg").addEventListener("click", event => {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "white";
    flushCss(document.body);
    document.body.style.transition = "background-color 2s";

    let square = document.createElement("div");

    square.style.position = "fixed";
    square.style.left = "0";
    square.style.top = "0";
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor = "black";
    flushCss(square);
    square.style.transition = "background-color 2s, left ease-out 0.5s, top ease-out 0.5s";

    square.addEventListener("mouseenter", event => {
        square.style.left = `${Math.random() * (document.body.offsetWidth - 100)}px`;
        square.style.top = `${Math.random() * (document.body.offsetHeight - 100)}px`;

        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        square.style.backgroundColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    });

    document.body.append(square);
});

function flushCss(element) {
    // By reading the offsetHeight property, we are forcing
    // the browser to flush the pending CSS changes (which it
    // does to ensure the value obtained is accurate).
    element.offsetHeight;
}