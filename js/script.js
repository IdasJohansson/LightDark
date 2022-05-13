
/*
// Skapar popup + alert
let username = prompt("Enter your name: ");
alert("Welcome, " + username + "!");
*/


// Skriver ut medelande i konsollen
console.log("Page loaded!")

function switchTheme () {
    document.querySelector("body").classList.toggle("light-theme");
    document.querySelectorAll(".buttons").classList.toggle("btnLight-theme");
 
    /*
    document.querySelectorAll(".buttons").classList.toggle("btnLight-theme");
    */
}

function disableBtn () {
    document.getElementById("switchThemeId").disabled = true;
}

/*
Avaktiverar alla knappar utom disabled
document.getElementsByClassName("buttons").disabled = true; 
*/

function activateBtn () {
    document.getElementById("switchThemeId").disabled = false;
}
