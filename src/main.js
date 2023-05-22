import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import BaseNavBar from "./components/BaseNavBar.vue";
import BaseTopTabs from "./components/BaseTopTabs.vue";
import './config/vant/vant.js'
import './config/css/global.css'

import {Button, Tabbar, ImagePreview, Row, Col, Popup, Uploader, Image, Swipe, SwipeItem, NoticeBar, Grid, GridItem, Collapse, CollapseItem,Divider} from 'vant'

Vue.use(Button).use(Tabbar).use(ImagePreview).use(Row).use(Col).use(Popup).use(Uploader).use(Image).use(Swipe).use(SwipeItem).use(NoticeBar).use(Grid).use(GridItem).use(Collapse).use(CollapseItem).use(Divider)
//每一个都需要use





Vue.component('BaseNavBar', BaseNavBar)
Vue.component('BaseTopTabs', BaseTopTabs)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

axios.defaults.baseURL = 'http://192.168.1.6:8000'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前, 添加 token 到请求头
  if (localStorage.token) {
    config.headers['Authorization'] = 'JWT ' + localStorage.getItem('token');
    config.headers['Accept'] = 'application/json';
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 自定义的 axios 响应拦截器
axios.interceptors.response.use((response) => {
  // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
  var token = response.data.token;

  if (token) {
    localStorage.setItem('token', token);
  }
  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 这里写清除token的代码
        console.log("401")
        localStorage.removeItem('token');
        /* 普通401拦截直接返回到登录页面 */
        router.push('/Login');
    }
  }
  return Promise.reject(error)
});

Vue.prototype.$axios = axios