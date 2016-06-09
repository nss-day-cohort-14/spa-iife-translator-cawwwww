var Translator = (function(originalInput) {

  
  var spanish = {"merry": "alegre", "christmas": "navidad", "you": "tu", "filthy": "inmundo", "animal": "el animal"};

  
		originalInput.TranslateToSpanish = function(translate) {
    
    	return spanish[translate];
  }

  return originalInput;
  
})(Translator);


