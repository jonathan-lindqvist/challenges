
# 1 = alive
# 0 = dead
class Game
  def initialize
    @grid = make_array
  end

  def make_array
    grid = []
    10.times do |row|
      col = []
      10.times do
        col << rand(0..1)
      end
      grid << col
    end 
    return grid
  end

  def execute
    while true
      @next_gen = make_array
      system("clear")
      render_grid
      update_grid
      @grid = @next_gen
      wait_for_input = gets.chomp
    end
  end

  def render_grid
    @grid.each do |row|
      row.each do |cell|
        print cell.to_s + " "
      end
      print "\n"
    end
  end

  def update_grid
    @grid.each_with_index do |row, row_index|
      row.each_with_index do |cell, cell_index|
        alive_neigbours = check_neighbours(row_index, cell_index)
        if alive_neigbours < 2
          @next_gen[row_index][cell_index] = 0
        elsif alive_neigbours > 3
          @next_gen[row_index][cell_index] = 0
        elsif alive_neigbours == 3
          @next_gen[row_index][cell_index] = 1
        else
          @next_gen[row_index][cell_index] == @grid[row_index][cell_index]
        end
      end
    end
  end

  def check_neighbours(y, x)
    neighbours = 0
    x_buffer = -1
    y_buffer = -1
    9.times do
      if cell_exists?(y + y_buffer, x + x_buffer)
        neighbours += @grid[y + y_buffer][x + x_buffer]
      end
      x_buffer += 1
      if x_buffer == 2
        x_buffer = -1
        y_buffer += 1
      end
    end
    neighbours -= @grid[y][x]
    return neighbours
  end

  def cell_exists?(y,x)
    if (y <= @grid.length - 1) && (y >= 0)
      if (x <= @grid[0].length - 1) && (x >= 0)
        return true
      end
    end
  end
  
end

game = Game.new

game.execute