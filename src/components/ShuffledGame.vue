<script>
import Game from './Game.vue';

import { shuffle, clone } from '@/utils';

export default {
  name: 'shuffled-game',
  extends: Game,
  methods: {
    shuffle() {
      const squares = [];
      this.preformActionOnAll((square) => {
        if (this.getSquare(square).isUnClicked) {
          squares.push(square);
        }
      });
      const shuffledSquares = shuffle(clone(squares));
      shuffledSquares.forEach((square, index) => {
        const oldSquare = squares[index];
        oldSquare.hasMine = square.hasMine;
        oldSquare.showMine = square.showMine;
        oldSquare.hasFlag = square.hasFlag;
        /* eslint-disable no-param-reassign */
        square.x = oldSquare.x;
        square.y = oldSquare.y;
        /* eslint-enable no-param-reassign */
      });
      this.$nextTick(() => {
        this.updateNumbers();
      });
    },
  },
};
</script>
