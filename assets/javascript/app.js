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


        question: "What was the name of the drugs that was produced in tv series Breaking Bad?",

        answers: {

            a: "Black Magic",
            b: "Green Weed",
            c: "Blue Meth",
            d: "Golden Stone"


        },
        correctAnswer: "c"
    },



    {


        question: "What type of genre is Friends tv shows?",

        answers: {

            a: "Drama",
            b: "Comedy",
            c: "Horror",
            d: "Crime"


        },
        correctAnswer: "b"
    },

   
    {


        question: "What Famous tv show airs on HBO?",

        answers: {

            a: "Friends",
            b: "Family Guy",
            c: "Game of Thrones",
            d: "Two and half man"


        },
        correctAnswer: "c"
    },


    {


        question: "Which famous cartoon is charater Brian Grifin on?",

        answers: {

            a: "Robot Chicken",
            b: "Family Guy",
            c: "American Dad",
            d: "Family Guy"


        },
        correctAnswer: "b"
    },



    {
        question: "Which of these is not real character from Family Guy cartoon?",

        answers: {

            a: "Brian",
            b: "Steven",
            c: "Stewie",
            d: "Peter"



        },

        correctAnswer: "b"

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

            a: "Bikes",
            b: "Bicycles",
            c: "Planes",
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

    
    
function showResults(){
    
}


var timeleft = 60;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);






buildTrivia();




