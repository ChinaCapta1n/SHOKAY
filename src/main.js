import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes';
import './assets/scss/font.scss';

createApp(App).use(router).mount('#app');
