player1 = document.getElementById("player1_name_input").value
player2 = document.getElementById("player2_name_input").value

function login()
{
    window.location = "math_quiz.html";
    localStorage.setItem("player1_name_input", player1);
    localStorage.setItem("player2_name_input", player2);
}