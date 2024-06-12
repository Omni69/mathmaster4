const questions = [
  {
    question: "Qual é o resultado de 2 + 2 * 2?",
    answers: [
      { option: "4", correct: false },
      { option: "6", correct: true },
      { option: "8", correct: false },
      { option: "2", correct: false }
    ]
  },
  {
    question: "Quanto é a raiz quadrada de 144?",
    answers: [
      { option: "10", correct: false },
      { option: "12", correct: true },
      { option: "14", correct: false },
      { option: "16", correct: false }
    ]
  },
  {
    question: "Qual é a soma dos ângulos internos de um triângulo?",
    answers: [
      { option: "90 graus", correct: false },
      { option: "180 graus", correct: true },
      { option: "270 graus", correct: false },
      { option: "360 graus", correct: false }
    ]
  },
  {
    question: "Quanto é 3 elevado à 2ª potência?",
    answers: [
      { option: "6", correct: false },
      { option: "9", correct: true },
      { option: "12", correct: false },
      { option: "15", correct: false }
    ]
  },
  {
    question: "Quanto é 7 * 8?",
    answers: [
      { option: "56", correct: true },
      { option: "49", correct: false },
      { option: "64", correct: false },
      { option: "42", correct: false }
    ]
  },
  {
    question: "Qual é o valor de pi (π) arredondado para duas casas decimais?",
    answers: [
      { option: "3.14", correct: true },
      { option: "3.16", correct: false },
      { option: "3.18", correct: false },
      { option: "3.12", correct: false }
    ]
  },
  {
    question: "Quanto é 5 - (-3)?",
    answers: [
      { option: "2", correct: false },
      { option: "8", correct: true },
      { option: "-2", correct: false },
      { option: "-8", correct: false }
    ]
  },
  {
    question: "Qual é o número primo mais baixo?",
    answers: [
      { option: "2", correct: true },
      { option: "3", correct: false },
      { option: "4", correct: false },
      { option: "5", correct: false }
    ]
  },
  {
    question: "Quanto é 9 dividido por 3?",
    answers: [
      { option: "6", correct: false },
      { option: "3", correct: true },
      { option: "9", correct: false },
      { option: "12", correct: false }
    ]
  },
  {
    question: "Quanto é 20% de 150?",
    answers: [
      { option: "30", correct: true },
      { option: "20", correct: false },
      { option: "15", correct: false },
      { option: "10", correct: false }
    ]
  },
  {
    question: "Qual é o resultado de 10 - 5 * 2?",
    answers: [
      { option: "0", correct: false },
      { option: "5", correct: false },
      { option: "8", correct: true },
      { option: "10", correct: false }
    ]
  },
  {
    question: "Quanto é 4 elevado à 3ª potência?",
    answers: [
      { option: "8", correct: false },
      { option: "12", correct: false },
      { option: "64", correct: true },
      { option: "16", correct: false }
    ]
  },
  {
    question: "Quanto é o seno de 30 graus?",
    answers: [
      { option: "0.5", correct: true },
      { option: "0.25", correct: false },
      { option: "0.75", correct: false },
      { option: "1", correct: false }
    ]
  },
  {
    question: "Quanto é 100 dividido por 5?",
    answers: [
      { option: "10", correct: true },
      { option: "15", correct: false },
      { option: "20", correct: false },
      { option: "25", correct: false }
    ]
  },
  {
    question: "Qual é a área de um quadrado com lado de comprimento 5?",
    answers: [
      { option: "20", correct: false },
      { option: "25", correct: true },
      { option: "30", correct: false },
      { option: "35", correct: false }
    ]
  },
  {
    question: "Quanto é 3 vezes 4?",
    answers: [
      { option: "10", correct: false },
      { option: "11", correct: false },
      { option: "12", correct: true },
      { option: "13", correct: false }
    ]
  },
  {
    question: "Qual é a fórmula para calcular a área de um círculo?",
    answers: [
      { option: "πr^2", correct: true },
      { option: "2πr", correct: false },
      { option: "πd", correct: false },
      { option: "πr", correct: false }
    ]
  },
  {
    question: "Quanto é 7 elevado à 2ª potência?",
    answers: [
      { option: "48", correct: false },
      { option: "49", correct: true },
      { option: "50", correct: false },
      { option: "51", correct: false }
    ]
  },
  {
    question: "Qual é o número decimal equivalente a 25%?",
    answers: [
      { option: "0.2", correct: false },
      { option: "0.25", correct: true },
      { option: "0.5", correct: false },
      { option: "0.75", correct: false }
    ]
  },
  {
    question: "Quanto é 6 dividido por 2?",
    answers: [
      { option: "2", correct: false },
      { option: "3", correct: true },
      { option: "4", correct: false },
      { option: "5", correct: false }
    ]
  }
];

export default questions;


const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} perguntas.`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
