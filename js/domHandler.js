
var translate = document.querySelector('button');
var translateValue = translate.value
var french = document.querySelector('#french');
var spanish = document.querySelector('#spanish');
var german = document.querySelector('#german');
var language = document.querySelector('#languagePicker');
var transContainer = document.querySelector('#transContainer');

translate.addEventListener('click', function(){
	if (language.value === 'french'){
		var frenchTranslation = Translator.translateToFrench();
		frenchTranslation = frenchTranslation.join(' ');
		transContainer.innerHTML = frenchTranslation;
	}
	else if (language.value === 'spanish'){
		var spanishTranslation = Translator.translateToSpanish();
		spanishTranslation = spanishTranslation.join(' ');
		transContainer.innerHTML = spanishTranslation;
	}
	else {
		var germanTranslation = Translator.translateToGerman();
		germanTranslation = germanTranslation.join(' ');
		transContainer.innerHTML = germanTranslation;
	}
});
