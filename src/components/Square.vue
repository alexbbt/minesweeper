<template>
  <div class="square">
    <div v-if="state === 'button'">
      <button @click="handleClick"></button>
    </div>
    <div v-if="state === 'number'">
      <p v-if="number > 0">{{number}}</p>
    </div>
    <div v-if="state === 'mine'">
      <p>m</p>
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
    number: {
      type: Number,
      default: 0,
    },
    hasMine: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: 'button',
    };
  },
  mounted() {
  },
  methods: {
    handleClick() {
      if (this.hasMine) {
        this.state = 'mine';
      } else {
        this.state = 'number';
        this.click();
      }
    },
  },
  clickFromParent() {
    this.handleClick();
  },
};
</script>

<style lang="scss">
  .square {
    &, button {
      width: 25px;
      height: 25px;
    }

    button {
      color: grey;
      cursor: pointer;
    }
  }
</style>
