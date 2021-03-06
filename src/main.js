import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import Common from '@/plugins/common.js';
import 'element-plus/lib/theme-chalk/index.css';
import App from '@/App.vue';

const app = createApp(App);

app.use(Common);
app.use(ElementPlus);

app.mount('#app');
