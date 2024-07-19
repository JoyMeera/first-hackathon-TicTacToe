const btnA1 = document.getElementById('A1')
const btnA2 = document.getElementById('A2')
const btnA3 = document.getElementById('A3')
const btnB1 = document.getElementById('B1')
const btnB2 = document.getElementById('B2')
const btnB3 = document.getElementById('B3')
const btnC1 = document.getElementById('C1')
const btnC2 = document.getElementById('C2')
const btnC3 = document.getElementById('C3')

const inputSection = document.querySelector('#InputSection p')
let currentPlayer = 'X'

btnA1.addEventListener('click', (e)=>{
    e.preventDefault()
    addIcon(currentPlayer)
})
btnA2.addEventListener('click', (e)=>{
    e.preventDefault()
    addIcon(currentPlayer)
})
function addIcon(currentPlayer)
{
    const icon= document.createElement("img")
    icon.classList.add("tic")
    if(currentPlayer === 'X'){
        icon.setAttribute("src", `images/x.png`)
        icon.setAttribute("alt", "x")
        inputSection.appendChild(icon)
        console.log(currentPlayer)
        changePlayer(currentPlayer)
    }
    else{
        icon.setAttribute("src", `images/o.png`)
        icon.setAttribute("alt", "o")
        inputSection.appendChild(icon)
        changePlayer(currentPlayer)
    }
}
function changePlayer(currentPlayer){
    currentPlayer = (currentPlayer == "X") ? "O" : "X" 
    console.log(currentPlayer)
}