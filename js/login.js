'use strict'

const loginContainer = document.getElementById('login-container')

const move = () => loginContainer.classList.toggle('move') //se tiver a class move o toogle remove, se não ele adiciona

document.getElementById('open-register').addEventListener('click', move)
document.getElementById('open-login').addEventListener('click', move)

document.getElementById('open-register-mobile').addEventListener('click', move)
document.getElementById('open-login-mobile').addEventListener('click', move)