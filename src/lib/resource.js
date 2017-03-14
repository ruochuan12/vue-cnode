import VueResource from 'vue-resource';
export default {
    init (_vue) {
        _vue.use(VueResource);
        // _vue.prototype.$http = Axios;
        // 是否采用JSON格式提交
        _vue.http.options.emulateJSON = false;
        // 跨站访问的时候，是否使用认证信息(例如cookie或授权的header)
        _vue.http.options.xhr = {withCredentials: true};
        _vue.http.options.credentials = true;
        _vue.http.interceptors.push((request, next) => {
            next((response) => {
                response.isError = false;
                let body = response.data;
                if (typeof body === 'string') {
                    body = JSON.parse(body);
                    response.data = body;
                }

                /* response状态判断 */
                if ([401].indexOf(body.errorCode) > -1) {
                    response.isError = true;
                    window.router.push({name: 'login'});
                    return;
                }
                if ([200].indexOf(body.errorCode) === -1) {
                    response.isError = true;
                    window.$message.error(body.moreInfo || '服务器异常，请稍后重试！');
                }
            });
        });
    }
};
