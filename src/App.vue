<!--  1.模板:html结构 -->
<template>

  <div>
    <router-view></router-view>
    <van-tabbar v-model="active1">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="hot-o" to="/hot">热门</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<!-- 2.行为:处理逻辑-->
<script>
export default {
  data() {
    return {
    active1:4
    };
  },

};
</script>
<!--3.样式：解决样式-->
<!--scoped可以用以区分不同vue之间相同标签之间的区别-->
<style scoped>

</style>
