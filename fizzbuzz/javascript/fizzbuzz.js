function fizzbuzz() {
  let final_string = new String
  let array = new Array(100)

  for(var i = 1; i <= array.length; i++){
    if(i % 15 === 0){
      final_string = final_string.concat("FizzBuzz, ")
    } else if(i % 5 == 0){
      final_string = final_string.concat("Buzz, ")
    } else if (i % 3 === 0){
      final_string = final_string.concat("Fizz, ")
    } else {
      final_string = final_string.concat(i, ", ")
    }
  }
  console.log(final_string.slice(0, -2))
}

fizzbuzz()