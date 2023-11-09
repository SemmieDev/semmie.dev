let username = localStorage.getItem("username");

while (!username || username.length <= 0) {
    username = prompt("Voer jouw username in");
}

localStorage.setItem("username", username);

let greeting = document.getElementById("greeting");

if (greeting) greeting.innerText = "Welkom " + username;