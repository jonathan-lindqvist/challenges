

def fizzbuzz
  final_string = ""
  (1..100).each do |number|
    if number % 15 == 0
      final_string << "FizzBuzz, "
    elsif number % 5 == 0
      final_string << "Buzz, "
    elsif number % 3 == 0
      final_string << "Fizz, "
    else 
      final_string << number.to_s + ", "
    end
  end
  puts final_string[0...-2]
end

fizzbuzz