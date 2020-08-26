<template>
  <chess-board draggable-pieces drop-off-board="snapback"></chess-board>
</template>

<script>
import Chess from "chess.js"
import { mapGetters } from "vuex"

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
  computed: mapGetters(["boardState"]),
  methods: {
    boardReady() {
      this.game = new Chess(this.board.fen() + this.positionSuffix)

      this.$store.dispatch("updateBoardState", "ready")
      this.$store.dispatch("updateInstruction", "Press the greenish button if you want to take the full tour, the bluish one if you want the algorithm to figure out the next step for you, or move the knight on your own")
    },
    droped({ detail }) {
      const { source, target, setAction } = detail
      const nextSpot = target === "offboard" ? source : target

      if (this.boardState === "ready") {
        
        const move = this.game.move({
          from: source,
          to: target
        })  

        if (!move || this.takenSpots.includes(target)) {
          this.game.undo()
          return setAction("snapback")
        }
        
        this.game.load(this.game.fen().replace(/\s.+/, this.positionSuffix))
        this.takenSpots.push(nextSpot)

        if (this.takenSpots.length > 1) {
          this.$store.dispatch("updateTourBtnMsg", "Complete This Tour")
        }

        // the 64 squares of the board
        // this.board.shadowRoot.querySelector("[part~='board']").children
      } else {
        this.takenSpots[0] = nextSpot
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
      
      // state changers
      this.$store.dispatch("updateBoardState", "unready")
      this.$store.dispatch("updateTourBtnMsg", "Take a tour")
      this.$store.dispatch("updateInstruction", "Place the knight at an initial position and press the I'm ready button")
    }
  }
}
</script>

<style scoped>
chess-board {
  width: 550px;
  margin: auto;
  padding: 3rem 0 0 0;
}

@media only screen and (max-width: 816px) {
  chess-board {
    width: 95%;
    padding: 0;
  }
}
</style>
