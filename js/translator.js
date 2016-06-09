var inputbox = document.querySelector('.translateBox');
var input;
inputbox.addEventListener('change', function(){
	grabInput();
})

function grabInput(){
	input = inputbox.value.toLowerCase();
	input = input.replace(/[,.]/g, ' ')
	input = input.split(' ')
}

var Translator = {}