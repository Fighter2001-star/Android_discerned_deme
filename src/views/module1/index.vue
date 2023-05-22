<template>
  <div class="bg">
    <div>
      <BaseNavBar :title="title" :isBack="isBack"> </BaseNavBar>
    </div>
    <!-- 小提示部分 -->
    <van-notice-bar left-icon="volume-o" scrollable color="#1989fa" background="#ecf9ff" text="本程序还在开发中。。。。"/>
    <!-- 小提示部分 -->

    <!-- 轮播图 -->
    <van-row>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" fit="contain" />
        </van-swipe-item>
      </van-swipe>
    </van-row>
    <!-- 轮播图 -->

    <van-divider>问答区域</van-divider>

    <!-- 问题展示 -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="用户1  这个app咋样？" name="1">差，不好使用</van-collapse-item>
      <van-collapse-item title="用户2" name="2">一般</van-collapse-item>
      <van-collapse-item title="用户3" name="3">ok</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "首页",
      activeNames: ['1'],
      isBack: false,
      images: [
        require('./images/car.jpeg'),
        require('./images/bicycle.jpg'),
        
      ],
    };
  },
  methods: {},
  created() {
    console.log("模块1");
  },
};
</script>

<style lang="less">
.my-swipe{
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;
}
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 150px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
