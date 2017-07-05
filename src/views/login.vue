<!--
 @name: '后台登录'
 @author: '轩辕Rowboat'
 @time: '2017-02-28'
 -->
<template>
    <section class="wrap-login">
        <!-- login-header begin -->
        <section class="login-header">
            <div class="mod-logo fn-left">
                <img src="/static/images/common/logo.png" alt="">
            </div>
            <ul class="mod-handle fn-right fn-clear fn-hide">
                <li><el-button type="text" class="link link-login" @click="statusChange('LOGIN', 'LOGIN')">登录</el-button></li>
                <li><el-button type="text" class="link link-register" @click="statusChange('REGISTER', 'GETCODE')">注册</el-button></li>
            </ul>
        </section>
        <section class="login-container">
          <h2>这里是login页面</h2>
          <p class="title">用户名</p>
          <p class="title">密码</p>
        </section>
        <!-- login-footer begin -->
        <section class="login-footer">
          <p>版权所有&nbsp;&nbsp;前端视野**有限公司&nbsp;&nbsp;2015-{{new Date().getFullYear()}}&nbsp;&nbsp;轩辕Rowboat&nbsp;&nbsp;备案</p>
        </section>
    </section>
</template>
<script type="text/babel">
export default {
    name: 'login',
    data () {
        return {};
    }
};
</script>
