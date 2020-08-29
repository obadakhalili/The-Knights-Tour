  
function allPossibleMoves(position, takenSpots) {
  position = position[1] - 1 + ("abcdefgh".indexOf(position[0]) << 4) // Convert

  return [-0x12, -0x21, -0x1F, -0x0E, 0x12, 0x21, 0x1F, 0x0E] // All relative moves
    .map(move => position + move) // Add to current position
    .filter(move => !(move & 0x88)) // Detect under/overflow, i.e. off-the-board
    .map(move => "abcdefgh"[move >> 4] + ((move & 7) + 1)) // Convert to output format
    .filter(move => !takenSpots.includes(move)) // filtering out visited squares
}

function nextMove(position, takenSpots) {
  const possibleMoves = allPossibleMoves(position, takenSpots)

  const movesAccessibilities = possibleMoves.map(move => allPossibleMoves(move, takenSpots).length)
  const minAccessibility = Math.min(...movesAccessibilities)
  const move = possibleMoves[movesAccessibilities.indexOf(minAccessibility)]
  takenSpots.push(move)

  return move
}

function takeTour(position, takenSpots) {
  for (let moveNumber = takenSpots.length + 1, move = position; moveNumber < 65; ++moveNumber) {
    move = nextMove(move, takenSpots)
  }
}

export default {
  nextMove,
  takeTour
}
