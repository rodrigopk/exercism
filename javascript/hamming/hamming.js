var Hamming = function() { };

Hamming.prototype.compute = function(strandA,strandB) {
  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  } else {
    var i = strandA.length;
    var distance = 0;
    while(i--){
      if (strandA[i] !== strandB[i]) { distance++; }
    }
    return distance;
  }
};

module.exports = Hamming;