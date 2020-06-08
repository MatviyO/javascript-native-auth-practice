import './styles.css'
import {createModal, isValid} from "./utils";
import {Question} from "./question";
import {authWithEmailAndpassword, getAuthFrom} from "./auth";

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const button = form.querySelector('#submit')
const modalBtn = document.getElementById('modal-btn')

modalBtn.addEventListener('click', openModal)
window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFOrmHandler)
input.addEventListener('input', () => {
    button.disabled = !isValid(input.value)
})

function submitFOrmHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        button.disabled = true
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            button.disabled = false
        })
    }
}

function openModal() {
    createModal('Authentification', getAuthFrom())
    document
        .getElementById('auth-from')
        .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(e) {
    e.preventDefault()
    const email = e.target.querySelector('#email').value
    const password = e.target.querySelector('#password').value
    authWithEmailAndpassword(email, password)
        .then(token => {
           return Question.fetchGet(token)
        })
}
