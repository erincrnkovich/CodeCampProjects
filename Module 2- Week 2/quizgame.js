const submitButton = document.getElementById("submit");
let score = 0;


function hideButton(x) {
 x.style.display = "none";
}

function getResults() {
for (let i =0; i <=10; i++) {
    let radiosName = document.getElementsByName("answer"+i);
}

for(var j = 1; j <= radiosName.length; j++) {
    let radiosValue = radiosName[j];
    if(radiosValue.value == "right" && radiosValue.checked) {
      score++;
    }
    document.getElementById('results').innerHTML =
"Respuestas correctas " + amountCorrect;
    // document.getElementById('results');
    // alert("You answered" + ${score} + "right!");
}
}

