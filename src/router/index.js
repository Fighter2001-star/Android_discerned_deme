import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/login.vue";
import Register from '../views/register/register.vue'
import Main from "../views/root/main.vue";

import Module1 from "../views/module1/index.vue";
import Module2 from "../views/module2/index.vue";
import Module3 from "../views/module3/index.vue";

import Introduce from "../views/module2/Introduce.vue";

import Set from "../views/module3/set/index.vue";

Vue.use(VueRouter);

const routes = [
  {// 重定向
    path: '/',
    redirect: '/Login'
  },
  { path: "/Login", name: "Login", component: Login },
  { path: "/Register", name: "Register", component: Register },
  {
    path: '/Main',
    name: "Main",
    component: Main,
    redirect: "/Module2",
    children: [
      { path: "/Module1", name: "Module1", component: Module1,meta: { keepAlive: true, requireAuth: true } },
      { path: "/Module2", name: "Module2", component: Module2, meta: { keepAlive: true, requireAuth: true , isShowTabBar: true} },
      { path: "/Introduce", name: "Introduce", component: Introduce, meta: { keepAlive: false, requireAuth: true }  },
      { path: "/Module3", name: "Module3", component: Module3, meta: { keepAlive: true, requireAuth: true } },
    ],
  },
  { path: "/Module3/Set", name: "Set", component: Set,meta: { keepAlive: true, requireAuth: true } },
];




const router = new VueRouter({
  routes,
  // mode: 'hash',
  // base: process.env.BASE_URL,
  // /**
  //  * 路由跳转后页面滚动到顶部
  //  * 详见：https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
  //  */
  // scrollBehavior: () => ({ y: 0 }),
});




/*

只能永久，需要手动清除
存储：window.localStorage.setItem(name, JSON.stringify(obj))
读取：window.localStorage.getItem(name)
删除：window.localStorage.removeItem(name)
清空：window.localStorage.clear()
*/


// // 路由前置守卫
//      // 全局路由守卫
//      router.beforeEach((to, from, next) => {
//       // to: Route: 即将要进入的目标 路由对象
//       // from: Route: 当前导航正要离开的路由
//       // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//       const nextRoute = [];
//       let isLogin=localStorage.getItem('token');
//       // 未登录状态；当路由到nextRoute指定页时，跳转至login
//       if (nextRoute.indexOf(to.name) >= 0 && !isLogin) {
//           next({
//               path: '/Login',
//               // 将跳转的路由path作为参数，登录成功后跳转到该路由
//               query: {redirect: to.fullPath}  
//           })
//       }else{
//           next();
//       }
//       // 已登录状态；当路由到login时，跳转至home
//       if (to.name === 'Login') {
//       if (isLogin) {
//           console.log('已登录');
//           router.push({ path: '/Main' });
//       }
//       }
//   });
  export default router;
