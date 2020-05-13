
let time = 0 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time += 1
        document.getElementById('timecount').innerHTML = "Time's remaining: " + time
        if (time == 30){
            alert("Times up! Loser");
            reset();
        }
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}

timecounting()// fire the timecounting function!!
let x = Math.floor((Math.random() * 10) + 1);
let guessCount=3;
let historyGuess = [];
document.getElementById('hint').innerHTML = x;
document.getElementById("guessCount").innerHTML = guessCount
function guess(){
    time = 0
    
    let numberGuessed = inputTwice();
    if(numberGuessed == ""){
        historyGuess.push(0);
    } else {
        historyGuess.push(numberGuessed);
    }
    document.getElementById("History").innerHTML = historyGuess;
    if(x > numberGuessed){
        alert("It's higher")
        document.getElementById("inputNumber").value = null
        guessCount --
        document.getElementById("guessCount").innerHTML = guessCount
    }
    if(x < numberGuessed){
        alert("It's lower")
        document.getElementById("inputNumber").value = null
        guessCount --
        document.getElementById("guessCount").innerHTML =guessCount
    }
    if(x == numberGuessed){
        alert("You got it right");
        document.getElementById("inputNumber").value = null
        reset();
    }
    if(guessCount == 0){
        
        alert("You lost, but it's okay");
        
        reset();
    }
   
    
}
function historyMessage(nummberGuessed){
    historyGuess.push(numberGuessed);

}
function reset(){
    guessCount = 3;
    historyGuess = [];
    document.getElementById("inputNumber").value = null
    document.getElementById("History").innerHTML = null;
    document.getElementById("guessCount").innerHTML =guessCount
    x = Math.floor((Math.random() * 10) + 1);
    document.getElementById('hint').innerHTML = x;
    time = 0;
}
function inputTwice(){
    let verifiedMessage = document.getElementById("inputNumber").value
    for(i=0;i<historyGuess.length;i++){
        if(verifiedMessage == historyGuess[i]){
            document.getElementById("message").innerHTML = "You already entered that number"
            
            guess();
        }
    }
    return verifiedMessage;
}

document.getElementById('guessButton').addEventListener("click",guess);
document.getElementById('resetButton').addEventListener("click",reset);