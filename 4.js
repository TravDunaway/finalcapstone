
const baseURL = 'http://localhost:4000'
let playersPart = window.location.search
console.log(playersPart)

const a1 = document.getElementById('a')
const b1 = document.getElementById('b')
const c1 = document.getElementById('c')
const d1 = document.getElementById('d')
const e1 = document.getElementById('e')
const f1 = document.getElementById('f')
const g1 = document.getElementById('g')
const h1 = document.getElementById('h')
const i1 = document.getElementById('i')
const j1 = document.getElementById('j')
const k1 = document.getElementById('k')
const l1 = document.getElementById('l')
const m1 = document.getElementById('m')
const n1 = document.getElementById('n')
const o1 = document.getElementById('o')
const p1 = document.getElementById('p')
const q1 = document.getElementById('q')
const r1 = document.getElementById('r')
const s1 = document.getElementById('s')
const t1 = document.getElementById('t')
const u1 = document.getElementById('u')
const v1 = document.getElementById('v')
const w1 = document.getElementById('w')
const x1 = document.getElementById('x')
const y1 = document.getElementById('y')

const nameOne = document.getElementById('firstName')

// addeventlistener tabs
console.log('javascript is working')
const allTiles = document.querySelectorAll(".builder-column")
const rowTiles = document.getElementById('a', 'b', 'c', 'd', 'e')
// document.allTiles = ...
document.counter = 0
document.name = ""

for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener('click', addingToCounterFunction)
}
// console.log(`${counter} before addingtoCounterFunction`)





function addingToCounterFunction(event){
    document.counter++
    
    







    if (document.counter % 2 === 0){
        event.target.style.backgroundColor ='#706526'
        document.getElementById("firstName").innerHTML = "KATE"
        
        console.log(document.counter)
        console.log(a1.style.backgroundColor)
       

    }  else {
        event.target.style.backgroundColor ='#66645B'
        document.getElementById("firstName").innerHTML = "TRAVIS"
        console.log(document.counter)
        console.log(a1.style.backgroundColor)
        
    }
    if ( document.counter > 3 
        && a1.style.backgroundColor === ('rgb(112, 101, 38)')
        && a1.style.backgroundColor === b1.style.backgroundColor
        && b1.style.backgroundColor === c1.style.backgroundColor
        && c1.style.backgroundColor === d1.style.backgroundColor
        && d1.style.backgroundColor === e1.style.backgroundColor) 
    {
        console.log("you won a-e-green")  
    }
    if ( document.counter > 3 
        && a1.style.backgroundColor === ('rgb(102, 100, 91)')
        && a1.style.backgroundColor === b1.style.backgroundColor
        && b1.style.backgroundColor === c1.style.backgroundColor
        && c1.style.backgroundColor === d1.style.backgroundColor
        && d1.style.backgroundColor === e1.style.backgroundColor) 
    {
        console.log("you won a-e-grey")  
    }
    if ( document.counter > 3 
        && f1.style.backgroundColor === ('rgb(112, 101, 38)')
        && f1.style.backgroundColor === g1.style.backgroundColor
        && g1.style.backgroundColor === h1.style.backgroundColor
        && h1.style.backgroundColor === i1.style.backgroundColor
        && i1.style.backgroundColor === j1.style.backgroundColor
        ) 
    {
        console.log("you won f-j-green")  
    }
    if ( document.counter > 3 
        && f1.style.backgroundColor === ('rgb(102, 100, 91)')
        && f1.style.backgroundColor === g1.style.backgroundColor
        && g1.style.backgroundColor === h1.style.backgroundColor
        && h1.style.backgroundColor === i1.style.backgroundColor
        && i1.style.backgroundColor === j1.style.backgroundColor
        ) 
    {
        console.log("you won f-j-grey")  
    }
    if ( document.counter > 3 
        && k1.style.backgroundColor === ('rgb(112, 101, 38)')
        && k1.style.backgroundColor === l1.style.backgroundColor
        && l1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === n1.style.backgroundColor
        && n1.style.backgroundColor === o1.style.backgroundColor
        ) 
    {
        console.log("you won k-no-green")  
    }
    if ( document.counter > 3 
        && k1.style.backgroundColor === ('rgb(102, 100, 91)')
        && k1.style.backgroundColor === l1.style.backgroundColor
        && l1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === n1.style.backgroundColor
        && n1.style.backgroundColor === o1.style.backgroundColor
        ) 
    {
        console.log("you won k-no-grey")  
    }
    if ( document.counter > 3 
        && p1.style.backgroundColor === ('rgb(112, 101, 38)')
        && p1.style.backgroundColor === q1.style.backgroundColor
        && q1.style.backgroundColor === r1.style.backgroundColor
        && r1.style.backgroundColor === s1.style.backgroundColor
        && s1.style.backgroundColor === t1.style.backgroundColor
        ) 
    {
        console.log("you won p-st-green")  
    }
    if ( document.counter > 3 
        && p1.style.backgroundColor === ('rgb(102, 100, 91)')
        && p1.style.backgroundColor === q1.style.backgroundColor
        && q1.style.backgroundColor === r1.style.backgroundColor
        && r1.style.backgroundColor === s1.style.backgroundColor
        && s1.style.backgroundColor === t1.style.backgroundColor
        ) 
    {
        console.log("you won p-st-grey")  
    }
    if ( document.counter > 3 
        && u1.style.backgroundColor === ('rgb(112, 101, 38)')
        && u1.style.backgroundColor === v1.style.backgroundColor
        && v1.style.backgroundColor === w1.style.backgroundColor
        && w1.style.backgroundColor === x1.style.backgroundColor
        && x1.style.backgroundColor === y1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-green")  
    }
    if ( document.counter > 3 
        && u1.style.backgroundColor === ('rgb(102, 100, 91)')
        && u1.style.backgroundColor === v1.style.backgroundColor
        && v1.style.backgroundColor === w1.style.backgroundColor
        && w1.style.backgroundColor === x1.style.backgroundColor
        && x1.style.backgroundColor === y1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    }
    if ( document.counter > 3 
        && u1.style.backgroundColor === ('rgb(112, 101, 38)')
        && u1.style.backgroundColor === p1.style.backgroundColor
        && p1.style.backgroundColor === k1.style.backgroundColor
        && k1.style.backgroundColor === f1.style.backgroundColor
        && f1.style.backgroundColor === a1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-green")  
    }
    if ( document.counter > 3 
        && u1.style.backgroundColor === ('rgb(102, 100, 91)')
        && u1.style.backgroundColor === p1.style.backgroundColor
        && p1.style.backgroundColor === k1.style.backgroundColor
        && k1.style.backgroundColor === f1.style.backgroundColor
        && f1.style.backgroundColor === a1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    }
    if ( document.counter > 3 
        && b1.style.backgroundColor === ('rgb(112, 101, 38)')
        && b1.style.backgroundColor === g1.style.backgroundColor
        && g1.style.backgroundColor === l1.style.backgroundColor
        && l1.style.backgroundColor === q1.style.backgroundColor
        && q1.style.backgroundColor === v1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-green")  
    }
    if ( document.counter > 3 
        && b1.style.backgroundColor === ('rgb(102, 100, 91)')
        && b1.style.backgroundColor === g1.style.backgroundColor
        && g1.style.backgroundColor === l1.style.backgroundColor
        && l1.style.backgroundColor === q1.style.backgroundColor
        && q1.style.backgroundColor === v1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    }
    if ( document.counter > 3 
        && c1.style.backgroundColor === ('rgb(112, 101, 38)')
        && c1.style.backgroundColor === h1.style.backgroundColor
        && h1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === r1.style.backgroundColor
        && r1.style.backgroundColor === w1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-green")  
    }
    if ( document.counter > 3 
        && c1.style.backgroundColor === ('rgb(102, 100, 91)')
        && c1.style.backgroundColor === h1.style.backgroundColor
        && h1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === r1.style.backgroundColor
        && r1.style.backgroundColor === w1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    }
    if ( document.counter > 3 
        && d1.style.backgroundColor === ('rgb(112, 101, 38)')
        && d1.style.backgroundColor === i1.style.backgroundColor
        && i1.style.backgroundColor === n1.style.backgroundColor
        && n1.style.backgroundColor === s1.style.backgroundColor
        && s1.style.backgroundColor === x1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-green")  
    }
    if ( document.counter > 3 
        && d1.style.backgroundColor === ('rgb(102, 100, 91)')
        && d1.style.backgroundColor === i1.style.backgroundColor
        && i1.style.backgroundColor === n1.style.backgroundColor
        && n1.style.backgroundColor === s1.style.backgroundColor
        && s1.style.backgroundColor === x1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    }
    if ( document.counter > 3 
        && e1.style.backgroundColor === ('rgb(112, 101, 38)')
        && e1.style.backgroundColor === j1.style.backgroundColor
        && j1.style.backgroundColor === o1.style.backgroundColor
        && o1.style.backgroundColor === t1.style.backgroundColor
        && t1.style.backgroundColor === y1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-green")  
    }
    if ( document.counter > 3 
        && e1.style.backgroundColor === ('rgb(102, 100, 91)')
        && e1.style.backgroundColor === j1.style.backgroundColor
        && j1.style.backgroundColor === o1.style.backgroundColor
        && o1.style.backgroundColor === t1.style.backgroundColor
        && t1.style.backgroundColor === y1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    }
    if ( document.counter > 3 
        && a1.style.backgroundColor === ('rgb(112, 101, 38)')
        && a1.style.backgroundColor === g1.style.backgroundColor
        && g1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === s1.style.backgroundColor
        && s1.style.backgroundColor === y1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    } 
    if ( document.counter > 3 
        && a1.style.backgroundColor === ('rgb(102, 100, 91)')
        && a1.style.backgroundColor === g1.style.backgroundColor
        && g1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === s1.style.backgroundColor
        && s1.style.backgroundColor === y1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    } 
    if ( document.counter > 3 
        && e1.style.backgroundColor === ('rgb(112, 101, 38)')
        && e1.style.backgroundColor === i1.style.backgroundColor
        && i1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === q1.style.backgroundColor
        && q1.style.backgroundColor === u1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    } 
    if ( document.counter > 3 
        && e1.style.backgroundColor === ('rgb(102, 100, 91)')
        && e1.style.backgroundColor === i1.style.backgroundColor
        && i1.style.backgroundColor === m1.style.backgroundColor
        && m1.style.backgroundColor === q1.style.backgroundColor
        && q1.style.backgroundColor === u1.style.backgroundColor
        ) 
    {
        console.log("you won u-xy-grey")  
    } 
   
}

