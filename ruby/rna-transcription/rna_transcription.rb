class Complement
  
  def self.of_dna(rna)
    rna_array = rna.scan(/[GCTA]/)
    return '' if rna_array.size != rna.size
    transcripted = []
    rna_array.each do |nucleotide|
      transcripted << case nucleotide
      when 'G'
        'C'
      when 'C'
        'G'
      when 'T'
        'A'
      else
        'U'
      end  
    end  
    transcripted.join('')
  end

end

module BookKeeping
  VERSION = 4 
end