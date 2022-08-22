export default {
    login() {},
    async signup(context, payload) {
        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        
    }
}
