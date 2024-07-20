import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Mathematik from '../pages/Mathematik.vue';
import Informatik from '../pages/Informatik.vue';
import Error from '../pages/Error.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/mathematik', component: Mathematik },
  { path: '/informatik', component: Informatik },
  { path: '/:pathMatch(.*)*', component: Error }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
