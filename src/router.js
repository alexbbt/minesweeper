import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import GamePage from './views/GamePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage,
    },
  ],
});
