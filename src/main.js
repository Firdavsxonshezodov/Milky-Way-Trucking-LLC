import { createApp } from 'vue'
import router from './router/router.js'
import App from './App.vue'
import PrimeVue from 'primeVue/config'
import AOS from 'aos'
import 'aos/dist/aos.css'
 
 

 const app = createApp(App);

app.use(router);
app.use(AOS);
app.use(PrimeVue);
app.mount('#app');
