import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import router from '@/router'
import store from '@/store/workflow'
import App from './App.vue'
import iView from 'iview'

Vue.use(iView)
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#workflow',
        store,
        router,
        render: h => h(App)
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export function mount(props) {
    createDomElement();
    return vueLifecycles.mount(props);
}

export const unmount = [
    vueLifecycles.unmount,
];

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('workflow');

    if (!el) {
        el = document.createElement('div');
        el.id = 'workflow';
        document.body.appendChild(el);
    }
    return el;
}
