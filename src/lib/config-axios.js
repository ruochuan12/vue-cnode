/**
  @name: '路由配置'
  @author: '轩辕Rowboat'
  @time: '2017-07-05'
*/
import Axios from 'axios';
export default {
    init (_axios) {
        // _axios.defaults.baseURL = 'https://api.example.com';
        // _axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
        // _axios.defaults.headers.common['id'] = 3;
        // _axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        // _axios.defaults.withCredentials = true;
        // 添加一个请求拦截器
        _axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            // console.log('请求拦截器');
            // if (store.getters.token) {
            //     config.headers['token'] = store.getters.token; // 让每个请求携带token为自定义key 请根据实际情况自行修改
            // }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // 添加一个响应拦截器
        _axios.interceptors.response.use(function (res) {
            return res;
        }, function (error) {
            // Do something with res error
            console.log(error);
            window.$message({
                type: 'error',
                message: error.error || '服务器异常，请稍后重试！'
            });
            return Promise.reject(error);
        });
    }
};
