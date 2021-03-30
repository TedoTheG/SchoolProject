(function () {
    function buildQuiz() {
        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];

                for (letter in currentQuestion.answers) {

                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;


                answerContainers[questionNumber].style.color = 'limegreen';
            }

            else {

                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} от ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "1. Какво е аритметична прогресия?",
            answers: {
                a: "Числовва редица, в която всеки член след първия се получава, като предходния член добавим едно и също число",
                b: "Числовва редица, в която всеки член след първия се получава, като предходния член умножим с  едно и също число",
                c: "Числовва редица, в която всеки член след първия се получава, като предходния член разделим с едно и също число"
            },
            correctAnswer: "a"
        },
        {
            question: "2. Коя от изброените прогресии е растяща?",
            answers: {
                a: "1, 0, 1, 0, 1, 0",
                b: "1, 5, 4, 9, 3",
                c: "1, 4, 7, 10, 13, 16"
            },
            correctAnswer: "c"
        },
        {
            question: "3. За една аритметична прогресия е дадено а1=3 и d=2. Да се намери колко е а17?",
            answers: {
                a: "17",
                b: "3",
                c: "35",
            },
            correctAnswer: "c"
        },
        {
            question: "4. Дадена е аритметична прогресия, като а6=17 и d=3. Намерете първия член на прогресията?",
            answers: {
                a: "5",
                b: "2",
                c: "3",
            },
            correctAnswer: "b"
        },
        {
            question: "5. Намерете броя на членовете на аритметичната прогресия, за която е дадено а1=1, d=3, S=210",
            answers: {
                a: "12",
                b: "35",
                c: "2",
            },
            correctAnswer: "b"
        }
    ];

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();