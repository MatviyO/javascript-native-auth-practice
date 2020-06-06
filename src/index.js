import './styles.css'
import {isValid} from "./utils";
import {Question} from "./question";

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const button = form.querySelector('#submit')

form.addEventListener('submit', submitFOrmHandler)
input.addEventListener('input', () => {
    button.disabled = !isValid(input.value)
})

function submitFOrmHandler(event) {
    event.preventDefault()

    if( isValid(input.value)) {
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
