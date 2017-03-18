var usedNames = {}

class Robot {

	constructor(){
		this.reset();
	}
	
	randomASCII(range,max,min){
		var symbols = [];
		for (var i = 0; i < range; i++){
			symbols.push(String.fromCharCode(parseInt(Math.random()*(max-min)+min)));
		}
		return symbols.join('');
	}

	randChars(range){
		return this.randomASCII(range,91,65);
	}

	randNumbers(range){
		return this.randomASCII(range,58,48);
	}

	randName(){
		return this.randChars(2)+this.randNumbers(3);
	}

	reset(){
		var oldName = this.name;
		do {
			this.name = this.randName(); 
		} while(usedNames[this.name]);
		usedNames[this.name] = true;
	}
}

module.exports = Robot;