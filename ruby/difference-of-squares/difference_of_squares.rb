
class Squares

  def initialize(number)
    @numbers = number.zero? ? [0] : Array(1..number)
  end

  def square_of_sum
    @numbers.inject(:+)**2
  end

  def sum_of_squares
    @numbers.map{|i| i*i}.inject(:+)
  end

  def difference
    square_of_sum - sum_of_squares
  end

end

module BookKeeping
  VERSION = 3 
end