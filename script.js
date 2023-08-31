function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}
function ifrock () {

    let random = getRandomInt(3);
    //console.log(random);
    if (random === 0){
    document.getElementById("score").innerHTML = "Draw!";
    } else if (random === 1) {
    document.getElementById("score").innerHTML = "Opponent chose paper, you lose!";
    document.getElementById("score_pc").innerHTML = parseInt(document.getElementById("score_pc").innerHTML) + 1;
    } else {
    document.getElementById("score").innerHTML = "Opponent chose scissors, you win!";
    document.getElementById("score_human").innerHTML = parseInt(document.getElementById("score_human").innerHTML) + 1;
    }

}
let rock = document.getElementById("rock");

rock.addEventListener("click", ifrock);

function ifpaper () {

    let random = getRandomInt(3);
    //console.log(random);
    if (random === 0){
    document.getElementById("score").innerHTML = "Opponent chose rock, you win!";
    document.getElementById("score_human").innerHTML = parseInt(document.getElementById("score_human").innerHTML) + 1;
    } else if (random === 1) {
    document.getElementById("score").innerHTML = "Draw!";
    } else {
    document.getElementById("score").innerHTML = "Opponent chose scissors, you lose!";
    document.getElementById("score_pc").innerHTML = parseInt(document.getElementById("score_pc").innerHTML) + 1;
    }

}let paper = document.getElementById("paper");

paper.addEventListener("click", ifpaper);

function ifscissors () {

    let random = getRandomInt(3);
    //console.log(random);
    if (random === 0){
    document.getElementById("score").innerHTML = "Opponent chose rock, you lose!";
    document.getElementById("score_pc").innerHTML = parseInt(document.getElementById("score_pc").innerHTML) + 1;
    } else if (random === 1) {
    document.getElementById("score").innerHTML = "Opponent chose paper, you win!";
    document.getElementById("score_human").innerHTML = parseInt(document.getElementById("score_human").innerHTML) + 1;
    } else {
    document.getElementById("score").innerHTML = "Draw!";
    }

}let scissors = document.getElementById("scissors");

scissors.addEventListener("click", ifscissors);