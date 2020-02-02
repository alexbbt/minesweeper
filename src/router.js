import Vue from 'vue';
import Router from 'vue-router';
import GamePage from './views/GamePage.vue';
import ShuffledGamePage from './views/ShuffledGamePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: GamePage,
    },
    {
      path: '/shuffled',
      name: 'shuffled-game',
      component: ShuffledGamePage,
    },
  ],
});
