var inputbox = document.querySelector('.translateBox');
var input;
inputbox.addEventListener('change', function() {
	input = inputbox.value.split(' ');
		grabInput();
  })
  
function grabInput() {
	input = inputbox.value.toLowerCase();
	input = input.replace(/[,.]/g, ' ');
	input = input.split(' ');
};


var Translator = {};