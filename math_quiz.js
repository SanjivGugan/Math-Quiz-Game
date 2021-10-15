player1_name = localStorage.getItem(player1);
document.getElementById("name").innerHTML = ""

function askQuestion()
{
    document.getElementById("question_div").innerHTML = "<h3>" + document.getElementById("number1_input").value + "X" + document.getElementById("number2_input").value + "</h3>"
}