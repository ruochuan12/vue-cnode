/**
  @name: '路由配置'
  @author: '轩辕Rowboat'
  @time: '2017-02-24'
*/
// import Vue from 'vue';
// import Router from 'vue-router';
// import Hello from 'URL_components/Hello';

// Vue.use(Router);

export default [
    // {
    //     path: '/',
    //     name: 'Hello',
    //     component: (resolve) => {
    //         require(['URL_components/Hello.vue'], resolve);
    //     }
    // },
    {   // 登录
        path: '/login',
        name: 'login',
        component: (resolve) => {
            require(['URL_views/login.vue'], resolve);
        },
        meta: {
            title: '登录'
        }
    }, {   // 首页
        path: '/',
        name: 'index',
        component: (resolve) => {
            require(['URL_views/index.vue'], resolve);
        },
        meta: {
            title: '首页'
        }
    }
];
