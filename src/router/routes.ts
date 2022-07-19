import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/Marketing.vue'),
      },
      {
        path: 'finance/',
        name: 'finance',
        component: () => import('src/pages/Finance.vue'),
      },
      {
        path: 'personnel/',
        name: 'personnel',
        component: () => import('src/pages/Personnel.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
