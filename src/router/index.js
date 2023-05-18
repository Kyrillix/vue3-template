import { createRouter, createWebHistory } from 'vue-router'

// routes

import HomeView from '../views/pages/home/home.vue';

import NotFoundView from '../views/pages/notFound/notFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomeView,
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFoundView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
