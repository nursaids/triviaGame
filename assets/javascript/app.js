var countDown = (50,"countDown");


function countDown(secs,elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "Time remaining: "+secs+" seconds";

   

}





const myQuestions = [
    {
        question: "What state is Sopranos tv show taking place at?",

        answers: {

            a: "Forida",
            b: "Hawaii",
            c: "New York",
            d: "New Jersey"


        },
        correctAnswer: "d"
    },

    {


        question: "What was the name of drug that was produced in tv series Breaking Bad?",

        answers: {

            a: "Black Magic",
            b: "Green Weed",
            c: "Blue Meth",
            d: "Golden Stone"


        },
        correctAnswer: "c"
    },





    {
        question: "What was nick name of Khaleesi from Game of Thrones?",

        answers: {

            a: "Mother of Wolfs",
            b: "Mother Of Dragons",
            c: "Princess",
            d: "Witch"


        },
        correctAnswer: "b"

    },



    {
        question: "What type of transportation were main characters of the tv show Sons of Anarchy were riding?",

        answers: {

            a: "bikes",
            b: "bicycles",
            c: "planes",
            d: "Scooters"



        },

        correctAnswer: "a"

    },

];




const triviaContainer = document.getElementById("trivia");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


function buildTrivia(){

 const output = [];
 
 myQuestions.forEach(
     (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

         answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

     
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  
      triviaContainer.innerHTML = output.join('');
}
 

myQuestions.forEach((currentQuestion, questionNumber) =>{
    
    const answers = [];

    
    for (letter in currentQuestion.answers) {
     
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
      }

        


    });
    
function showResults(){}

buildTrivia();


submitButton.addEventListener("click", showResults);

