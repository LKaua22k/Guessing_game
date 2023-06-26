const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const InputNumber = document.querySelector('#InputNumber');
const Trybutton = document.querySelector('#Trybutton');
const againButton = document.querySelector('#againButton');
const radomNumber = Math.round(Math.random() * 10)
let x = 1

function ButtonTry(event) {
    event.preventDefault()

    if(InputNumber.value == radomNumber){
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        document.querySelector('h2').innerText = `Acertou em ${x} tentativas`
    }

    InputNumber.value = ""
    x++
}

function ButtonAgain() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

Trybutton.addEventListener('click', ButtonTry)
againButton.addEventListener('click', ButtonAgain)
