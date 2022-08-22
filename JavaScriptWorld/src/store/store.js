import { createStore } from 'vuex';
import users from './users/index.js';
import articles from './articles/index.js';
import auth from './auth/index.js';

const store = createStore({
    modules: {
        users,
        articles,
        auth
    }
})

export default store;
