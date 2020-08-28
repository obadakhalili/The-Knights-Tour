export function markupSquare(markup, squareEl) {
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
  squareEl.style["z-index"] = 1
  
  moveNumberContainer.appendChild(moveNumberEl)
  moveNumberEl.appendChild(moveNumber)

  squareEl.appendChild(moveNumberContainer)
}
