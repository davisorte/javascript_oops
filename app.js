function populate(){
	if(quiz.isEnded()){
		//showscore
	}
	else{
		var element= document.getElementByid("question");
		element.innerHtml = quiz.getQuestionIndex().text;
	
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length; i++){
			var element = document.getElementByid("choice"+ i);
			element.innerHtml =choices[i];
			guess("btn" + i, choices[i]);
		}

	}
}


function guess(id, guess) {
	var button =document.getElementByid(id);
	button.onclick =function(){
		quiz.guess(guess);
		populate();
	}
}


function showProgress(){
	var currentQuestionNumber =quiz.questionIndex +1;
	var element =document.getElementByid("progress");
	element.innerHTML ="Question " + currentQuestionNumber + "of" + quiz.questions.length;
}


function showScores(){
	var gameOverHtml  = "h1> Result</h1>";
	gameOverHtml + ="<h2 id='score'> Your score" + quiz.score +"</h2>";
	var element = document.getElementByid("quiz");
	element.innerHTML = gameOverHtml;

}





var questions = {
	new Questions ("Which one is not an object oriented programming language?",["java","c#","c++","c"],"c"),
	new Questions ("Which one is not an object oriented programming language?",["java","c#","c++","c"],"c"),
	new Questions ("Which one is not an object oriented programming language?",["java","c#","c++","c"],"c"),
	new Questions ("Which one is not an object oriented programming language?",["java","c#","c++","c"],"c"),
	new Questions ("Which one is not an object oriented programming language?",["java","c#","c++","c"],"c"),
	

};

var quiz = new Quiz(questions);

populate();

