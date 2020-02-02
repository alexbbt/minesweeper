<template>
  <div class="about">
    <h1>Standard Minesweeper</h1>
    <game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue';

export default {
  name: 'home',
  components: {
    Game,
  },
};
</script>
