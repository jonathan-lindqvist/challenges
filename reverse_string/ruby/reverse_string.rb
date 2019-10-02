def reverseify(string)
  puts string
  reversed = ""
  (string.length).times do |index|
    reversed << string[string.length - 1 - index]
  end
  puts reversed
end

reverseify("hello world!")