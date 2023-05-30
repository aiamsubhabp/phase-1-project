let dropdown = document.getElementById('drop-down')

//function to shuffle array of answer choices
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

// dropdown API call
//change event listener
dropdown.addEventListener('change', (event) => {
    let selectedDifficulty = event.target.value
    fetch(`https://opentdb.com/api.php?amount=5&difficulty=${selectedDifficulty}&type=multiple`)
    .then(res => res.json())
    .then(data => {

        //display questions and answers on page
        let questionContainer = document.getElementById('question-container')  
        //line of code below makes it so when user changes difficulty, the previous questions are replaced, instead of new questions added on.
        questionContainer.innerHTML = ''      
        data.results.forEach(result => {
            let p = document.createElement('p')
            p.innerText =  result.question
            questionContainer.append(p)

            //combine all answer choices into an array and shuffle for randomness.
            let answerChoices = []
            result.incorrect_answers.forEach(incorrectAnswer => {
                answerChoices.push(incorrectAnswer)   
            })

            answerChoices.push(result.correct_answer)
            shuffleArray(answerChoices)

            answerChoices.forEach(answerChoice =>{
                let label = document.createElement('label')
                label.innerHTML = `${answerChoice} </br>`
                let input = document.createElement('input')
                input.type = 'radio'
                //just using this as unique identifier so that it deselects when selecting a different radio button
                input.name = result.question
                input.value = answerChoice              
                questionContainer.append(input)
                questionContainer.append(label)
            })
        })

        //create submit form to submit answers
        //submit event listener
        let form = document.getElementById('quiz-form')
        form.addEventListener('submit', e => {
        e.preventDefault()
        let selectedAnswers = []
        let radioButtons = document.getElementsByTagName('input')
            for (let i = 0; i < radioButtons.length; i++){
                if (radioButtons[i].checked) {
                    selectedAnswers.push(radioButtons[i].value)
                }
            }

        let correctAnswers = []
            data.results.forEach(result => {
                correctAnswers.push(result.correct_answer)
            })

        if(selectedAnswers.toString() == correctAnswers.toString()){
            console.alert('Congratulations! You got them all right!')
            } else{
            alert('Sorry, you missed some questions. Please try again')
            }
        })
    })
})

//toggle dark and light mode... click event

let darkModeButton = document.getElementById('toggleDarkMode')
darkModeButton.addEventListener('click', (e) => {
    let body = document.body
    body.classList.toggle('dark-mode')
})



    
