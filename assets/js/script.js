/*
JS é uma linguagem case sensitive = reconhece letras maiusculas e minusculas

chamar um elemento por:
Tag: getElementByTagName()
Id: getElementById()
Nome: getElementByNome()
Classe: getElementByClassName()
Seletor: querySelector()
*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
    }

}