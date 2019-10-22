
function longestWord(string){
  let words = string.split(" ")
  let firstLongest = ""
  words.map((word) => {
    if(word.length > firstLongest.length){
      firstLongest = word
    }
  })

  let longestWords = words.filter(word => word.length === firstLongest.length)

  if(longestWords.length === 1){
    return firstLongest
  } else {
    return longestWords
  }
}

word = longestWord("Hello I am Jonathan Lindqvist")
console.log(word)