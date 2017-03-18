var Gigasecond = function(date){
  var gigaSecond = Math.pow(10,9);
  this.gigaDate = new Date(date.setSeconds(date.getSeconds()+gigaSecond));
}

Gigasecond.prototype.date = function(){
  return this.gigaDate;
}

module.exports = Gigasecond;