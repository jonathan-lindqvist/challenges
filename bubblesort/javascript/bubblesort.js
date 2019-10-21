
function bubble(array){
  console.log(array)
  for(let i = 0; i < array.length - 1; i++){
    for(let j = 0; j < array.length - 1; j++){
      if(array[j] > array[j + 1]){
        let temp = array[j]

        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

let sort = bubble([4, 8, 1, 7, 38, 3, 5, 9]) // => 1, 3, 4, 5, 7, 8, 9, 38
console.log(sort)