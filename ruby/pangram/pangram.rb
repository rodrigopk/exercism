
class Pangram  
  
  def Pangram.pangram?(phrase)
    char_map = Hash[('a'..'z').to_a.collect{|c| [c,0]}]
    phrase.downcase.gsub(/[0-9\".,_ ]/,"").split('').each{ |char| 
      char_map[char] += 1 
    }
    return (char_map.values.include?(0)) ? false : true
  end

end

module BookKeeping
  VERSION = 4 
end
