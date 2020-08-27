<template>
  <chess-board draggable-pieces drop-off-board="snapback"></chess-board>
</template>

<script>
import Chess from "chess.js"
import { mapGetters } from "vuex"
import { markupSquare } from "@/helpers"

export default {
  name: "Chessboard",
  mounted() {
    this.board = document.querySelector("chess-board")
    this.board.setPosition({ c6: "bN" })
    this.takenSpots[0] = "c6"
    this.board.addEventListener("drop", this.droped)
  },
  data() {
    return {
      board: null,
      game: null,
      positionSuffix: " b - - 0 1",
      takenSpots: []
    }
  },
  computed: {
    squaresEl() {
      return Array.from(this.board.shadowRoot.querySelector("[part~='board']").children)
    }
  },
  methods: {
    boardReady() {
      this.game = new Chess(this.board.fen() + this.positionSuffix)

      const targetId = "square-" + Object.keys(this.board.position)  
      markupSquare(1, targetId, this.squaresEl)

      this.$store.dispatch("updateBoardState", "ready")
      this.$store.dispatch("updateInstruction", "Press the greenish button if you want to take the full tour, the yellowish one if you want the algorithm to figure out the next step for you, or move the knight on your own")
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

      const targetId = "square-" + target
      markupSquare(this.takenSpots.length, targetId, this.squaresEl)

      if (this.takenSpots.length === 2) {
        this.$store.dispatch("updateTourBtnMsg", "Complete This Tour")
        this.$store.dispatch("updateInstruction", "You can still press the greenish button if you want the algorithm to take it from here")
      }
    },
    nextStep() {
      // ..
    },
    takeTour() {
      // ..
    },
    clearBoard() {
      // ..

      this.$store.dispatch("updateBoardState", "unready")
      this.$store.dispatch("updateTourBtnMsg", "Take a tour")
      this.$store.dispatch("updateInstruction", "Place the knight at an initial position and press the \"I'm ready\" button")
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
  padding: 5rem 0 0 0;
}

@media only screen and (max-width: 816px) {
  chess-board {
    width: 95%;
    padding: 3rem 0 0 0;
  }
}
</style>
