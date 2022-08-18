import { createStore } from 'vuex';
import users from './users/index.js';
import articles from './articles/index.js';

const store = createStore({
    modules: {
        users,
        articles
    }
})

export default store;
