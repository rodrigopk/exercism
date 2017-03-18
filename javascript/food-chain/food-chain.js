class Animal{
	constructor(_name,_statement,_prey){
		this.name = _name;
		this.statement = _statement;
		switch (_name){
			case 'fly':
				this.why = "I don't know why she swallowed the fly. Perhaps she'll die.";
				break;
			case 'bird':
				this.setMotive(_prey);
				this.why = this.why.replace('.',' that wriggled and jiggled and tickled inside her.');
				break;
			default:
				this.setMotive(_prey);
		}

	}

	setMotive(prey){
		this.why = "She swallowed the "+this.name+" to catch the "+prey+'.';
	}



}


var FoodChain = function(){
	this.opening = "I know an old lady who swallowed a ";
	this.animals = [
		new Animal("fly"),
		new Animal('spider','It wriggled and jiggled and tickled inside her.','fly'),
		new Animal('bird','How absurd to swallow a bird!','spider'),
		new Animal('cat','Imagine that, to swallow a cat!','bird'),
		new Animal('dog','What a hog, to swallow a dog!','cat'),
		new Animal('goat','Just opened her throat and swallowed a goat!','dog'),
		new Animal('cow',"I don't know how she swallowed a cow!",'goat'),
		new Animal('horse',"She's dead, of course!")
	]
}

FoodChain.prototype.verse = function(verse){
	var song = [];
	var index = verse-1;
	// swallowed what?
	song.push(this.opening+this.animals[index].name+'.');
	// what do you think about it? 
	if (verse > 1) {
		song.push(this.animals[index].statement);
	}
	if (verse < 8){
		// swallowed why?
		for (var i = index; i >= 0; i--){
			song.push(this.animals[i].why);
		}
	}
	return song.join('\n')+'\n';
}

FoodChain.prototype.verses = function(start,finish){
	song = [];
	for (var i = start; i <= finish; i++){
		song.push(this.verse(i));
	}
	return song.join('\n')+'\n'
}

module.exports = FoodChain;