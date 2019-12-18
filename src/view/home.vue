<template>
  <div class="wrapper">
       <van-search placeholder="请输入搜索关键词" />
    
    <!--Swipe 轮播-->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <!--Image 图片-->
        <van-image
          width="100%"
          height="200"
          src="https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="200"
          src="//gw.alicdn.com/imgextra/i1/151/O1CN01b8ySLt1CzCMqOHO8K_!!151-0-lubanu.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="200"
          src="//gw.alicdn.com/imgextra/i3/125/O1CN01cyQBHk1CnI4Tl32cV_!!125-0-lubanu.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="200"
          src="//gw.alicdn.com/imgextra/i2/39/O1CN016WowGZ1C9u0ba0Urn_!!39-0-lubanu.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="200"
          src="//gw.alicdn.com/imgextra/i1/129/O1CN01mRNRjo1Cp7ej3fq7s_!!129-0-lubanu.jpg"
        />
      </van-swipe-item>
    </van-swipe>
    <!--Grid宫格
    column-num：一行显示的数目
    gutter：间距
    clickable：是否可点击
    border：是否有边界
    v-for="value in 8"：一共显示的数目
    -->
    <van-grid :column-num="5" :clickable="true" :border="false">
      <van-grid-item v-for="item in menulist" :key="item.name">
        <van-image width="60" height="50" round :src="item.img"></van-image>
        <div>{{item.name}}</div>
      </van-grid-item>
    </van-grid>

    <!--下拉刷新-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--tab转换栏，List列表-->
      <van-tabs v-model="active">
        <van-tab title="今日特价">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-card
              v-for="item in list"
              :key="item"
              num="100"
              price="9.90"
              desc="便宜热卖，低价实惠"
              title="2018港风时尚T恤男"
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />
          </van-list>
        </van-tab>
        <van-tab title="热门商品">
           <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-card
              v-for="item in list"
              :key="item"
              num="100"
              price="999.90"
              desc="便宜热卖，低价实惠"
              title="小米9手机"
              thumb="//img11.360buyimg.com/cms/jfs/t1/78700/12/5770/27502/5d3fc853E8b27ee0a/5b84f1839111f49b.jpg!q90"
            />
          </van-list>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>

<!-- 2.行为:处理逻辑-->
<script>
export default {
  data() {
    return {
      menulist: [
        {
          img:
            "https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp",
          name: "天猫"
        },
        {
          img:
            "https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp",
          name: "聚划算"
        },
        {
          img:
            "https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp",
          name: "外卖"
        },
        {
          img:
            "https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp",
          name: "天猫超市"
        },
        {
          img:
            "https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp",
          name: "天猫进口"
        },
         {
          img:
            " https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp",
          name: "充值中心"
        },
         {
          img:
            " https://gw.alicdn.com/tfs/TB15nKhtpkoBKNjSZFEXXbrEVXa-183-144.png?getAvatar=1_.webp",
          name: "飞猪旅行"
        },
          {
          img:
            " https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp",
          name: "领红包"
        },
          {
          img:
            " https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp",
          name: "拍卖"
        },
          {
          img:
            " https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp",
          name: "分类"
        },

      ],
      list: [],
      isLoading: false,
      loading: false,
      finished: false,
      active: 2,
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<!--3.样式：解决样式-->
<!--scoped可以用以区分不同vue之间相同标签之间的区别-->
<style scoped>
h1 {
  color: blue;
}
.van-card__desc {
    max-height: 20px;
    color: #0000ff;
}
</style>
