<!--
    @name: '首页'
    @author: '轩辕Rowboat'
    @time: '2017-02-28'
-->
<template>
    <!-- wrap-layout begin -->
    <section class="wrap-layout" v-cloak>
        <!-- wrap-aside begin -->
        <!-- <my-aside-menu></my-aside-menu> -->
        <!-- wrap-layout-main -->
        <section class="wrap-layout-main">
            <section class="wrap-layout-header fn-clear">
                <img class="shop-img" :src="dataUsers.shopImgUrl" alt="">
                <span class="shop-name">商户名{{dataUsers.shopName}}</span>
                <el-button type="text" class="btn-quit" @click="loginOut">退出</el-button>
                <span class="shop-name">联系客服（400-104-5888）</span>
            </section>
            <section class="wrap-layout-container">
                <section :class="['wrap-slot', compClass]">
                    <slot name="header"></slot>
                    <slot name="main"></slot>
                    <slot name="footer"></slot>
                    <slot name="dialog"></slot>
                </section>
            </section>
            <section class="wrap-layout-footer">
                <p>版权所有&nbsp;&nbsp;前端视野**有限公司&nbsp;&nbsp;2015-{{new Date().getFullYear()}}&nbsp;&nbsp;轩辕Rowboat&nbsp;&nbsp;备案</p>
            </section>
        </section>
    </section>
</template>
<script type="text/babel">
export default {
    name: 'comp-layout',
    props: {
        compClass: String
    },
    data () {
        return {
            dataUsers: {}
        };
    },
    methods: {
        loginOut () {
            console.log('退出');
            window.$message.info('退出');
        }
    }
};
</script>
<style lang="less">
</style>
