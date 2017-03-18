var Bob = function(){ }

Bob.prototype.hey = function(input){
  if (input.replace(/ /g,'').length > 0){
    if (input.toUpperCase() ===input && /[A-Za-z]/.exec(input) !== null){
      return 'Whoa, chill out!';
    } else if (input.charAt(input.length-1) === '?') {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  } else {
    return 'Fine. Be that way!';
  }
}

module.exports = Bob;