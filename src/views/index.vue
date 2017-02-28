<!--
 @name: '后台首页'
 @author: '轩辕Rowboat'
 @time: '2017.02.28'
 -->
<template>
  <wrap-layout comp-class="wrap-index">
    <main slot="main">
      <p class="title">这里是index页面</p>
    </main>
  </wrap-layout>
</template>
<script type="text/babel">
  import serviceTest from 'URL_service/test';
  export default {
      name: 'login',
      components: {
          wrapLayout: require('URL_components/common/layout')
      },
      data () {
          return {};
      },
      created () {
          serviceTest.list().then((response) => {
              // response = response.body;
              console.log(response, response.isError);
              console.log(response.data);
              // if (response.errorCode === 0) {
              //     console.log(response.body);
              // }
          });
      }
  };
</script>
