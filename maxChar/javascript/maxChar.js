
function maxChar(string){
  let array_of_letters = string.split("")
  let obj_of_letters = {}
  let maxLetter = array_of_letters[0]
  let maxNumber = 1
  
  for(let letter of array_of_letters){
    if(obj_of_letters[letter]){
      obj_of_letters[letter]++
    }else{
      obj_of_letters[letter] = 1
    }
    
    if(obj_of_letters[letter] > maxNumber){
      maxLetter = letter
      maxNumber = obj_of_letters[letter]
    }
  }

  return `The letter "${maxLetter}" appeared ${maxNumber} times in the string "${string}".`
}

let char = maxChar("Javascript")
console.log(char)