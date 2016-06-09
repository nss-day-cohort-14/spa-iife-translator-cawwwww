var Translator = (function (originalInput) {
	// Private variable
	var german = {
		"merry": "frohe",
		"christmas": "weihnachten",
		"you": "sie",
		"filthy": "schmutzig",
		"animal": "das tier"
	};

	originalInput.translateToGerman = function() {
		for ( i = 0; i < input.length; i++) {
			input[i] = german[input[i]];	
		};
		return  input;
	};
	return originalInput;

})(Translator);