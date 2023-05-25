let dropdown = document.getElementById('drop-down')
console.log(dropdown)


// dropdown API call
dropdown.addEventListener('change', (event) => {
    let selectedDifficulty = event.target.value
    fetch(`https://opentdb.com/api.php?amount=5&difficulty=${selectedDifficulty}&type=multiple`)
    .then(res => res.json())
    .then(data => {
        // let button = document.createElement('button')
        // button.innerText = 'abswerchasdf'
        // let answerContainer = document.getElementById('answer-choice')
        // answerContainer.append(button)


//display questions and answers on page
        let questionContainer = document.getElementById('question-container')        
        data.results.forEach(result => {
            let p = document.createElement('p')
            p.innerText =  result.question
            questionContainer.append(p)

            result.incorrect_answers.forEach(incorrectAnswer => {
                let button = document.createElement('button')
                button.innerText = incorrectAnswer
                questionContainer.append(button)
            })

            let button = document.createElement('button')
            button.innerText = result.correct_answer
            questionContainer.append(button)

        })

    })

})



// let questions = []
// const question = document.getElementById('question')
// fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
//     .then(res => res.json())
//     .then(questionArrays => {
//         console.log(questionArrays)
//         questions = questionArrays.results.map(questionArray => {
//             let formattedQuestion = {
//                 question: questionArray.question
//             }
        
//             console.log('formatted qystuiob', formattedQuestion)

//         })
//     })


let response = {"response_code":0,"results":[{"category":"Sports","type":"multiple","difficulty":"easy","question":"In what sport is a &quot;shuttlecock&quot; used?","correct_answer":"Badminton","incorrect_answers":["Table Tennis","Rugby","Cricket"]},{"category":"Entertainment: Cartoon & Animations","type":"multiple","difficulty":"easy","question":"Which of these is NOT a Disney cartoon character?","correct_answer":"Daffy Duck","incorrect_answers":["Donald Duck","Daisy Duck","Scrooge McDuck"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"How many times do you fight Gilgamesh in &quot;Final Fantasy 5&quot;?","correct_answer":"6","incorrect_answers":["4","5","3"]},{"category":"Entertainment: Cartoon & Animations","type":"multiple","difficulty":"easy","question":"What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named &quot;Stitch&quot;?","correct_answer":"Lilo","incorrect_answers":["Lolo","Lucy","Lulu"]},{"category":"Entertainment: Books","type":"multiple","difficulty":"easy","question":"What was Sir Handel&#039;s original name in &quot;The Railway Series&quot; and it&#039;s animated counterpart &quot;Thomas and Friends?&quot;","correct_answer":"Falcon","incorrect_answers":["Eagle","Kyte","Swallow"]}]}


