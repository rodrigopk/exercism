require 'active_support/time'

class Gigasecond

  def self.from(date)
    date + (10**9).seconds
  end 

end

module BookKeeping
  VERSION = 5
end