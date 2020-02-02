<template>
  <div class="about">
    <h1>This is the Shuffled Game Page</h1>
    <shuffled-game />
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
