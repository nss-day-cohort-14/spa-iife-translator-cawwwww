

var Translator = (function(maker){
	var french = {"merry":"joyeux", "christmas":"Noël","you":"toi","filthy":"crasseux","animal":"animal"}

	maker.translateToFrench = function(){
		console.log("THIS IS THE INPUT", input);
		for ( i = 0; i < input.length; i++){
			input[i]=french[input[i]];
			console.log("input in translateToFrench", input[i]);
		}
		return  input
	}
	return maker
})(Translator)


