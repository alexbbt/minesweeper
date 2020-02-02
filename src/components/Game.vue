<template>
  <div class="game">
    <p>Mines Left {{mines - flagged}}</p>
    <p>Time played {{time}}</p>
    <table>
      <tr v-for="(row, y) in grid" v-bind:key="y">
        <td v-for="(square, x) in row" v-bind:key="x" @click="() => click(x, y)">
          <square
            :click="(human) => click(x, y, human)"
            :rightClick="() => rightClick(x, y)"
            :numberClick="() => numberClick(x, y)"
            :number="square.number"
            :hasMine="square.hasMine"
            :showMine="square.showMine"
            :hasFlag="square.hasFlag"
            :ref="square.ref"
            :gameState="state"
          />
        </td>
      </tr>
    </table>
    <p>{{message}}</p>
    <div v-if="state !== RUNNING">
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import Square from './Square.vue';
import { shuffle } from '@/utils';

const RUNNING = 'running';
const LOSE = 'lose';
const WIN = 'win';

export default {
  name: 'game',
  components: {
    Square,
  },
  props: {
    x: {
      type: Number,
      default: 8,
    },
    y: {
      type: Number,
      default: 8,
    },
    mines: {
      type: Number,
      default: 9,
    },
  },
  data() {
    return {
      grid: [],
      clicks: 0,
      flagged: 0,
      squaresLeft: 0,
      time: 0,
      message: '',
      state: RUNNING,
      RUNNING,
    };
  },
  mounted() {
    this.generate(this.x, this.y);
    setInterval(() => {
      this.time += 1;
    }, 1000);
  },
  methods: {
    generate(x, y) {
      const squares = [];
      for (let a = 0; a < y; a += 1) {
        this.grid.push([]);
        for (let b = 0; b < x; b += 1) {
          const ref = `${b}:${a}`;
          const square = {
            x: b,
            y: a,
            number: 1,
            hasMine: false,
            showMine: false,
            hasFlag: false,
            ref,
          };
          this.grid[a].push(square);
          squares.push(square);
          this.$nextTick(() => {
            this.getSquare(square).reset();
          });
        }
      }
      shuffle(squares);
      for (let i = 0; i < this.mines; i += 1) {
        squares[i].hasMine = true;
      }
      this.squaresLeft = x * y;
      // To test the first square click
      // this.get(0, 0).hasMine = true;
      this.updateNumbers();
    },
    click(x, y, human) {
      if (!this.state === RUNNING) {
        return;
      }

      if (human === true) {
        this.clicks += 1;
      }
      const square = this.get(x, y);
      // console.log('human', human, 'square.hasMine', square.hasMine, 'this.clicks', this.clicks);

      // If this is the first click of the game, move the mine.
      if (square.hasMine && this.clicks === 1) {
        this.getFirstEmptySquare().hasMine = true;
        square.hasMine = false;
        this.updateNumbers();
        return;
      }

      if (square.hasMine) {
        this.gameLost();
        return;
      }

      if (human === true) {
        this.shuffle();
      }

      this.$nextTick(() => {
        if (square.number === 0) {
          this.clickAround(x, y);
        }
        this.updateState();
      });
    },
    rightClick(x, y) {
      const square = this.get(x, y);
      if (square.hasFlag) {
        square.hasFlag = false;
        this.flagged -= 1;
      } else {
        square.hasFlag = true;
        this.flagged += 1;
      }
    },
    numberClick(x, y) {
      // this.shuffle();

      const currentSquare = this.get(x, y);
      let countFlags = 0;
      this.preformActionOnNeighborSquares(x, y, (square) => {
        if (square.hasFlag) {
          countFlags += 1;
        }
      });
      if (countFlags >= currentSquare.number) {
        this.preformActionOnNeighborSquares(x, y, (square) => {
          if (!square.hasFlag) {
            this.getSquare(square).clickFromParent();
          }
        });
      }
    },
    get(x, y) {
      return this.grid[y][x];
    },
    getSquare(square) {
      return this.$refs[square.ref][0];
    },
    updateNumbers() {
      this.grid.forEach((row, y) => {
        row.forEach((square, x) => {
          if (!square.hasMine) {
            // eslint-disable-next-line no-param-reassign
            square.number = this.getCountForSquare(x, y);
          }
        });
      });
    },
    updateState() {
      let countSquaresUnClicked = 0;
      this.preformActionOnAll((square) => {
        if (this.getSquare(square).state === 'button') {
          countSquaresUnClicked += 1;
        }
      });
      this.squaresLeft = countSquaresUnClicked;
      if (this.squaresLeft === this.mines) {
        this.gameWon();
      }
    },
    getFirstEmptySquare() {
      for (let a = 0; a < this.y; a += 1) {
        this.grid.push([]);
        for (let b = 0; b < this.x; b += 1) {
          const square = this.get(b, a);
          if (!square.hasMine) {
            return square;
          }
        }
      }
      return null;
    },
    preformActionOnAll(action) {
      for (let a = 0; a < this.y; a += 1) {
        for (let b = 0; b < this.x; b += 1) {
          const square = this.get(b, a);
          action(square);
        }
      }
    },
    preformActionOnNeighborSquares(x, y, action) {
      for (let a = y - 1; a <= y + 1; a += 1) {
        if (a < 0 || a >= this.y) {
          // eslint-disable-next-line no-continue
          continue;
        }
        for (let b = x - 1; b <= x + 1; b += 1) {
          if (b < 0 || b >= this.x) {
            // eslint-disable-next-line no-continue
            continue;
          }
          if (a === y && b === x) {
            // eslint-disable-next-line no-continue
            continue;
          }
          // console.log(b, a);
          const square = this.get(b, a);
          action(square);
        }
      }
    },
    getCountForSquare(x, y) {
      let count = 0;
      this.preformActionOnNeighborSquares(x, y, (square) => {
        if (square.hasMine) {
          count += 1;
        }
      });
      return count;
    },
    clickAround(x, y) {
      this.preformActionOnNeighborSquares(x, y, (square) => {
        this.getSquare(square).clickFromParent();
      });
    },
    gameLost() {
      this.message = 'game over';
      this.state = LOSE;
      this.preformActionOnAll((square) => {
        if (square.hasMine) {
          // eslint-disable-next-line no-param-reassign
          square.showMine = true;
        }
      });
    },
    gameWon() {
      this.message = `you won in ${this.time} seconds!`;
      this.state = WIN;
      this.preformActionOnAll((square) => {
        if (square.hasMine) {
          // eslint-disable-next-line no-param-reassign
          square.showMine = true;
        }
      });
    },
    reset() {
      this.clicks = 0;
      this.flagged = 0;
      this.squaresLeft = 0;
      this.message = '';
      this.state = RUNNING;
      this.grid = [];
      this.generate(this.x, this.y);
    },
    shuffle() {
      // no op.
    },
  },
};
</script>

<style lang="scss">
  table {
    border-collapse: collapse;
    margin: 0 auto;

    &, th, td {
      border: 1px solid black;
      padding: 0px;
    }
  }
</style>
