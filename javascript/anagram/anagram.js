// Anagram
// 	- same length
// 	- same count of occurrences of characters

var Anagram = function(input) {
	this.word = input.toLowerCase();
}

Anagram.prototype.matches = function(){
	
	function parseArgs(args){
		// Normalizes the arguments object into a single array of strings
		var argsArray = Array.prototype.slice.call(args);
		return [].concat.apply([],argsArray);
	}

	function countChar(string,char) {
		return (string.match(new RegExp(char,'g'))||[]).length
	}

	function isCharCountEqual(stringA,stringB,char){
		return countChar(stringA,char) == countChar(stringB,char);
	}

	function isAnagram(stringA,stringB){
		if (stringA.length == stringB.length 
				&& stringA !== stringB) {
			var j = stringA.length;
			var matches = 0;
			while(j--){
				if ( isCharCountEqual(stringA,stringB,stringA[j]) ) {
					matches++;
				}
			}
			return (matches == candidate.length) ? true : false;
		} else {
			return false
		}
	}


	var anagrams = [];
	var array = parseArgs(arguments);
	for (var i = 0; i < array.length; i++){
		var candidate = array[i].toLowerCase();
		if(	isAnagram(candidate,this.word) ){
			anagrams.push(array[i]);
		}
	}

	return anagrams;
}



module.exports = Anagram;