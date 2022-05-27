const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById
    ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
    ('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
         button.dataset.correct = answer.correct
        }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

const questions = [
    {
        question: 'What is the Square Root of 49?',
        answers: [
            { text: '6', correct: false},
            { text: '7', correct: true},
            { text: '8', correct: false},
            { text: '9', correct: false},
        ]
    },
    {
        question: 'Who owns Microsoft as of 2022?',
        answers: [
            { text: 'Jeff Bazos', correct: false},
            { text: 'Masaru Ibuka', correct: false},
            { text: 'Bill Gates', correct: true},
            { text: 'Bernard Tapie', correct: false},
        ]
    },
    {
        question: 'What year did World War 2 Begin?',
        answers: [
            { text: '1939', correct: true},
            { text: '1942', correct: false},
            { text: '1931', correct: false},
            { text: '1934', correct: false},
        ]
    },
    {
        question: 'What is the most popular colour on flags?',
        answers: [
            { text: 'Red', correct: true},
            { text: 'Blue', correct: false},
            { text: 'White', correct: false},
            { text: 'Green', correct: false},
        ]
    },
    {
        question: 'How many years did King Henry VIII rein for?',
        answers: [
            { text: '27 Years', correct: false},
            { text: '18 Years', correct: false},
            { text: '41 Years', correct: false},
            { text: '36 Years', correct: true},
        ]
    },
    {
        question: 'Which eye color is most common?',
        answers: [
            { text: 'Blue', correct: false},
            { text: 'Green', correct: false},
            { text: 'Grey', correct: false},
            { text: 'Brown', correct: true},
        ]
    },
    {
        question: 'What does "Aquí" mean translated from Spanish?',
        answers: [
            { text: 'There', correct: false},
            { text: 'Here', correct: true},
            { text: 'Right', correct: false},
            { text: 'Left', correct: false},
        ]
    },

    {
        question: 'The Fear of Chocolate is "Cocophobia" ',
        answers: [
            { text: 'True', correct: false},
            { text: 'False', correct: true},
        ]
    },

    {
        question: 'Which of these are Japanese?',
        answers: [
            { text: 'Японский', correct: false},
            { text: '일본어', correct: false},
            { text: '日語', correct: false},
            { text: '日本語', correct: true},
        ]
    },

    {
        question: 'What continent does Ethiopia locate in?',
        answers: [
            { text: 'Europe', correct: false},
            { text: 'Africa', correct: true},
            { text: 'Asia', correct: false},
            { text: 'South America', correct: false},
        ]
    },

    {
        question: 'What continent does Ethiopia locate in?',
        answers: [
            { text: 'Europe', correct: false},
            { text: 'Africa', correct: true},
            { text: 'Asia', correct: false},
            { text: 'South America', correct: false},
        ]
    },

    {
        question: 'How many gods do Buddhists believe in?',
        answers: [
            { text: '0', correct: true},
            { text: '1', correct: false},
            { text: '4', correct: false},
            { text: '8', correct: false},
        ]
    },
]