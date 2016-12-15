var count = 10;
var counter = setInterval(timer, 1000);
var timeUp = setTimeout(timeUp, 1000 * 10); //60 seconds
var correct = 0
var incorrect = 0
var unanswered
var answers = []
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


//TIMER
function timer() {
	count=count-1;
	if (count <=0) {
		clearInterval(counter);
		console.log("time's up");
		return;
	}
	// document.getElementById("currentTimeLeft").innerHTML=count + " seconds";
	$("#currentTimeLeft").html(count + " seconds");
}

//Time is up:  results are revealed on a new page.
function timeUp() {
	console.log("change page/reveal answers");

	//Searching answers for correct/incorrect/unanswered values
	//counting the values of each for total scores
	for (i=0; i<answers.length; i++) {
	if (answers[i] == "correct") {
	correct++
} else if (answers[i] == "incorrect") {
	incorrect++
} else {};

	if (answers.length < numQues) {
		unanswered = numQues - (incorrect + correct)
	}
};

//hidden forms


//printing results on page
console.log(correct);
console.log(incorrect);
console.log(unanswered);
console.log(answers);
}



//RESTART BUTTON?