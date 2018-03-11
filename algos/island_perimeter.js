var islandPerimeter = function(grid) {
  var perimeter = 0
  var gridRows = grid.length
  var gridCols = grid[0].length

  for (var i = 0; i < gridRows; i++) {
    for (var j = 0; j < gridCols; j++) {
      if (grid[i][j] == 1) {
        var removeLength = 0
        // north cell
        if (grid[i - 1] && grid[i - 1][j] == 1) {
          removeLength += 1
        }

        if (grid[i + 1] && grid[i + 1][j] == 1) {
          removeLength += 1
        }

        if (grid[i][j - 1] && grid[i][j - 1] == 1) {
          removeLength += 1
        }

        if (grid[i][j + 1] && grid[i][j + 1] == 1) {
          removeLength += 1
        }

        perimeter += 4 - removeLength
      }
    }
  }
  return perimeter
};
