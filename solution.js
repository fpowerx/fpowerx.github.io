function solve() {
    let correctAnswers = 0;
    let index = 0;

    Array.from(document.querySelectorAll('.answer-wrap'))
        .map(x => x.addEventListener('click', nextQuestion))

    function nextQuestion(e) {
        if (e.target.classList.contains('right')) {
            correctAnswers++
        }
        let currentSection = document.querySelectorAll('section')[index]
        currentSection.style.display = 'none'
        currentSection.classList.add('hidden')

        let nextSection = document.querySelectorAll('section')[index + 1]
        if (nextSection) {
            nextSection.style.display = 'block'
            nextSection.classList.remove('hidden')
        } else {
            showResult(correctAnswers)
        }
        index++
    }

    function showResult(correctAnswers) {
        document.querySelector('#results').style.display = 'block'
        document.querySelector('#results > li > h1').innerText = `You have ${correctAnswers} right answers`
            /* if (correctAnswers === 3) {
                 document.querySelector('#results > li > h1').innerText = 'You are recognized as top JavaScript fan!'
             } else {
                 document.querySelector('#results > li > h1').innerText = `You have ${correctAnswers} right answers`
             } */
    }
}