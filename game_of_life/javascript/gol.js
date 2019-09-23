
class Game {
  constructor(){
    this.grid = this.makeArray()
    console.log(this.grid)
    console.log(this.grid.length)
   
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
    console.clear()
    var next_gen = this.makeArray()
    //console.table(next_gen)
    console.table(this.grid)
    this.update_grid()
  }

  update_grid(){
    for(let row_index = 0; row_index < this.grid.length; row_index++){
      let row = this.grid[row_index]
      for(let cell_index = 0; cell_index < row.length; cell_index++){
        let alive_neighbours = this.check_neighbours(row_index, cell_index)
      }
    }
  }

  check_neighbours(y, x){
    let neighbours = 0
    let x_buffer = -1
    let y_buffer = -1
  }
}

let mygame = new Game
mygame.startGame()