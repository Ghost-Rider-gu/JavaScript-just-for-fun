import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import store from './store/store.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
