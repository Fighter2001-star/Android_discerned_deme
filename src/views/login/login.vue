<template>
  <div>
    <div class="img-bg">
    </div>
    <div class="text"><h1>登录</h1></div>
    <van-cell-group class="input-bg">
      <van-field v-model="username" label="账号" placeholder="请输入账号" label-width="30px" center clearable>
      </van-field>
      <van-field v-model="password" label="密码" placeholder="请输入密码" type="password" label-width="30px" center clearable>
      </van-field>
    </van-cell-group>
    <div class="base-submit-btn" style="width: 100px;;margin:20px auto;" @click="toLogin">登 录</div>
    <div class="base-submit-btn" style="width: 100px;;margin:20px auto;" @click="toRegister">注 册</div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    toLogin () {
      var userInfo = { username: this.username, password: this.password }
      console.log(userInfo);
      if (userInfo.username === '' || userInfo.password === '') {
        alert('账号或密码不能为空');
      } else {
        this.$axios.post("/user/login/", userInfo).then(res => {
          if (res.status === 200) {
            this.$toast.loading({
              duration: 0,
              message: '正在登录...',
            });
          setTimeout(() => {
            this.$toast.success('登录成功');
            window.localStorage.setItem('userInfo', userInfo);
            this.$router.replace({ name: "Main" });
            this.$toast.clear();
          }, 2000);
        } else if (res.status === 429){
          Toast('操作过于频繁,请稍后')
        }else {
          Toast('账号或密码错误')
        }
        }).then(function (r) {
          console.log(r)
          if (r.status== 200) {
            localStorage.setItem('token', r.token)
            localStorage.setItem('password', r.password)
            localStorage.setItem('username', r.username)
            this.$router.replace({ name: "Main" });
          } else {
            this.toast("登录失败")
          }
        }).catch(error => {
          console.log(error);
        });
      }
    },
    toRegister () {
      this.$router.replace('/Register')// 点击注册按钮，跳转至注册页面
    }
  },
  created() {
  },
};
</script>

<style>
.text {
  width: 100vw;
  text-align: center;
  margin: 30px 0;
}

.input-bg {
  margin: 15px;
}

.base-submit-btn {
  margin: 20px 15px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background: #04BE02;
  font-size: 17px;
  text-align: center;
  color: white;
}
</style>
