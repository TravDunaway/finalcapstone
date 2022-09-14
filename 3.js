const readyBtn = document.getElementById('submitbtn')
const inputField = document.getElementById('inputname')
let playerOnePart = window.location.search

console.log(playerOnePart)
function submitfunction(){
        window.location.href="4.html" + playerOnePart + "&secondPlayer=" + inputField.value
}