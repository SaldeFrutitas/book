import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SkyView from '../views/SkyView.vue';
import firewebView from '../views/firewebView.vue';
import careView from '../views/careView.vue';
import luView from '../views/luView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showNavbar: false },
  },
  {
    path: '/skyview',
    name: 'sky',
    component: SkyView,
    meta: { showNavbar: true },
  },
  {
    path: '/firewebview',
    name: 'fireweb',
    component: firewebView,
    meta: { showNavbar: true },
  },
  {
    path: '/careview',
    name: 'care',
    component: careView,
    meta: { showNavbar: true },
  },
  {
    path: '/luview',
    name: 'lu',
    component: luView,
    meta: { showNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
