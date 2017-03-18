var BeerSong = function(){}

BeerSong.prototype.verse = function(bottles){
  firstPart = (bottles) ? bottles : 'No more';
  secondPart = (bottles == 1) ? 'bottle' : 'bottles';
  thirdPart = (bottles) ? bottles : 'no more';

  switch(bottles){
    case 0: 
      fourthPart = 'Go to the store and buy some more, ';
      fifthPart = '99 bottles';
      break;
    case 1:
      fourthPart = 'Take it down and pass it around, ';
      fifthPart = 'no more bottles';
      break;
    case 2:
      fourthPart = 'Take one down and pass it around, ';
      fifthPart = '1 bottle'
      break;
    default:
      fourthPart = 'Take one down and pass it around, ';
      fifthPart = bottles-1+' bottles';
      break;
  }

  var firstHalf = firstPart+' '+secondPart+' of beer on the wall, '+thirdPart+' '+secondPart+' of beer.';
  var secondHalf = fourthPart+fifthPart +' of beer on the wall.';
  return [firstHalf,secondHalf,''].join('\n');
}

BeerSong.prototype.sing = function(start,end){
  song = [];
  last_verse = (end) ? end : 0;
  for (var i =start; i>= last_verse ; i--){
    song.push(this.verse(i));
  }
  return song.join('\n');
}

module.exports = BeerSong;