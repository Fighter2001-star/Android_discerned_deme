<template>
  <div>
    <van-tabbar v-model="currentSelected" :inactive-color="color" :active-color="selectedColor" @change="onChange" route placeholder safe-area-inset-bottom>
      <template v-for="item in tabBars">
        <van-tabbar-item :key="item.name" :to="item.name" :badge="item.badge" :dot="item.isShowRedDot" replace>
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img :src="props.active ? item.selectedIconPath : item.iconPath" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  props: {
    // 选中tabbar
    selected: { type: Number, default: 0 },
    // 默认颜色
    color: { type: String, default: "#7d7e80" },
    // 选中颜色
    selectedColor: { type: String, default: "#38BC9D" },
    //item数组
    tabBars: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      //是否选中
      active: 0,
      //当前选中
      currentSelected: this.selected,
      //tabbar格式
      tabBars0: [
        {
          name: "/Module1",
          isShowRedDot: true,
          badge: "",
          text: "首页",
          iconPath: "https://img.yzcdn.cn/vant/user-inactive.png",
          selectedIconPath: "https://img.yzcdn.cn/vant/user-active.png",
        },
        {
          name: "/Module2",
          isShowRedDot: false,
          badge: "",
          text: "识别",
          iconPath: "https://img.yzcdn.cn/vant/user-inactive.png",
          selectedIconPath: "https://img.yzcdn.cn/vant/user-active.png",
        },
        {
          name: "/Module3",
          isShowRedDot: false,
          badge: "",
          text: "用户",
          iconPath: "https://img.yzcdn.cn/vant/user-inactive.png",
          selectedIconPath: "https://img.yzcdn.cn/vant/user-active.png",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      // console.log("内部-切换到tabbar：" + index);
      this.$emit("onChange", index); //往外传值
    },
  },
  // 初始化页面选中状态
  created() {
    /*
      由于 vant 标签栏路由模式，无法自动加载页面，所以这里需要初始化
      console.log(this.$route); //打印当前路由属性
      console.log(this.tabBars);
      console.log(this.$props.selected);
      console.log(this.currentSelected);
      this.$router.push("/Module1");
      */
    if (this.$route.path === "/Main" && this.tabBars.length) {
      this.$router.push(this.tabBars[this.currentSelected].name);
    }
  },
  mounted() { },
};
</script>

<style></style>
