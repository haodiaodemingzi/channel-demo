import Vue from 'vue'
import App from './App.vue'
import "reflect-metadata";
import "./registerServiceWorker";
import { load } from "./lib/loader";

import Counter from "./modules/Counter/index";



Vue.config.productionTip = false
const {
    portal,
    app,
} = load({
    modules: {
        Counter,
    },
    main: App
});
Vue.prototype.portal = portal;
new App().$mount()
