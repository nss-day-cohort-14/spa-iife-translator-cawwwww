var translator = (function (originalInput)) {
	// Private variable
	var german = {
		"merry": "frohe",
		"christmas": "weihnachten",
		"you": "sie",
		"filthy": "schmutzig",
		"animal": "das tier"
	};

	originalInput.translateToGerman = function(translate) {
		return german[translate];
	}

	return translator;
})(originalInput);