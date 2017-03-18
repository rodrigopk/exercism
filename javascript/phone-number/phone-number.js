var PhoneNumber = function(input){
  this.cleanNumber = input
                      .replace(/\D/g,'');
}

PhoneNumber.prototype.number = function(){
  if (this.cleanNumber.length > 11 
      || this.cleanNumber.length <= 9
      || this.cleanNumber.length == 11 && this.cleanNumber[0] != '1') {
    return '0000000000';
  } else {
    return (this.cleanNumber.length == 11) ? 
            this.cleanNumber.slice(1,11) : 
            this.cleanNumber;
  }
}

PhoneNumber.prototype.areaCode = function(){
  return this.cleanNumber.slice(0,3)
}

PhoneNumber.prototype.formatedNumber = function(){
  return this.cleanNumber.slice(3,6)+'-'+this.cleanNumber.slice(6,11);
}

PhoneNumber.prototype.toString = function(){
  return '('+this.areaCode()+') '+this.formatedNumber();
}

module.exports = PhoneNumber;