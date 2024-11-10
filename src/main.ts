import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
// import './style.css'
import App from './App.vue'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import ButtonGroup from 'primevue/ButtonGroup'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ToggleButton from 'primevue/togglebutton';

// import "primevue/resources/themes/aura-dark-green/theme.css"
import 'primeicons/primeicons.css'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue)
app.use(ToastService)
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Calendar', Calendar)
app.component('Button', Button)
app.component('ButtonGroup', ButtonGroup)
app.component('Toast', Toast)
app.component('ToggleButton', ToggleButton)
app.mount('#app')
