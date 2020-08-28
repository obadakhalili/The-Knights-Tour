<template>
  <chess-board draggable-pieces drop-off-board="snapback"></chess-board>
</template>

<script>
import Chess from "chess.js"
import { mapGetters } from "vuex"
import { markupSquare } from "@/helpers"
import warnsdorff from "@/warnsdorff"

export default {
  name: "Chessboard",
  mounted() {
    this.boardEl = document.querySelector("chess-board")
    this.boardEl.addEventListener("drop", this.droped)
    
    this.reset()
  },
  data() {
    return {
      boardEl: null,
      takenSpots: null,
      timeouts: [],
      game: new Chess(),
      positionSuffix: " b - - 0 1"
    }
  },
  methods: {
    changeState(state) {
      Object.entries(state).forEach(([key, value]) => this.$store.dispatch(key, value))
    },
    currentPosition() {
      return Object.keys(this.boardEl.position)[0]
    },
    selectInBoard(selector) {
      return this.boardEl.shadowRoot.querySelectorAll(selector)
    },
    markup(target, markup) {
      const targetId = "#square-" + target
      const [squareEl] = this.selectInBoard(targetId)
      markupSquare(markup ? markup : this.takenSpots.length, squareEl)
    },
    reset() {
      this.boardEl.setPosition({ c6: "bN" })
      this.takenSpots = ["c6"]
    },
    boardReady() {
      this.game.load(this.boardEl.fen() + this.positionSuffix)

      this.markup(this.currentPosition(), 1)
    
      this.changeState({
        updateBoardState: "ready",
        updateInstruction: "Press the greenish button if you want to take the full tour, the yellowish one if you want the algorithm to figure out the next step for you, or move the knight on your own"
      })
    },
    droped({ detail }) {
      const { source, target, setAction } = detail

      if (this.$store.getters.boardState === "unready") {
        return this.takenSpots[0] = target === "offboard" ? source : target
      }

      const move = this.game.move({
        from: source,
        to: target
      })

      if (!move || this.takenSpots.includes(target)) {
        this.game.undo()
        return setAction("snapback")
      }
      
      this.game.load(this.game.fen().replace(/\s.+/, this.positionSuffix))
      this.takenSpots.push(target === "offboard" ? source : target)
      
      this.markup(target)

      if (this.takenSpots.length === 2) {
        this.changeState({
          updateTourBtnMsg: "Complete this tour",
          updateInstruction: "You can still press the greenish button if you want the algorithm to take it from here"
        })
      }
    },
    nextMove() {
      let move;
      try {
        move = warnsdorff.nextMove(this.currentPosition(), this.takenSpots)
      } catch {
        this.clearBoard()
        return this.changeState({ updateInstruction: "You got yourself stuck! If you liked it, consider giving it a start on GitHub!" })
      }
      
      this.boardEl.setPosition({ [move]: "bN" })
      setTimeout(() => this.markup(move), 150)

      this.game.load(this.boardEl.fen() + this.positionSuffix)

      if (this.takenSpots.length === 2) {
        this.changeState({
          updateTourBtnMsg: "Complete this tour",
          updateInstruction: "You can still press the greenish button if you want the algorithm to take it from here"
        })
      }
    },
    takeTour() {
      this.changeState({
        updateBoardState: "inaction",
        updateInstruction: "Working on it ..."
      })

      const currentPosition = this.currentPosition()
      try {
        warnsdorff.takeTour(currentPosition, this.takenSpots)
      } catch {
        this.clearBoard()
        return this.changeState({ updateInstruction: "You got yourself stuck! If you liked it, consider giving it a start on GitHub" })
      }
      
      const currentPositionIndex = this.takenSpots.indexOf(currentPosition)
      const tour = this.takenSpots.slice(currentPositionIndex + 1)

      this.visualizeTour(tour)
      this.game.load(this.boardEl.fen() + this.positionSuffix)
    },
    visualizeTour(tour) {
      const offset = 64 - tour.length

      tour.forEach((move, index) => {
        const timeout = setTimeout(() => {
          this.boardEl.setPosition({ [move]: "bN" })
          setTimeout(() => this.markup(move, offset + index + 1), 150)
        }, 150 * index)
        this.timeouts.push(timeout)
      })

      const timeout = setTimeout(() => {
        this.changeState({ updateInstruction: "If you liked it, consider giving it a start on GitHub!" })
      }, tour.length * 150)
      this.timeouts.push(timeout)
    },
    clearBoard() {
      this.timeouts.forEach(clearTimeout)
      setTimeout(() => {
        this.selectInBoard(".square").forEach(square => square.style = "")
        this.selectInBoard("#moveNumberContainer").forEach(container => container.remove())
      }, 150)
      this.reset()

      this.changeState({
        updateBoardState: "unready",
        updateTourBtnMsg: "Take a tour",
        updateInstruction: "Place the knight at an initial position and press the \"I'm ready\" button"
      })
    }
  }
}
</script>

<style scoped>
chess-board {
  --dark-color:  #61774B;
  --light-color:  #EEEED2;
  width: 550px;
  margin: auto;
  padding: 3rem 0 0 0;
}

@media only screen and (max-width: 816px) {
  chess-board {
    width: 95%;
  }
}
</style>
