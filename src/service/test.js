/**
    @name: '测试配置'
    @author: '轩辕Rowboat'
    @time: '2017.02.28'
 */
import Vue from 'vue';
import config from 'URL_config/config';
export default {
    list () {
        return Vue.http.get(config.goods.list);
    }
};
