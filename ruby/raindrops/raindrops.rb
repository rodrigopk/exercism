class Raindrops

  def self.convert(input)
    hash = [{3=>"Pling"}, {5=>"Plang"}, {7=>"Plong"}]
    out = hash.collect{ |h| input%h.keys[0]==0 ? h.values[0] : ''}.join
    out = (out == "") ? input.to_s : out
  end 

end

module BookKeeping
  VERSION = 3
end 