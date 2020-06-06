export class Question {
    static create(question) {
        return fetch('https://jsnative-question.firebaseio.com/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
               'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            })
            .then(addToLocalStorage)
            .then(Question.renderList)

    }
    static renderList() {
        const questions = getQuestionFromLocalStorage()
    }
}
function addToLocalStorage(question) {
    const all = getQuestionFromLocalStorage()
    all.push(question)
    
    localStorage.setItem('questions', JSON.stringify(all))
}
function getQuestionFromLocalStorage() {
 return JSON.parse(localStorage.getItem('questions') || '[]')
}
