<template>
  <div class="game">
    <table>
      <tr v-for="(row, y) in grid" v-bind:key="y">
        <td v-for="(square, x) in row" v-bind:key="x" @click="() => click(x, y)">
          <square
            :click="() => click(x, y)"
            :number="square.number"
            :hasMine="square.hasMine"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Square from './Square.vue';
import { shuffle } from '@/utils';

export default {
  name: 'game',
  components: {
    Square,
  },
  props: {
    x: {
      type: Number,
      default: 5,
    },
    y: {
      type: Number,
      default: 4,
    },
    mines: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      grid: [],
    };
  },
  mounted() {
    this.generate(this.x, this.y);
  },
  methods: {
    generate(x, y) {
      const squares = [];
      for (let a = 0; a < y; a += 1) {
        this.grid.push([]);
        for (let b = 0; b < x; b += 1) {
          const square = {
            x: b,
            y: a,
            number: 1,
            hasMine: false,
          };
          this.grid[a].push(square);
          squares.push(square);
        }
      }
      shuffle(squares);
      for (let i = 0; i < this.mines; i += 1) {
        squares[i].hasMine = true;
      }
      this.updateNumbers();
    },
    click(x, y) {
      this.getCountForSquare(x, y);
    },
    get(x, y) {
      return this.grid[y][x];
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
    getCountForSquare(x, y) {
      console.log('');
      console.json('counting', this.get(x, y));
      let count = 0;
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
          // console.json(this.get(b, a));
          if (this.get(b, a).hasMine) {
            count += 1;
          }
        }
      }
      return count;
    },
  },
};
</script>

<style lang="scss">
  table {
    border-collapse: collapse;

    &, th, td {
      border: 1px solid black;
      padding: 0px;
      margin: 0px;
    }
  }
</style>
