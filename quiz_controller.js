function Quiz(questions){
	this.score = 0;
	this.question = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestonIndex =function(){
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function(){
	return this.questions.length >= this.questionIndex;
}

Quiz.prototype.guess = function(answer){
	this.questionIndex++;
	if(this.getQuestonIndex().correctanswer(answer){
		this.score++;
	}
   this.questionIndex++;
}