const quizData = [
    {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
    },
    {
        question:"Which of the following is not built in module in Node.js",
        a: "fs",
        b: "http",
        c: "mysql",
        d: "path",
        correct: "c",
    },
    {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    },
    {
        question: "Which CSs property determines how much the text should be emblazoned",
        a: "font-weight",
        b: "font-size",
        c: "font-family",
        d: "font-style",
        correct: "a",
    },
    {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    },
    {
        question: "Latest HTML standard is",
        a: "XML",
        b: "SGML",
        c: "HTML 4.0",
        d: "HTML 5.0",
        correct: "d",
    },
    {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
    },
    ];

    const quiz = document.getElementById("quiz");

    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");

    const a_text = document.getElementById("a_text");
        const b_text = document.getElementById("b_text");
            const c_text = document.getElementById("c_text");
             const d_text = document.getElementById("d_text");

    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
        let score = 0;
    const deselectAnswers = () => {

                 answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
            d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {

    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    
    else {
    
    
    if(score ===quizData.length)
    {
        quiz.innerHTML = 
       ` <h2>You answered ${score}/${quizData.length} questions correctly</h2>
   
    
    
        <h2>1st RANKER 
            <br></br>
            you won 100 coins
        </h2>
        <button onclick="history.go(0)">Play Again</button>`
    }
    else if(score===(quizData.length-1))
    {
        quiz.innerHTML = 
       ` <h2>You answered ${score}/${quizData.length} questions correctly</h2>
   
    
    
        <h2>2nd RANKER 
            <br></br>
            you won 80 coins
        </h2>
        <button onclick="history.go(0)">Play Again</button>`
    }
    else
    {
        quiz.innerHTML = 

        `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <h2>Congratulations</h2>
        <button onclick="history.go(0)">Play Again</button>
        `
    }
    
   
    }
    }
    });