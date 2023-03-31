import { createApp } from 'vue'

// IMPORTIAMO IL MAIN.SCSS ! 
import './assets/scss/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFUll } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faStar, faStarFUll, faSearch, faAngleDown)

import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
