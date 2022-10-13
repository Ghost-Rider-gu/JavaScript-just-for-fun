import {createRouter, createWebHistory} from 'vue-router';

import NotFoundComponent from './components/NotFound.vue';
import StatisticsComponent from './components/Statistics.vue';
import AboutComponent from './components/About.vue';
import LoginFormComponent from './components/LoginForm.vue';
import RegisterFormComponent from './components/RegisterForm.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: null },
        { path: '/search/:searchTerm', component: null },
        { path: '/refresh', component: null },
        { path: '/statistics', component: StatisticsComponent },
        { path: '/about',  component: AboutComponent },
        { path: '/register', component: RegisterFormComponent },
        { path: '/login', component: LoginFormComponent },
        { path: '/logout', redirect: '/' },
        { path: '/:notFound(.*)',  component: NotFoundComponent }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    }
});

export default router;
