<template>
  <div class="bg">
    <BaseNavBar :title="title" :isBack="true"></BaseNavBar>
    <van-cell-group>
      <van-cell center :title="item.text" is-link v-for="item in dataArr" :key="item.name" @click="onClick(item)" />
    </van-cell-group>
        <!-- 本地图片展示区 -->
        <div class="img_show">
      <van-row type="flex" justify="center" v-for="item in body" :key="item.id">
        <van-col >
          <img :src="item.img_url" style="width: 100%;height: 100%;">
        </van-col>
      </van-row>
    </div>
    <!-- 本地图片展示区 -->
    <button @click="getImg()">点击</button>

    <!-- 识别物品介绍 -->
      <div class="introduce">

      </div>
    <!-- 识别物品介绍 -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      body: null,
      show: false,
      key:1,
      title: "Introduction",
      dataArr: [
        { text: "text1", name: "name1" },
        { text: "text2", name: "name2" },
        { text: "text3", name: "name3" },
        { text: "text4", name: "name4" },
        { text: "text5", name: "name5" },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      if (item.name) {
        // this.$router.push({ name: item.name });
      }
      // window.localStorage.removeItem('userInfo');
      // this.$router.replace({ name: "Login" });
    },

        /**
    * 获取后端图片数据
    */
    getImg () {
      this.$axios.get("/identify/get_img/").then(res => {
        console.log('Success Getted Image!');
        console.log(res.data[0].img_url);
        if (res.status == 200){
          setTimeout(() => {
            this.$toast.success('获取数据成功。');
            this.$toast.clear();
          }, 2000);
          console.log(res.data);
          this.body = res.data;
        } else {
          setTimeout(() => {
            this.$toast.success('获取失败，请重试。');
            this.$toast.clear();
          }, 2000);
        }
      }, res => {
        console.log(res);
        console.log('Failed')
      })
    },
  },

  created () {

    }
};
</script>

<style></style>
