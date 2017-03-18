var Pangram = function(input) {
  this.phrase = input
                  .toLowerCase()
                  .replace(/[0-9\W_]+/g,'');
};

Pangram.prototype.isPangram = function() {
  is_pangram = true;
  array = "abcdefghijklmnopqrstuvwxyz".split('')
    map = new Map(array.map((c) => [c,0]));
    
    for (character in this.phrase) {
      map.set(this.phrase[character],map.get(this.phrase[character])+1);
    }
    map.forEach(function(value,key){
      if (value == 0) is_pangram = false;
    })
  return is_pangram;
};

module.exports = Pangram;