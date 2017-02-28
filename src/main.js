// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import routeConfig from 'URL_config/router';
// Vue.prototype.$http = Axios;

// 引入样式
import 'URL_style/all.less';

import polyfill from 'URL_lib/polyfill';
import resource from 'URL_lib/resource';     // resource-自定义配置
// 引入Router
Vue.use(VueRouter);
resource.init(Vue);

// 加载中间件
// polyfill
polyfill.init();

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
