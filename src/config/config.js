/**
    @name: '系统相关参数配置'
    @author: '轩辕Rowboat'
    @time: '2017.02.28'
 */
const domainConfig = {
    'lxchuan12.github.io': {
        url: 'http://lxchuan12.github.io/api'
    },
    'lxchuan12.test.github.io/api': {
        url: 'http://lxchuan12.test.github.io/api'
    }
}[window.location.host.toLowerCase()] || {
    url: 'http://localhost:2322'
};
export default {
    // 商品列表
    goods: {
        list: `${domainConfig.url}/api/goods`
    }
};
