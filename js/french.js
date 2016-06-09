var Translator = (function(originalInput){
	var french = {"merry":"joyeux", "christmas":"noël","you":"toi","filthy":"crasseux","animal":"animal"};
	
	originalInput.translateToFrench = function(){
		for ( i = 0; i < input.length; i++){
			input[i]=french[input[i]];	
		};
		return  input
	};
	return originalInput;
})(Translator || {});


