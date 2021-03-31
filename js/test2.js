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
            question: "1. Историята за гостуването на Бай Ганьо у Иречек се разказва от:",
            answers: {
                a: "Илчо",
                b: "Бай Ганьо",
                c: "неутрален разказвач",
                d: "Цвятко"
            },
            correctAnswer: "a"
        },
        {
            question: "2. Недоразумението в откъса „Файтонджиите се спущат да му предлагат услугите си - той им прави знак с глава че не ще. Те разбират знака му за утвърдителен иедин файтон се изпречва отпреде му. се дължи на:",
            answers: {
                a: "невежеството на файтонджиите",
                b: "невниманието на файтонджиите",
                c: "различното значение на кимането с глава",
                d: "факта, че Бай Ганьо не говори чужди езици"
            },
            correctAnswer: "c"
        },
        {
            question: "3. Иречек е:",
            answers: {
                a: "случаен чешки гражданин",
                b: "измислен герой",
                c: "чешки учен, живял в България",
                d: "приятел на Бай Ганьо"
            },
            correctAnswer: "c"
        },
        {
            question: "4. С Иречек Бай Ганьо се държи:",
            answers: {
                a: "почтително",
                b: "делово",
                c: "фамилиарно",
                d: "приятелски"
            },
            correctAnswer: "c"
        },
        {
            question: "5. Кое от изброените определения НЕ е подходящо за Бай Ганьо:",
            answers: {
                a: "доверчив",
                b: "самонадеян",
                c: "малокултурен",
                d: "недоверчив"
            },
            correctAnswer: "a"
        },
        {
            question: "6. Защо Бай Ганьо отива на гости у Иречек?",
            answers: {
                a: "Желае да научи от Иречек повече за бита, културата и икономиката на чехите.",
                b: "Любопитен е как живее един чешки професор.",
                c: "Иска да се Запознае с известния професор.",
                d: "Надява се да отседне у дома на професора, за да не дава пари за хотел"
            },
            correctAnswer: "d"
        },
        {
            question: "7. Посочете НЕВЯРНОТО твърдение.",
            answers: {
                a: "Бай Ганьо умее да забавлява събеседниците си и да създава непринудена атмосфера.",
                b: "Бай Ганьо е мнителен и не е убеден, че домакините са добронамерени към него",
                c: "Бай Ганьо се държи любезно само за да предразположи околните и да ги ангажира със себе си.",
                d: "Бай Ганьо се интересува от чуждите порядки само когато те пряко го засягат."
            },
            correctAnswer: "a"
        },
        {
            question: "8. Гостуването у Иречек е част от европейското пътуване на Бай Ганьо. Цел на това пътуване е:",
            answers: {
                a: "постигането на материална изгода",
                b: "опознаването на европейските нрави и норми на поведение",
                c: "запознаването с достиженията на европейската материална култура",
                d: "докосването изкуството и духовната култура на Европа"
            },
            correctAnswer: "a"
        },
        {
            question: "9. Образът на Бай Ганьо е ярко обрисуван и запомнящ се. При изграждането му повествователят НЕ си служи със:",
            answers: {
                a: "пряко авторово описание",
                b: "характеризиране на героя чрез знаков елемент от външния му вид",
                c: "характеризиране на героя чрез речта му",
                d: "характеризиране на героя чрез постъпките му"
            },
            correctAnswer: "a"
        },
        {
            question: "10. Посочете НЕВЯРНОТО твърдение:",
            answers: {
                a: "Бай Ганьо си служи с жестове, мимики и междуметия, защото никой не знае български език",
                b: "В речта на Бай Ганьо се преплитат разговорна и официална лексика.",
                c: "Вместо да говори, Бай Ганьо често общува с жестове - ''шава с пръсти'',''кима сглава'', сочи...",
                d: "В речта на Бай Ганьо присъстват паразитни думи."
            },
            correctAnswer: "c"
        }
    ];

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();