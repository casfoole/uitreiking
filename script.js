var blokken = [];
var score = [];
var naam = [];
var result = [];
var aantal;

//Dialog
function makeDialog() {
    aantal = document.getElementById('aantal').value;


    for (i = 1; i <= aantal; i++) {
        blokken[i] = '<br><label>Naam Team ' + i + ':<input type="text" value="koophandelsexpertlangnogietslang" placeholder="Team: voorbeeld" id="txt_name' + i + '">Score Team ' + i + ':<input type="number" value="" placeholder="1500" id="txt_score' + i + '"></label><br>';
            document.getElementById("blocks").innerHTML = blokken.join("");
    }

}

function hide() {
    var x = document.getElementById("scorebord");
    x.style.display = "block";
}

// function makeBlock() {

    aantal = document.getElementById('aantal').value;
    for (i = 1; i <= aantal; i++) {


        // $('<div class="block"><p style="padding-left: 5px; overflow: hidden">' + $('#txt_name' + i).val() + '</p><div class="count" style="padding-left: 5px">' + $('#txt_score' + i).val() + '</div></div>').insertAfter($("#block"));

        score[i] = $('#txt_score' + i).val();
        naam[i] = $('#txt_name' + i).val();
    }

    for (i = 1; i <=aantal; i++){
        result.push(score[i] + " | " + naam[i]);
        console.log(result[i]);
    }

    var x = document.getElementById("buttonNinputs");
    x.style.display = "none";

function scorebord(){

    result.sort();
    result.reverse();
    score.toString();
    document.getElementById("nbr1").innerHTML = "#1 " + result[0];
    document.getElementById("nbr2").innerHTML = "#2 " + result[1];
    document.getElementById("nbr3").innerHTML = "#3 " + result[2];

    hide();

}







