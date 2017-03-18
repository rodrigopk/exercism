class Hamming
  
  def self.compute(strandA,strandB)
    
    if strandA.size != strandB.size
      raise ArgumentError.new("Strands should have the same size") 
    else
      dist = 0
      strandA.scan(/./).each_with_index do |nucleotide,index|
        dist+=1 if nucleotide != strandB[index]
      end
    end
    dist
  end

end

module BookKeeping
  VERSION = 3
end