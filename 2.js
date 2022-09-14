const readyBtn = document.getElementById('submitbtn')
const inputField = document.getElementById('inputname')

function submitfunction(){
let inputFieldValue = inputField.value 
        window.location.href="3.html" + "?playerone=" + inputFieldValue
}
//     http://localhost:5500/3.html?playerone=jon