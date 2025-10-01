'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Silvio",
    email: "silvio@gmail.com",
    celular: "1192222-2222",
    cdade: "Jandira",

}

// CRUD - create read  update  delete:
const createClient = (client) => {
    localStorage.setItem("teste", "teste para o crud")
}

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)