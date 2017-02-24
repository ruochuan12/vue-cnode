<template>
  <div id="app">
    <h2>vue init</h2>
    <h3>vue-cnode</h3>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: #eee;
  h2{
    // 这里的注释看不到
    /* 这里的注释可以看到 */
    font-size: 24px;
    font-weight: normal;
  }
}
</style>
