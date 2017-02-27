// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routeConfig from 'URL_config/router';

// 引入样式
import 'URL_style/all.less';
import 'URL_style/common/reset.less';
// 引入Router
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routeConfig
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
