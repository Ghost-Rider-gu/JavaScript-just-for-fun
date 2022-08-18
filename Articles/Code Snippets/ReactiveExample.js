// By default JavaScript isn't reactive.
// In this simple example, we can show how you can achieve that.
const data = {
    reactiveMessage: 'This is reactive'
};
const handler = {
    set(target, key, value) {
        console.log(target);
        console.log(key);
        console.log(value);
    }
};

const proxy = new Proxy(data, handler);
proxy.reactiveMessage = 'It was changed. Go reactive';
