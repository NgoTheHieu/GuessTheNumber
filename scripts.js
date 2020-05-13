let numberOfGuess = 3;
let numberGuessed12 = Math.floor((Math.random()*10) + 1);
let numberGuessed = 4
document.getElementById("guessRemain").innerHTML = "You have " + numberOfGuess + " remain " 
function guessNumber(){
    let inputNumber = document.getElementById("inputNumber").value;
    console.log(numberGuessed);
    while(numberOfGuess>0 || inputNumber == numberGuessed){
        if(inputNumber != numberGuessed){
            numberOfGuess --;
            document.getElementById("hint").innerHTML = "Your number is too high";
            console.log(numberOfGuess);
        }
        if(inputNumber < numberGuessed){
            numberOfGuess --;
            document.getElementById("hint").innerHTML = "Your number is too low";
        }
        if(inputNumber == numberGuessed){
            document.getElementById("hint").innerHTML = "You got it correct";
        }
    }
    
}
function reset(){
    numberOfGuess = 3;
    document.getElementById("hint").innerHTML = "You are a dork";
}
document.getElementById("guessButton").addEventListener("click",guessNumber);
document.getElementById("resetButton").addEventListener("click",reset);
