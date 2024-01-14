// creo una variabile di numeri randomici
// creo il countdown di 30 sec
// entrambi si avviano al click del bottone
// dopo 30 secondi fai il clearInreval del countdown
const button = document.querySelector('button')
const inDisplay = document.getElementById('display')
const numbersViews = document.getElementById('numbers')
const buttonVerify = document.getElementById('new-button')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const quattro = document.getElementById('4')
const five = document.getElementById('5')
let result = document.getElementById('asd')
button.addEventListener('click', function(){
    button.classList.add('d-none')
    buttonVerify.classList.remove('d-none')
    

    let numbersDrawn = []
    while(numbersDrawn.length < 5){
        let randomNubers = `<li>${Math.floor(Math.random() * 100) + 1}</li>`
        if (!numbersDrawn.includes(randomNubers)) numbersDrawn.push(randomNubers)
        numbersViews.innerHTML = numbersDrawn
    }
    

    buttonVerify.addEventListener('click', function(){
        const uno = one.value
        const due = two.value
        const tre = three.value
        const myQuattro = quattro.value
        const cinque = five.value
        const numbersList = [uno, due, tre, myQuattro, cinque]
        console.log(numbersList)
        if (numbersList < 1 || numbersList > 100){
            alert('ATTENZIONE DEVI INSERIRE DEI NUMERI VALIDI DA 1 A 100')
            return
        }
        result = 'hai perso'
        if (numbersList === numbersDrawn) {
            result.innerText = 'complimenti hai vinto'
        }
           
        })

    let seconds = 5
    inDisplay.innerText = seconds
    const countdown = setInterval(() => {
        inDisplay.innerText = --seconds
        if (seconds === 0){
            inDisplay.innerText = 'STOP'
            clearInterval(countdown)
            numbersViews.innerHTML = '' 
        }         
    }, 1000);
    
})
