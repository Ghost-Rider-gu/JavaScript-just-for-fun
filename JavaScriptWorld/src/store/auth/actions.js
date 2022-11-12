import axios from 'axios';

export default {
    login() {},
    signup(context, payload) {
        axios.post('/users.json', {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        }).then(response => {
            context.commit('setUser', {
                token: response.idToken,
                userId: response.localId,
                tokenExpiration: response.expiresIn
            });
        })
        .catch(error => {
            throw new Error(error || 'Couldn\'t create a user with such credentials');
        })
    }
}
