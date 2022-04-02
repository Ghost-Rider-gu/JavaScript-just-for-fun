import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: null },
        { path: '/search/:searchTerm', component: null },
        { path: '/statistics', component: null },
        { path: '/refresh', component: null },
        { path: '/about',  component: null },
        { path: '/:notFound(.*)',  component: null }
    ]
});

export default router;
