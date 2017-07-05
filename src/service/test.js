/**
    @name: '测试配置'
    @author: '轩辕Rowboat'
    @time: '2017-02-28'
 */
import Axios from 'axios';
import config from 'URL_config/config';
export default {
    list () {
        return Axios({
            method: 'get',
            url: config.goods.list
        });
    }
};
