<template>
  <div class="bg2" v-bind:class="{ bg10: isActive }">
    <BaseNavBar :title="title" :isBack="false"> </BaseNavBar>
    <div id="app">
      <!-- 上传区域 -->
      <van-row type="flex" class="uploader" justify="center">
        <van-col class="left_btn" span="0">
          <van-uploader multiple capture=camera :after-read="afterRead" max-count='1'>
            <svg t="1669542081279" style="width:100px;height:100px;" class="icon" viewBox="0 0 1121 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="10002" width="256" height="256">
              <path
                d="M999.619048 1024H121.904762c-68.266667 0-121.904762-53.638095-121.904762-121.904762V268.190476c0-68.266667 53.638095-121.904762 121.904762-121.904762h877.714286c68.266667 0 121.904762 53.638095 121.904762 121.904762v633.904762c0 68.266667-53.638095 121.904762-121.904762 121.904762zM121.904762 195.047619c-41.447619 0-73.142857 31.695238-73.142857 73.142857v633.904762c0 41.447619 31.695238 73.142857 73.142857 73.142857h877.714286c41.447619 0 73.142857-31.695238 73.142857-73.142857V268.190476c0-41.447619-31.695238-73.142857-73.142857-73.142857H121.904762z"
                fill="#106D5A" p-id="10003"></path>
              <path
                d="M641.219048 668.038095m-268.190477 0a268.190476 268.190476 0 1 0 536.380953 0 268.190476 268.190476 0 1 0-536.380953 0Z"
                fill="#20DAB4" p-id="10004"></path>
              <path
                d="M558.32381 902.095238c-175.542857 0-316.952381-141.409524-316.952381-316.952381s141.409524-316.952381 316.952381-316.952381 316.952381 141.409524 316.95238 316.952381-143.847619 316.952381-316.95238 316.952381z m0-585.142857c-148.72381 0-268.190476 119.466667-268.190477 268.190476s119.466667 268.190476 268.190477 268.190476 268.190476-119.466667 268.190476-268.190476-121.904762-268.190476-268.190476-268.190476z"
                fill="#106D5A" p-id="10005"></path>
              <path
                d="M558.32381 802.133333c-121.904762 0-219.428571-97.52381-219.428572-219.428571s97.52381-219.428571 219.428572-219.428572 219.428571 97.52381 219.428571 219.428572-97.52381 219.428571-219.428571 219.428571z m0-390.095238c-95.085714 0-170.666667 75.580952-170.666667 170.666667s75.580952 170.666667 170.666667 170.666667 170.666667-75.580952 170.666666-170.666667-75.580952-170.666667-170.666666-170.666667zM924.038095 438.857143c-53.638095 0-97.52381-43.885714-97.523809-97.52381s43.885714-97.52381 97.523809-97.523809 97.52381 43.885714 97.52381 97.523809-43.885714 97.52381-97.52381 97.52381z m0-146.285714c-26.819048 0-48.761905 21.942857-48.761905 48.761904s21.942857 48.761905 48.761905 48.761905 48.761905-21.942857 48.761905-48.761905-21.942857-48.761905-48.761905-48.761904zM875.27619 170.666667h-48.761904V121.904762c0-41.447619-31.695238-73.142857-73.142857-73.142857h-390.095239c-41.447619 0-73.142857 31.695238-73.142857 73.142857v48.761905h-48.761904V121.904762c0-68.266667 53.638095-121.904762 121.904761-121.904762h390.095239c68.266667 0 121.904762 53.638095 121.904761 121.904762v48.761905z"
                fill="#106D5A" p-id="10006"></path>
              <path
                d="M192.609524 170.666667h-48.761905c-41.447619 0-73.142857-31.695238-73.142857-73.142857s31.695238-73.142857 73.142857-73.142858h48.761905c41.447619 0 73.142857 31.695238 73.142857 73.142858s-31.695238 73.142857-73.142857 73.142857z m-48.761905-97.52381c-14.628571 0-24.380952 9.752381-24.380952 24.380953s9.752381 24.380952 24.380952 24.380952h48.761905c14.628571 0 24.380952-9.752381 24.380952-24.380952s-9.752381-24.380952-24.380952-24.380953h-48.761905z"
                fill="#106D5A" p-id="10007"></path>
            </svg>
          </van-uploader>
        </van-col>

        <van-col span="3">
        </van-col>

        <van-col class="right_btn" span="0">
          <van-uploader multiple :after-read="afterRead" max-count='1'>
            <svg t="1669541070739" style="width:100px;height:100px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="7908" width="256" height="256">
              <path d="M285.696 945.493333L896.341333 334.848l12.970667 599.04-623.616 11.605333z" fill="#38bc9d"
                p-id="7909" data-spm-anchor-id="a313x.7781069.0.i41" class=""></path>
              <path
                d="M938.666667 34.133333h-853.333334A51.2 51.2 0 0 0 34.133333 85.333333v853.333334A51.2 51.2 0 0 0 85.333333 989.866667h853.333334a51.2 51.2 0 0 0 51.2-51.2v-853.333334A51.2 51.2 0 0 0 938.666667 34.133333zM887.466667 136.533333v718.506667L456.021333 423.594667a52.565333 52.565333 0 0 0-72.362666 0L136.533333 670.72V136.533333zM136.533333 815.445333l283.306667-283.306666L775.168 887.466667H136.533333z"
                fill="#2D515E" p-id="7910"></path>
              <path d="M716.8 307.2m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z" fill="#2D515E"
                p-id="7911"></path>
            </svg>
          </van-uploader>
        </van-col>
      </van-row>
      <!-- 上传区域 -->

      <!-- 本地图片展示区 -->
      <div class="img_show">
        <van-row type="flex" justify="center" v-for="item in body" :key="item.id">
          <van-col>
            <img :src="item.img_url" style="width: 100%;height: 100%;">
          </van-col>
        </van-row>
      </div>
      <!-- 本地图片展示区 -->
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  components: {},
  data() {
    return {
      body: null,
      title: "识别",
      isActive: false,
      key: 1,
      show: false,
      imgList: [],
      imgUrl: "",
      status: "",
    };
  },
  methods: {
    /**
    * 提交并识别
    */
    OnSubmit() {
      this.$toast.loading({
        duration: 1,
        message: '正在识别，请稍后..',
      });
      this.toIdentify()
      this.$getImg()
    },

    afterRead(file) {
      this.imgList.push(file.content)
      this.$toast.loading({
        duration: 0,
        message: '正在上传图片中，请稍后..',
      });
      this.uploadImg(file)
    },

    /**
    * 上传图片
    */
    uploadImg(file) {
      // 创建form对象
      let formdata = new FormData();
      // 通过append向form对象添加数据,可以通过append继续添加数据
      // 或formdata1.append('file',file);
      formdata.append('image', file.file, file.name);
      // 设置请求头
      // this.axios 是因为在main.js写在vue实例里
      this.$axios.create({
        timeout: 1000 * 60, // 时间
        withCredentials: true // 跨域携带cookie
      });
      this.$axios.post('http://localhost:8000/identify/toIdentify', formdata, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then((res) => { // 这里的url为后端接口
        console.log(res.data);
        if (res.status == 200) {
          this.previewImg()
          setTimeout(() => {
            this.$toast.success('图片上传成功。');
            this.$toast.clear();
          }, 2000);
        } else {
          setTimeout(() => {
            this.$toast.success('图片上传失败。');
            this.$toast.clear();
          }, 2000);
        }
        // res 为接口返回值
      }).catch(() => { })
    },

    /**
     * 请求后端识别方法
     */
    toIdentify() {
      this.$axios.post("http://192.168.24.92:8000/identify/toIdentify").then(res => {
        console.log('Success Identified');
        if (res.status == 200) {
          setTimeout(() => {
            this.$toast.success('识别成功，请稍后...');
            this.$toast.clear();
          }, 3000);
          this.$router.push({ name: "Introduce", params: { setid: 111222 } });
        } else {
          setTimeout(() => {
            this.$toast('识别失败');
            this.$toast.clear();
          }, 2000);
        }
        console.log(res);
      }, res => {
        console.log(res);
        console.log('Failed')
      })
    },


    getImg() {
      this.$axios.get("/identify/get_img/").then(res => {
        console.log('Success Getted Image!');
        this.College = res.data.College;
        if (res.status == 200) {
          setTimeout(() => {
            this.$toast.success('获取数据成功。');
            this.$toast.clear();
          }, 2000);
          console.log(res.data);

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


    /**
    * 页面点击图片放大
    */
    previewImg(imgs, index) {
      this.previewImgDialog = ImagePreview({
        images: this.discerned,
        startPosition: index,
        onClose() {
        }
      });
    },
  },
};
</script>

<style>.bg2 {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  width: 100%;
}</style>
