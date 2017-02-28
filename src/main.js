import Vue from 'vue';
// ElementUI 公共库引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
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
Vue.use(ElementUI);

// 加载中间件
// polyfill
polyfill.init();
resource.init(Vue);

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
    el: '#app',
    render: h => h(App)
}).$mount('#app');

// ElementUI相关
window.$alert = app.$alert;
window.$message = app.$message;
window.$confirm = app.$confirm;
// 路由相关
window.router = app.$router;
