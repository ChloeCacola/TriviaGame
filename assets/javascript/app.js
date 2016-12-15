var count = 10;
var counter = setInterval(timer, 1000);
var timeUp = setTimeout(timeUp, 1000 * 10); //60 seconds
var correct = 0
var incorrect = 0
var unanswered = 0
var answers = ["filler"] //filler used so IF/ELSE statement will run and count unanswered questions appropriately 
var numQues = 6 //change this if/when more/less questions added


//Record the *checked* value of each question form
$('#Q1 input').on('change', function() {
   answers.push($('input[name=A1]:checked', '#Q1').val()); 
});

$('#Q2 input').on('change', function() {
   answers.push($('input[name=A2]:checked', '#Q2').val()); 
});

$('#Q3 input').on('change', function() {
   answers.push($('input[name=A3]:checked', '#Q3').val()); 
});

$('#Q4 input').on('change', function() {
   answers.push($('input[name=A4]:checked', '#Q4').val()); 
});

$('#Q5 input').on('change', function() {
   answers.push($('input[name=A5]:checked', '#Q5').val()); 
});

$('#Q6 input').on('change', function() {
   answers.push($('input[name=A6]:checked', '#Q6').val()); 
});

//Hide results
$("#results").css('display', 'none');


//TIMER
function timer() {
	count=count-1;
	if (count <=0) {
		clearInterval(counter);
		console.log("time's up");
		return;
	}
	// document.getElementById("currentTimeLeft").innerHTML=count + " seconds";
	$("#time").html(count + " seconds");
}

//Time is up:  results are revealed on a new page.
function timeUp() {
	console.log("change page/reveal answers");

	//Searching answers for correct/incorrect values and adding to total
	for (i=0; i<answers.length; i++) {
	if (answers[i] == "correct") {
	correct++
	} else if (answers[i] == "incorrect") {
	incorrect++
	} else {};
	};

	//counting unanswered questions
	if (answers.length < numQues) {
		unanswered = numQues - (incorrect + correct)
	} else {
		unanswered = numQues
	};

	//hide questions/answers
	$("#game").css('display', 'none');


	//printing results on page
	$("#results").css('display', 'initial');


	$("#correct").html("Correct: " + correct);
	$("#incorrect").html("Incorrect: " + incorrect);
	$("#unanswered").html("Unanswered: " + unanswered);
	console.log(correct);
	console.log(incorrect);
	console.log(unanswered);
	console.log(answers);
	}



//RESTART BUTTON?