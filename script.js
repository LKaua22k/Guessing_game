const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const InputNumber = document.querySelector('#InputNumber');
const Trybutton = document.querySelector('#Trybutton');
const againButton = document.querySelector('#againButton');
let radomNumber = Math.round(Math.random() * 10);
let x = 1

InputNumber.focus()

function ButtonTry(event) {
    event.preventDefault()
    
    if(InputNumber.value < 0 || InputNumber.value > 10){
        InputNumber.focus()
        InputNumber.value = ""
        return alert('Numero Invalido!')
    }

    if(InputNumber.value == radomNumber){
        toggleHide()
        document.querySelector('h2').innerText = `Acertou em ${x} tentativas`
    }

    InputNumber.value = ""
    x++
}

function ButtonAgain() {
    radomNumber = Math.round(Math.random() * 10)
    toggleHide()
    x = 1
}

// function KeyEnter(e){
//     console.log('Enter')
//     if(e.key == 'Enter'){
//         ButtonAgain()
//     }
// }
// document.addEventListener('keydown', KeyEnter)

function toggleHide(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

Trybutton.addEventListener('click', ButtonTry);
againButton.addEventListener('click', ButtonAgain);