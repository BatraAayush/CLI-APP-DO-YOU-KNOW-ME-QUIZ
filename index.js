var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question(chalk.bold("what is your name? "), "\n");
console.log("\nwelcome", chalk.bold(userName), "to the ", chalk.bold("DO YOU KNOW AAYUSH "), "quiz ! \n");

var score = 0;

/*creating our function to take question and answer as an input 
and then ask the question and display whether user enterd right 
answer or not and to add score by one*/

function play(question, answer) {
  var userAnswer = readlineSync.question(question);


  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("you are right !"));
    score = score + 1;
  } else {
    console.log(chalk.red("you are wrong"));
  }
  console.log("your score is : ", chalk.bold(score), "\n");


}

var questions = [{
  ques: "what is my full name : ",
  ans: "aayush batra"
}, {
  ques: "what is my age : ",
  ans: "18"
}, {
  ques: "what do i do when i am alone ~ webseries or listen songs : ",
  ans: "listen songs"
}, {
  ques: "where do i live?(state) : ",
  ans: "haryana"
}, {
  ques: "which is my favourate web series : ",
  ans: "the walking dead",
}, {
  ques: "name of my favourate movie : ",
  ans: "venom"
}, {
  ques: "name of the school from where i passed 12th : ",
  ans: "little angels"
}, {
  ques: "what is my nick name : ",
  ans: "ashu"
}, {
  ques: "Am i left handed or right handed : ",
  ans: "right handed"
}, {
  ques: "my favorate song : ",
  ans: "get low"
}
]

for (var index = 0; index < questions.length; index++) {
  play(questions[index].ques, questions[index].ans);
}

var highScores = [{
  name: "ajay ",
  score: 9
}, {
  name: "rahul",
  score: 8
}
]
console.log(chalk.greenBright.bold.bgMagenta("yay ! you scored : ") + chalk.greenBright.bold.bgMagenta(score));

console.log(chalk.yellowBright.bold.underline("\nHIGH SCORES"));

for (var index = 0; index < highScores.length; index++) {
  console.log(chalk.yellow("name : ") + chalk.blueBright.bold(highScores[index].name), "and", chalk.yellow("score : ") + chalk.blueBright.bold(highScores[index].score));
}

for (var index = 0; index < highScores.length; index++) {
  if (score > highScores[index].score) {
    console.log(chalk.green.bold("\nCONGRATULATIONS! you have beaten one of the high scores . please take a screenshot and send it to me."));
    break;
  }
}

while (true) {
  var result = readlineSync.question("\nEnter" + chalk.bold(' Y ') + "to exit : ");
  if (result.toUpperCase() === 'Y') {
    console.clear();
    break;
  }
}
