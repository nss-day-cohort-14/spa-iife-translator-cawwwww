var Translator = (function(originalInput) {
  var spanish = {"merry": "alegre", "christmas": "navidad", "you": "tu", "filthy": "inmundo", "animal": "el animal"};
	
	originalInput.translateToSpanish = function(){
		for ( i = 0; i < input.length; i++){
			input[i]=spanish[input[i]];	
		};
		return  input
	};
	return originalInput;
})(Translator || {});


