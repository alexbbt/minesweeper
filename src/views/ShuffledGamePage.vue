<template>
  <div class="about">
    <h1>Shuffled Minesweeper</h1>
    <shuffled-game />
    <p>This verison of the game will shuffle the mines every time you open a square.
      <br>
      The numbers will allways represent the current state.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import ShuffledGame from '@/components/ShuffledGame.vue';

export default {
  name: 'home',
  components: {
    ShuffledGame,
  },
};
</script>
