import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            user: {
                id: 1,
                firstName: 'David',
                lastName: 'Edvards',
                email: 'david.edvards@gmail.com',
                avatar: 'pict.jpg',
                articles: {
                    favorite: [
                        'Bubble Sort',
                        'Sigleton Pattern'
                    ],
                    read: [
                        'Microfrontend patterns',
                        'Pokemon Cards simple app'
                    ]
                },
                statistics: {
                    all: 204,
                    favorite: 2,
                    read: 2,
                    unread: 200
                }
            }
        }
    },
    mutations,
    actions,
    getters
}
