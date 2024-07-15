// Exercise 4.5
let prize = Number(prompt("Enter any number between 0 to 10"));
let message = "You selected number " + prize + ": ";
switch (prize) {
  case 0:
    message += "You won a book📘!";
    break;
  case 1:
  case 2:
    message += "You won a small teddy bear!🎉";
    break;
  case 3:
  case 4:
    message += "You won a box of cookies!🍪";
    break;
  case 5:
    message += "You won a box of chocolates!🍫";
    break;
  case 6:
  case 7:
    message += "You won a gift card!🧧";
    break;
  case 8:
  case 9:
    message += "Jackpot! You won a vacation trip!✈";
    break;
  case 10:
    message += "You won a rainbow colors!🌈";
    break;
  default:
    message += "Invalid selection. Please choose a number between 0 and 10.";
}
console.log(message);
// Project 01: Evaluating a number Game.
let dynamicNumber = 35;
let userNumber = Number(prompt("Guess the dynamic number in the code"));
if (userNumber > dynamicNumber) {
  console.log(
    "The number you entered is greater than dynamic number in the code."
  );
} else if (userNumber === dynamicNumber) {
  console.log("The number you entered is equal to dynamic number in the code.");
} else {
  console.log(
    "The number you entered is less than dynamic number in the code."
  );
}
// Project 02: Friend checker Game.
let friend = prompt("Enter your good name.");
friend = friend.charAt(0).toUpperCase() + friend.slice(1).toLowerCase();
switch (friend) {
  case "Hayat":
    console.log("User is a friend of mine.");
    break;
  case "Ali":
    console.log("User is a friend of mine.");
    break;
  case "Fatima":
    console.log("User is a friend of mine.");
    break;
  case "Noor":
    console.log("User is a friend of mine.");
    break;
  default:
    console.log("I don't know this person.");
}
//Project 03:Rock paper scissors game 
const myArr = ["Rock", "Paper", "Scissors"];
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let msg = "player " + myArr[player] + " vs computer " +
myArr[computer] + " ";
if (player === computer) {
msg += "it's a tie";
} else if (player > computer) {
if (computer == 0 && player == 2) {
msg += "Computer Wins";
} else {
msg += "Player Wins";
}
} else {
if (computer == 2 && player == 0) {
msg += "Player Wins";
} else {
[ 436 ]
msg += "Computer Wins";
}
}
console.log(msg);
