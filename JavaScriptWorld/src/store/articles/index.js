import { ref } from '@vue/reactivity';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import articlesData from '../../assets/articlesData.json';

export default {
    namespaced: true,
    state() {
        return {
            articles: ref(articlesData)
        }
    },
    mutations,
    actions,
    getters
}
