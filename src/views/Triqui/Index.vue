<template>
  <b-container>
    <h2 class="text-center font-app">Cuatro en raya</h2>
    <hr>
    <div class="mt-5"></div>
    <div class="d-flex justify-content-center">
      <Box v-for="(item) in row1"
           :turn="turn"
           @save="save"
           :value="squares[item]"
           :position="item"
      />
    </div>
    <div class="d-flex justify-content-center">
      <Box v-for="(item) in row2"
           :turn="turn"
           @save="save"
           :value="squares[item]"
           :position="item"
      />
    </div>
    <div class="d-flex justify-content-center">
      <Box v-for="(item) in row3"
           :turn="turn"
           @save="save"
           :value="squares[item]"
           :position="item"
      />
    </div>
    <div class="d-flex justify-content-center">
      <Box v-for="(item) in row4"
           :turn="turn"
           @save="save"
           :value="squares[item]"
           :position="item"
      />
    </div>
  </b-container>
</template>

<script>
import Box from './Box'

export default {
  name: "Triqui",
  components: {Box},
  data() {
    return {
      squares: Array(16).fill(null),
      turn: 'x',
      row1: [0, 1, 2, 3],
      row2: [4, 5, 6, 7],
      row3: [8, 9, 10, 11],
      row4: [12, 13, 14, 15]
    }
  },
  methods: {
    save(position) {
      let newSquares = [...this.squares];
      newSquares.splice(position, 1, this.turn);
      this.setSquares(newSquares);
      this.checkForWinner(newSquares);
    },
    setSquares(squares) {
      this.squares = squares;
    },
    checkForWinner(newSquares) {
      for (let i = 0; i < this.winnyPositions.length; i++) {
        const [a, b, c, d] = this.winnyPositions[i];
        if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c] && newSquares[a] === newSquares[d]) {
          if (this.turn == 'x') {
            this.$toast.success(`El Jugador 1 ha ganado`, {position: 'top-right'})
          } else {
            this.$toast.error(`El Jugador 2 ha ganado`, {position: 'top-right'})
          }
          this.resetValues();
        }
        if (!newSquares.includes(null)) {
          this.$toast.warning(`Hay empate`, {position: 'top-right'})
          this.resetValues();
          return;

        }
      }
      this.setTurn();
    },
    setTurn() {
      if (this.turn === 'x') {
        this.turn = 'o'
      } else if (this.turn === 'o') {
        this.turn = 'x'
      }
    },
    resetValues() {
      setTimeout(() => {
        this.squares = Array(16).fill(null);
        this.turn = 'x';
        return;
      }, 2000)

    }
  },
  computed: {
    winnyPositions() {
      return [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
      ];
    }
  },
}
</script>
<style scoped>
.font-app {
  font-family: 'Kdam Thmor Pro', sans-serif;
}
</style>
