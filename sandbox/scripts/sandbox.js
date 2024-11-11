const username = "Lifegate"
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContext += username === "" ? `Guest` : username;

console.dir(document);

