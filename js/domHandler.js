/// this will change. it is just so you can see that the logic works
var translate = document.querySelector('button');
var translateValue = translate.value
var french = document.querySelector('#french');
var language = document.querySelector('#languagePicker');
var transContainer = document.querySelector('#transContainer');
var frenchTranslation;

translate.addEventListener('click', function(){
	if (language.value === 'french'){
		frenchTranslation = Translator.translateToFrench();
		console.log("What is frenchTranslation", frenchTranslation);
		frenchTranslation = frenchTranslation.join(' ');
		transContainer.innerHTML = frenchTranslation;
		grabInput();
		

	}
})






// translate.addEventListener('click', function(){
// 	var frenchTranslation = Translator.translateToFrench();
// 	console.log(frenchTranslation)
// })