<template>
  <div>
    <!--@click-left="$router.go(-1)：点击后返回上一级-->
    <van-nav-bar title="动态" left-text="返回" left-arrow  @click-left="$router.go(-1)">
      <i slot="right" class="iconfont icon-ellipsis2"></i>
    </van-nav-bar>
    
    <van-notice-bar text="通知内容，2019年10月8日，中国不再参与和NBA相关的一切活动" left-icon="volume-o" />
    <!--
  van-dropdown-menu是下拉框；
  van-dropdown-item类似地区选择，需在items中配置数据
    -->
    <van-dropdown-menu active-color="#ee0a24">
      <!--添加一个点击的事件，和ref的标志-->
      <van-dropdown-item :title="citytitle" ref="citydrop">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="onclickitem"
        />
      </van-dropdown-item>
      <!--再添加一个下拉框-->
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-grid :border="true" :gutter=5 :column-num="2">
      <van-grid-item >
        <div>
          <!--4.通过位置i获取当前点击的位置图片-->
        <img @click="preview(i)"
        v-for="(image,i) in imagelist"
        :key="i"
        style="margin:10px 0;width:32%;height:100px; padding:1px"
        :src="image"/>
        </div>
        <div>图片描述</div>
        <div>
          <span style="margin-right:90px">头像</span>
          <span>点赞数</span>
        </div>
      </van-grid-item>
      <!--若是在click中则用$preview，其中@click.stop.prevent是为了防止其点击图片后跳转了，-->
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" @click.stop.prevent="$preview(['https://img.yzcdn.cn/vant/apple-2.jpg'])"/>
        <div>图片描述</div>
        <div>
          <span style="margin-right:90px">头像</span>
          <span>点赞数</span>
        </div>
      </van-grid-item>

      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" @click.stop.prevent="$preview(['https://img.yzcdn.cn/vant/apple-3.jpg'])" />
        <div>图片描述</div>
        <div>
          <span style="margin-right:90px">头像</span>
          <span>点赞数</span>
        </div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-4.jpg" @click.stop.prevent="$preview(['https://img.yzcdn.cn/vant/apple-4.jpg'])"/>
        <div>图片描述</div>
        <div>
          <span style="margin-right:90px">头像</span>
          <span>点赞数</span>
        </div>
      </van-grid-item>

      <van-grid-item>
        <div></div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
//图片预览
//1.导入函数
/*import Vue from 'vue';
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);*/
export default {
  data() {
    return {
      list: [],
      isLoading: false,
      loading: false,
      finished: false,
      citytitle: "全部城市",
      items: [
        {
          // 导航名称
          text: "热门城市",
          // 导航名称右上角徽标
          info: 3,
          // 是否在导航名称右上角显示小红点
          dot: true,
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识符
              id: 1
            },
            {
              text: "杭州",
              id: 2
            }
          ]
        },
        {
          // 导航名称
          text: "福建",

          children: [
            {
              // 名称
              text: "福州",
              // id，作为匹配选中状态的标识符
              id: 1
              // 禁用选项
            },
            {
              text: "厦门",
              id: 2
            },
            {
              text: "莆田",
              id: 3
            }
          ]
        },
        {
          // 导航名称
          text: "广东",
          // 导航名称右上角徽标
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "深圳",
              // id，作为匹配选中状态的标识符
              id: 1
              // 禁用选项
            },
            {
              text: "广州",
              id: 2
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0,
      //data中绑定数据
      value2: "a",
      option2: [
        { text: "默认排序", value: "a" },
        { text: "热门排序", value: "b" },
        { text: "最新排序", value: "c" }
      ],
      //3.将图片链接放入数组中
      imagelist:["//gw.alicdn.com/imgextra/i3/3270153717/O1CN01Q8Kg1x1dKQiXHhJWS_!!3270153717-0-daren.jpg_790x10000Q75.jpg","//gw.alicdn.com/imgextra/i3/3270153717/O1CN018v05AJ1dKQiVQhtKQ_!!3270153717-0-daren.jpg_790x10000Q75.jpg","//gw.alicdn.com/imgextra/i1/3270153717/O1CN01lYYydw1dKQiUhbfjr_!!3270153717-0-daren.jpg_580x10000Q75.jpg"]
    };
  },
  methods: {
    onclickitem(data) {
      this.citytitle = data.text; //点击后更改citytitle为所点击的字样
      this.$refs.citydrop.toggle(false); //点击后关闭选框
    },
    //2.在函数中定义数组：ImagePreview({startPosition：记录点击的位置，images数据放入数组中});
    /*preview(i) {
      ImagePreview({
        startPosition:i,
        images:this.imagelist
      });
    },*/
    //若是在方法里面，通过this.$preview设置
      preview(i) {
      this.$preview({
        startPosition:i,
        images:this.imagelist
      });
    },
  }
};
</script>
<style scoped>
@import url("//at.alicdn.com/t/font_1453041_uydlftfebn.css");
</style>