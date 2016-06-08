var input = document.querySelector('.translateBox');
input.addEventListener('change', function(){
	input = input.value;
})
var Translator = (function(){
	return {
		getInput: function(input){
			input = input.split(' ');
			return input;
		}
	}

})()