/* 


*/

const questions = [
  {
    question: "Which is largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is smallet country in the world?",
    answer: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    question: "Which is smallest continent in the world?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const quesElement = document.getElementById("question");
const ansButton = document.getElementById("answer_button");
const nextButton = document.getElementById("next_btn");

let currentQuesIndex = 0;
let score = 0;

function startQuiz() {
  currentQuesIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQues = questions[currentQuesIndex];
  let quesNo = currentQuesIndex + 1;

  quesElement.innerHTML = quesNo + ". " + currentQues.question;

  currentQues.answer.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add("btn");
    ansButton.appendChild(btn);
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (ansButton.firstChild) {
    ansButton.removeChild(ansButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansButton.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  quesElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";

  // nextButton.addEventListener("click", startQuiz);
}

function handleNextButton() {
  currentQuesIndex++;
  if (currentQuesIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuesIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
