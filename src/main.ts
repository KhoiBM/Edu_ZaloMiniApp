import { createApp } from 'vue';
// const { createApp } = Vue;
import App from './App.vue'
import './assets/tailwind.css'
import './assets/scss/main.scss'
// import 'zmp-ui/zaui.css'
import 'vant/lib/index.css';
import pinia from '@/stores'
import router from '@/router'
import Vant, { allowMultipleToast } from 'vant';
import { Locale } from 'vant';
import viVN from 'vant/es/locale/lang/vi-VN';
import { useCurrentLang } from 'vant';
import { ConfigProvider } from 'vant';

Locale.use('vi-VN', viVN);

// const currentLang = useCurrentLang();

// console.log(currentLang.value);


allowMultipleToast();

const app = createApp(App)

app
    .use(ConfigProvider)
    .use(Vant)
    .use(pinia)
    .use(router);

(async () => {
    await router.isReady()
})();

app.mount('#app')

