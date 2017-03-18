var Isogram = function(input){
  this.word = input
                  .toLowerCase()
                  .replace(/[0-9.\/#!?$%\^&\*;:{}=\-_`~()@ ]+/g,'')
                  .split('');
}

Isogram.prototype.isIsogram = function(){
  map = {};
  is_isogram = true;
  this.word.forEach(function(char){
    map[char] =  (map[char]) ? map[char]+1 : 1;
  });
  for (var char in map) {
    if (map[char] >1) is_isogram = false;
  }
  return is_isogram;
}

module.exports = Isogram;