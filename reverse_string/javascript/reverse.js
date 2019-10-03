function reverseify(string) {
  console.log(string)
  let reversed = ""
  for(let index = 0; index < string.length; index++){
    reversed += string[string.length - 1 - index]
  }
  console.log(reversed)
}

reverseify("Hello world!")