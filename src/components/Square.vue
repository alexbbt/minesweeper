<template>
  <div class="square">
    <div v-if="state === 'button'">
      <button
        ref="button"
        @click.stop="handleClick()"
        @contextmenu.stop="handleRightClick($event)"
      >
        <span v-if='hasFlag'>F</span>
        <span v-if='showMine'>M</span>
      </button>
    </div>
    <div
      v-if="state === 'number'"
    >
      <div
        v-if="!hasMine && number > 0"
        :class="`number num-${number}`"
        @click.stop="handleNumberClick"
      >
        <p>{{number}}</p>
      </div>
      <div v-if="hasMine">
        <p>M</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'square',
  components: {
  },
  props: {
    click: {
      type: Function,
      default: () => {},
    },
    rightClick: {
      type: Function,
      default: () => {},
    },
    numberClick: {
      type: Function,
      default: () => {},
    },
    number: {
      type: Number,
      default: 0,
    },
    hasMine: {
      type: Boolean,
      default: false,
    },
    showMine: {
      type: Boolean,
      default: false,
    },
    hasFlag: {
      type: Boolean,
      default: false,
    },
    gameState: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      state: 'button',
    };
  },
  computed: {
    isUnClicked() {
      return this.state === 'button';
    },
  },
  mounted() {
    this.reset();
  },
  methods: {
    handleClick(human = true) {
      this.$refs.button.blur();
      if (this.gameState === 'running') {
        this.state = 'number';
        this.click(human);
      }
    },
    handleRightClick(event) {
      this.$refs.button.blur();
      event.preventDefault();
      if (this.state === 'button' && this.gameState === 'running') {
        this.rightClick();
      }
    },
    handleNumberClick() {
      this.numberClick();
    },
    clickFromParent() {
      if (this.state === 'button') {
        this.handleClick(false);
      }
    },
    reset() {
      this.state = 'button';
    },
  },
};
</script>

<style lang="scss">
  .square {
    &, button {
      width: 40px;
      height: 40px;
    }

    p {
      margin: 0;
      line-height: 40px;
    }

    button {
      color: black;
      cursor: pointer;
      padding: 0px;
      background-color: lightgrey;
      border: 2px darkgrey solid;

      span {
        font-weight: bold;
      }
    }

    .number {
      cursor: pointer;
      font-weight: bold;

      &.num-0 {
        cursor: default;
      }
      &.num-1 {
        color: blue;
      }
      &.num-2 {
        color: green;
      }
      &.num-3 {
        color: red;
      }
      &.num-4 {
        color: purple;
      }
      &.num-5 {
        color: maroon;
      }
      &.num-6 {
        color: turquoise;
      }
      &.num-7 {
        color: black;
      }
      &.num-8 {
        color: gray;
      }
    }
  }
</style>
