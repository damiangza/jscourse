/////////////////////////////
// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
*/
var questions = {
  question: '',
  answerOptions: [],
  answer: ''
};

var Questions = function (question, answerOptions, answer) {
  this.question = question;
  this.answerOptions = answerOptions;
  this.answer = answer;
}

/*
2. Create a couple of questions using the constructor
*/

var question1 = new Questions('Which planet is furtherst from the Sun?', ['Saturn', 'Mars', 'Pluto'], 'Pluto');
var question2 = new Questions('Which the largest ocean?', ['Indian', 'Pacific', 'Atlantic'], 'Pacific');
var question3 = new Questions('Which is the tallest mountain?', ['Everest', 'Kilimanjaro', 'Signal Hill'], 'Everest');

// console.log(question1);
// console.log(question2);
// console.log(question3);

/*
3. Store them all inside an array
*/

var questionBank = []
questionBank.push(question1);
questionBank.push(question2);
questionBank.push(question3);

// console.log(questionBank);

/*
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
*/

var randomNumber = Math.floor(Math.random() * questionBank.length);
var randomQuestion = questionBank[randomNumber].question;
var possibleAnswers = function () {
  x = "";
  for (i = 0; i <= questionBank[randomNumber].answerOptions.length - 1; i++) {
    x += i + ': ' + questionBank[randomNumber].answerOptions[i] + '\n';
  }
  return x;
}

console.log(randomQuestion + "\n" + possibleAnswers());


/*
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
*/


var questionPrompt = prompt(randomQuestion + "\n" + possibleAnswers());

var checkAnswer = function (questionPrompt) {
  if (questionPrompt <= 2) {
    if (questionBank[randomNumber].answer === questionBank[randomNumber].answerOptions[questionPrompt]) {
      console.log("CORRECT")
    } else {
      console.log("INCORRECT")
    }
  }
  console.log("PLEASE CHOOSE A NUMBER BETWEEN 0 AND 2")

}

console.log(checkAnswer(questionPrompt));



/*
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).



7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/