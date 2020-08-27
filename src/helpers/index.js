export function markupSquare(markup, targetId, squaresEl) {
  const targetEl = squaresEl.find(({ id }) => id === targetId)

  const moveNumberContainer = document.createElement("div")
  const moveNumberEl = document.createElement("strong")
  const moveNumber = document.createTextNode(markup)

  moveNumberContainer.setAttribute("id", "moveNumberContainer")
  moveNumberContainer.style.margin = 0
  moveNumberContainer.style.position = "absolute"
  moveNumberContainer.style.top = "50%"
  moveNumberContainer.style.left = "50%"
  moveNumberContainer.style.transform = "translate(-50%, -50%)"
  moveNumberContainer.style["-ms-transform"] = "translate(-50%, -50%)"
  moveNumberContainer.style["z-index"] = -1
  targetEl.style["z-index"] = 1
  
  moveNumberContainer.appendChild(moveNumberEl)
  moveNumberEl.appendChild(moveNumber)

  targetEl.appendChild(moveNumberContainer)
}

export function removeSquaresMarkup(squaresEl) {
  squaresEl.forEach(squareEl => Array.from(squareEl.children).find(child => child.id === "moveNumberContainer")?.remove())
}
