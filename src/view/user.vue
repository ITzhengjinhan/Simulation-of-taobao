<template>
  <div>
    <div class="bg">
      <div class="filter">
        <!--3.添加点击事件-->
        <van-image
          @click="preview"
          round
          width="100"
          height="100"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570790189462&di=1e48866db80cda977a69b2daedcab29c&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F26%2F13%2F16pic_2613263_b.jpg"
        />
        <div>Han</div>
        <div>
          <span style="padding-right:100px">淘宝ID</span>
          <span>淘气值</span>
        </div>
      </div>
    </div>
    <div style="border-bottom:1px solid #eee">
      <van-grid :column-num="5">
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="send-gift-o" text="待发货" />
        <!--Vant和Icon的应用：
        通过font-size改变图标的大小-->
        <van-grid-item>
          <i style="font-size:30px;margin-top:-5px" class="iconfont icon-daishouhuo1"></i>
          <div class="style1">待收货</div>
        </van-grid-item>

        <van-grid-item>
          <i style="font-size:35px;margin-top:-5px" class="iconfont icon-pingjia"></i>
          <div class="style">评价</div>
        </van-grid-item>

        <van-grid-item icon="after-sale" text="退款" />
      </van-grid>
    </div>

    <van-cell title="我的订单" icon="completed" is-link />
    <van-cell title="我的会员" icon="diamond-o" is-link />
    <van-cell title="密码安全" icon="location-o" is-link />
    <van-cell title="我的钱包" icon="cash-on-deliver" is-link />
    <van-cell title="通用设置" icon="location-o" setting-o />
  </div>
</template>

<script>
//图片预览
//1.导入函数
import Vue from "vue";
import { ImagePreview } from "vant";
Vue.use(ImagePreview);
export default {
  data() {
    return {};
  },
  //2.在函数中定义数组：ImagePreview([图片的链接]);
  methods: {
    preview() {
      ImagePreview([
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570790189462&di=1e48866db80cda977a69b2daedcab29c&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F26%2F13%2F16pic_2613263_b.jpg"
      ]);
    }
  }
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 200px;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570790189462&di=1e48866db80cda977a69b2daedcab29c&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F26%2F13%2F16pic_2613263_b.jpg)
    center;
}
.filter {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px 0px;

  display: flex;

  flex-direction: column;
  align-items: center;
}
@import url("//at.alicdn.com/t/font_1453041_o98emd9qsl.css");
.style {
  color: #7d7e80;
  font-size: 12px;
  word-wrap: break-word;
}
.style1 {
  color: #7d7e80;
  font-size: 12px;
  word-wrap: break-word;
  margin-top: 5px;
}
</style>