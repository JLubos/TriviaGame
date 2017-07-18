console.log("JavaScript is linked");


$(document).ready(function() {


	var correctAnswers = 0;
	var incorrectAnswers =0;
	var unanswered =0;
	var rightAnswersById = ["twolves", "westbrook", "cousins", "two", "rockets" ];
	var checked = false;



// Timer
	var number = 40;
	var intervalId;


	function Timer(){
		intervalId = setInterval(decrement,1000);

	}

	function decrement(){
		number--;
		$("#interval").html("<h2>" + number + "</h2>");

		if(number == 0){
			clearInterval(intervalId);
			alert("Time Up");
			location.reload();
		}

	}


	


	//When Start button is clicked

	function start(){
		$("#start").click(function(){
			$(".mainContainer").html("<h1>Totally Trivia!!!</h1>");

			$(".mainContainer").append('Time Remaining: <div id = "interval"></div>');
			

			Q1();
			Q2();
			Q3();
			Q4();
			Q5();

			Timer();



			$(".mainContainer").append('<button type="button" id="done">Done</button>');
			done();


		});


	

	}

	//Questions - In seperate functions to serperate the answer choices from each other

	function Q1(){
		$(".mainContainer").append("<h2>Which team belongs in the Western conference?</h2>");
			$(".mainContainer").append('<input type="radio" name="q1" id="twolves" >Minnesota Timberwolves', 
				'<input type="radio" name="q1" id="hornets">Charlotte Hornets', 
				'<input type="radio" name="q1" id="hawks">Atlanta Hawks');

				//if user selects the right answer, update the correct answers 

			$("twolves:checked").click(function(){
				checked =true;
				correctAnswers++;



			}) ;
				console.log(correctAnswers);
				console.log(checked);
			
	}

	function Q2(){
		$(".mainContainer").append("<h2>Which player was named the 2017 NBA MVP award?</h2>");
			$(".mainContainer").append('<input type="radio" name="q2" id="lbj">Lebron James', 
			'<input type="radio" name="q2" id="westbrook">Russell Westbrook', 
			'<input type="radio" name="q2" id="harden">James Harden'); 

			if(document.getElementById("westbrook").checked == true){
				correctAnswers++;
				console.log("works");
							
			}

	}

	function Q3(){
		$(".mainContainer").append("<h2>Which allstar was traded at the trade deadline in 2016 to New Orleans</h2>");
			$(".mainContainer").append('<input type="radio" name="q3" id="davis">Anthony Davis', 
			'<input type="radio" name="q3" id="cousins">DeMarcus Cousins', 
			'<input type="radio" name="q3" id="holiday">Jrue Holiday'); 

			if(document.getElementById("cousins").checked == true){
				correctAnswers++;
				console.log("works");
							
			}



	}

	function Q4(){
		$(".mainContainer").append("<h2>How many teams with a record of or below .500 (more losses than wins or same amount of wins and losses) made the playoffs in 2017? </h2>");
			$(".mainContainer").append('<input type="radio" name="q4" id="two">2',
			'<input type="radio" name="q4" id="one">1',
			'<input type="radio" name="q4" id="three">3'); 

			if(document.getElementById("two").checked == true){
				correctAnswers++;
				console.log("works");
							
			}


	}

	function Q5(){
		$(".mainContainer").append("<h2>What is the best team out of the following?</h2>");
			$(".mainContainer").append('<input type="radio" name="q5" id="warriors">Golden State Warriors'); 
			$(".mainContainer").append('<input type="radio" name="q5" id="rockets">Houston Rockets'); 
			$(".mainContainer").append('<input type="radio" name="q5" id="cavaliers">Cleveland Cavaliers');

			$("#rockets").click(function(){
				checked =true;
				correctAnswers++;



			}) ;
				console.log(correctAnswers);
				console.log(checked);




			

	}

	//Finish Screen
	function done(){
		$("#done").click(function(){
			$(".mainContainer").html("<h1>Totally Trivia!!!</h1>");
			$(".mainContainer").append("<h1> ALL DONE! </h1>");

			$(".mainContainer").append('<h3>Correct Answers: <div id="correctAnswers"></div></h3>');
			$(".mainContainer").append('<h3>Incorrect Answers: <div id="incorrectAnswers></div>  </h3>');
			$(".mainContainer").append('<h3>Unanswered: <div id ="unanswered"></div> </h3>');



		});


	}





	start();










});