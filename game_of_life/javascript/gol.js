
class Game {
  constructor(){
    this.grid = this.makeArray()
  }

  makeArray(){
    let grid = new Array(10)
    for(let i = 0; i < grid.length; i++) {
      var col = []
      for(let j = 0; j < 10; j++){
          col.push(Math.floor(Math.random() * Math.floor(2)))
      } 
      grid[i] = col
    }
    grid = grid
    return grid
  }

  startGame(){
    let gen = 0
    while(gen < 5){
      console.clear()
      let next_gen = this.makeArray()
      console.table(this.grid)
      next_gen = this.update_grid(next_gen)
      //  console.table(next_gen)
      this.grid = next_gen
      alert("Next gen") // This is not the best solution, but it just for basic visuals. A better solution would be using a canvas.
      gen++
    }
  }
  
  update_grid(next_gen){
    for(let row_index = 0; row_index < this.grid.length; row_index++){
      let row = this.grid[row_index]

      for(let cell_index = 0; cell_index < row.length; cell_index++){
        let alive_neighbours = this.check_neighbours(row_index, cell_index)
        // console.log(`Alive ${alive_neighbours} for: ${row_index}, ${cell_index}`)
        if(alive_neighbours < 2){
          next_gen[row_index][cell_index] = 0
        }else if(alive_neighbours > 3){
          next_gen[row_index][cell_index] = 0
        }else if(alive_neighbours === 3){
          next_gen[row_index][cell_index] = 1
        }else{
          next_gen[row_index][cell_index] = this.grid[row_index][cell_index]
        }
      }
    }
    return next_gen
  }

  check_neighbours(y, x){
    let neighbours = 0
    let x_buffer = -1
    let y_buffer = -1
    
    for(let times = 0; times < 9; times++){
      if(this.cellExists(y + y_buffer, x + x_buffer)){
        // console.log(`${y + y_buffer},${x + x_buffer} = ${this.grid[y + y_buffer][x + x_buffer]}` )
        neighbours += this.grid[y + y_buffer][x + x_buffer]
      }
      x_buffer += 1
      if(x_buffer === 2){
        x_buffer = -1
        y_buffer += 1
      }
    }
    neighbours -= this.grid[y][x]
    return neighbours
  }
  
  cellExists(y, x){
    if(y <= this.grid.length - 1 && y >= 0){
      if(x <= this.grid[0].length - 1 && x >= 0){
        return true
      }
    }
  }
}

let mygame = new Game
mygame.startGame()