var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
  var sequence = input.toUpperCase();
  var rna = '';
    var i = sequence.length;

    while(i--){
      switch(sequence[i]){
        case 'G':
          rna = 'C'+ rna;
          break;
        case 'C':
          rna = 'G'+ rna;
          break;
        case 'T':
         rna = 'A'+ rna;
         break;
        case 'A':
          rna = 'U'+ rna;
          break;
        default:
          throw new Error('Invalid input');
      }
    }
    return rna;
};

module.exports = DnaTranscriber;