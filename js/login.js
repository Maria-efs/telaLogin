'use strict'

//Ocultar Senha
const inputPassword = document.querySelector('#password', '#password2') 
const input2 = document.querySelector('#password2')

function showHide () {
    if (inputPassword.type === 'password' && input2.type === 'password'){
        inputPassword.setAttribute('type', 'text')
        input2.setAttribute('type', 'text')
    } else{
        inputPassword.setAttribute('type', 'password')
        input2.setAttribute('type', 'password')
    }
}

//Animação -> mover container 
const loginContainer = document.getElementById('login-container')

const move = () => loginContainer.classList.toggle('move') //se tiver a class move o toogle remove, se não ele adiciona

document.getElementById('open-register').addEventListener('click', move)
document.getElementById('open-login').addEventListener('click', move)

document.getElementById('open-register-mobile').addEventListener('click', move)
document.getElementById('open-login-mobile').addEventListener('click', move)