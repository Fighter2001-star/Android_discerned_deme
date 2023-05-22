<template>
  <div class="my">
    <BaseNavBar :title="title" :isBack="false">
      <van-icon name="setting-o" size="18" slot="right" @click="onClickNavItem" color="white" />
    </BaseNavBar>
    <div style="display: flex;padding: 10px">
      <van-image
          round
          width="60"
          height="60"
          src="./assets/logo.png"
      />
      <div class="des">
        <div class="des-name">{{ userInfo.nickname }}</div>
        <div style="display: flex;padding-top: 7px">
          <van-icon color="#06f" name="wechat-pay"/>
          <span class="author-des">{{ userInfo.gender }}</span>
        </div>
      </div>
    </div>
    <!-- 收藏区域 -->
    <van-grid :column-num="3">
      <van-grid-item icon="star-o" text="收藏" />
      <van-grid-item icon="clock-o" text="历史" />
      <van-grid-item icon="orders-o" text="提问" />
    </van-grid>

    <van-button size="large" type="primary" center is-link v-for="item in dataArr" :key="item.name" @click="onClick(item)" >退出</van-button>

    <van-action-sheet v-model="isShowActionSheet" :actions="actionsArr" description="请选择操作" @select="onSelect" cancel-text="取消" close-on-click-action />
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      title: "个人信息",
      userInfo:{nickname:'mys', email:'2971585429@qq.com',gender:'male'},
      isShowActionSheet: false,
      actionsArr: [{ name: '退出登录', color: '#ee0a24' },],
      dataArr: [
        { text: "退出", name: "" },
      ],
    };
  },
  methods: {
    onClickNavItem() {
      this.$router.replace({ name: "Set" });
    },

    getUserInfo() {

    },
    
    onClick(item) {
      console.log(JSON.stringify(item));
      console.log(item.text);
      if (item.text === '退出') {
        this.isShowActionSheet = true;
        return
      }
      //   if (item.name) {
      //     this.$router.push({ name: item.name });
      //   }
    },


    onSelect(item) {
      console.log(item);
      this.isShowActionSheet = false;
      this.$toast.loading({
        duration: 0,
        message: '正在退出...',
      });
      setTimeout(() => {
        this.$toast.success('退出成功');
        window.localStorage.removeItem('userInfo');
        this.$router.replace({ name: "Login" });
        this.$toast.clear();
      }, 2000);
    },
  },
  
  created() {
    console.log("模块3");
  },
};
</script>

<style>
.my {
  width: auto;
  height: 100px;
  /* background: orange; */
}
</style>
