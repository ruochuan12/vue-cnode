import Vue from 'vue';
// ElementUI 公共库引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import VueRouter from 'vue-router';

import routeConfig from 'URL_config/router';

// 引入样式
import 'URL_style/all.less';
import polyfill from 'URL_lib/polyfill';
// 引入Router
Vue.use(VueRouter);
Vue.use(ElementUI);

// 加载中间件
// polyfill
polyfill.init();
// axios配置
import Axios from 'axios';
import configAxios from 'URL_lib/config-axios';     // axios-自定义配置
configAxios.init(Axios);
// Vue实例上使用，this.$http
Vue.prototype.$http = Axios;

const router = new VueRouter({
    routes: routeConfig
});

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: { App }
// });
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

// ElementUI相关
window.$alert = app.$alert;
window.$message = app.$message;
window.$confirm = app.$confirm;
// 路由相关
window.router = app.$router;
