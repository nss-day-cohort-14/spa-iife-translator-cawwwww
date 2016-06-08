var inputbox = document.querySelector('.translateBox');
var input;
inputbox.addEventListener('change', function(){
	 input = inputbox.value.split(' ')
})

var Translator = {}