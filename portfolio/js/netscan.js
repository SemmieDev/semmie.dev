const RESULTS_ELEMENT = document.getElementById("results");

for (let i = 0; i <= 255; i++) {
    let request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        let listElement = document.createElement("li");
        let aElement = document.createElement("a");

        aElement.href = "http://10.2.100." + i;
        aElement.innerText = "http://10.2.100." + i;

        listElement.append(aElement);
        RESULTS_ELEMENT.append(listElement);
    });
    request.open("GET", "http://10.2.100." + i, true);
    request.send();
}