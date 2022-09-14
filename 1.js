console.log('hello world')

const counterText = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const playBtn = document.querySelector('#play-btn')
const plusBtn = document.querySelector('#plus-btn')

let count = 0;

function increase() {
    if(count < 2){count++}
    counterText.textContent = count
    if(count>1){
        document.getElementById("play-btn").style.backgroundColor = '#706526'
    }
    console.log(count)
 
}

function decrease() {
    if(count > 0){count--}
    counterText.textContent = count
    console.log(count)
   

}

function play(){
    if(count > 0){
        document.getElementById("play-btn").onclick = function () {
            location.href = "2.html"
    }
    } 
    
    
}



minusBtn.addEventListener('click', decrease)
plusBtn.addEventListener('click', increase)
playBtn.addEventListener('click', play)