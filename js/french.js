

var Translator = (function(orignalInput){
	var french = {"merry":"joyeux", "christmas":"Noël","you":"toi","filthy":"crasseux","animal":"animal"}

	orignalInput.translateToFrench = function(){
		for ( i = 0; i < input.length; i++){
			input[i]=french[input[i]];
		}
		return  input
	}
	return maker
})(Translator)


