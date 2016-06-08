/// this will change. it is just so you can see that the logic works

var translate = document.querySelector('button');
translate.addEventListener('click', function(){
	var frenchTranslation = Translator.translateToFrench();
	console.log(frenchTranslation)
})