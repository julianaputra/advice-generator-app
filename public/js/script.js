const adviceTextElement = document.querySelector('#adviceText')
const adviceIdElement = document.querySelector('#adviceId')

const refreshButton = document.querySelector('#refreshButton')
const diceIcon = document.querySelector('#diceIcon')

const getAdvice = () => {
    // add spin class
    diceIcon.classList.add('spin')
    adviceTextElement.innerHTML  = "Loading Advice..."
    adviceIdElement.innerHTML  = "???"
    
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((response) => {
        updateElement(response.slip)
        
        // remove spin class
        diceIcon.classList.remove('spin')
    })
}

const updateElement = (advice) => {
    adviceTextElement.innerHTML  = advice.advice
    adviceIdElement.innerHTML  = advice.id
}

refreshButton.addEventListener('click', () => {
    getAdvice()
})

getAdvice()