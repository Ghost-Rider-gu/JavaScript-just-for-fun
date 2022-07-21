import { createApp } from "vue";
import { createStore } from "vuex";
import { ref } from '@vue/reactivity';
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import articlesData from './assets/articlesData.json';

const app = createApp(App);
const store = createStore({
    state() {
        return {
            articles: ref(articlesData)
        }
    }
})

app.use(store);
app.mount("#app");
