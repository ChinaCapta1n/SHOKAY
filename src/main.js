import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes';
import { store } from './stores/store';

// scss
import './assets/scss/base.scss';
import './assets/scss/global.scss';


createApp(App).use(router).use(store).mount('#app');
