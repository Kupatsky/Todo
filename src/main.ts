import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from '@app/App.vue'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import ButtonGroup from 'primevue/ButtonGroup'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice';
import ToggleButton from 'primevue/togglebutton';
import DynamicDialog from 'primevue/dynamicdialog';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';

// import "primevue/resources/  themes/aura-dark-green/theme.css"
import 'primeicons/primeicons.css'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue)
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService);
app.component('Checkbox', Checkbox)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Calendar', Calendar)
app.component('Button', Button)
app.component('ButtonGroup', ButtonGroup)
app.component('Toast', Toast)
app.component('ToggleButton', ToggleButton)
app.component('DynamicDialog', DynamicDialog)
app.component('Dialog', Dialog)
app.component('ConfirmDialog', ConfirmDialog)
app.mount('#app')
