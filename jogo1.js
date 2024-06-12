var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {
            msg1.textContent = "Seu palpite é muito baixo.";
            msg2.textContent = "Número de palpites: " + no_of_guesses;
            msg3.textContent = "Números palpitados: " + guessed_nums;
        } else if (user_guess > answer) {
            msg1.textContent = "Seu palpite é muito alto.";
            msg2.textContent = "Número de palpites: " + no_of_guesses;
            msg3.textContent = "Números palpitados: " + guessed_nums;
        } else if (user_guess == answer) {
            msg1.textContent = "Parabéns! Você ganhou!!";
            msg2.textContent = "O número era: " + answer;
            msg3.textContent = "Você adivinhou em " + no_of_guesses + " palpites";
            document.getElementById("my_btn").disabled = true;
        }
    }
}
