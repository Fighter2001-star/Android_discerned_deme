<template>
    <div>
      <div class="img-bg">
      </div>
      <div class="text"><h1>注册</h1></div>
      <van-cell-group class="input-bg">
        <van-field v-model="nickname" label="昵称" placeholder="请输入昵称" label-width="30px" center clearable>
          <img class="icon" src="@/assets/tab/tab1.png" slot="left-icon">
        </van-field>
        <van-field v-model="username" label="账号" placeholder="请输入账号" type="username" label-width="30px" center clearable>
          <img class="icon" src="@/assets/tab/tab2.png" slot="left-icon">
        </van-field>
        <van-field v-model="password" label="密码" placeholder="请输入密码" type="password" label-width="30px" center clearable>
          <img class="icon" src="@/assets/tab/tab2.png" slot="left-icon">
        </van-field>
        <van-field v-model="phoneNumber" label="手机号" placeholder="请输入号码" type="password" label-width="30px" center clearable>
          <img class="icon" src="@/assets/tab/tab2.png" slot="left-icon">
        </van-field>
        <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" type="mail" label-width="30px" center clearable>
          <img class="icon" src="@/assets/tab/tab2.png" slot="left-icon">
        </van-field>
      </van-cell-group>
      <div class="base-submit-btn" style="margin-top:60px;" @click="toRegister">注 册</div>
      <div class="base-submit-btn" style="margin-top:60px;" @click="toReturn">返 回</div>
    </div>
  </template>
  
  <script>
  import { Toast } from 'vant';
  export default {
    components: {},
    data() {
      return {
        nickname: "",
        username: "",
        password: "",
        phoneNumber: "",
        email: "",
        gender: "男",
      };
    },
    methods: {
        toReturn (){
            this.$router.replace('/Login')
        },
      toRegister () {
        var userInfo = { nickname: this.nickname, username: this.username, password: this.password , email: this.email, phoneNumber: this.phoneNumber, gender: this.gender}
        console.log(userInfo);
        if (userInfo.username === '' || userInfo.password === '' || userInfo.email === '' || userInfo.phoneNumber === '') {
          alert('重要信息不能为空');
        } else {
          this.$axios.post("/user/register/", userInfo), 
            setTimeout(() => {
              Toast.success('注册成功');
              window.localStorage.setItem('userInfo', userInfo);
              this.$router.replace({ path: "/Main" });
              Toast.clear();
            }, 3000).then(function (r) {
            console.log(r)
            if (r.status== 200) {
              localStorage.setItem('password', r.password)
              localStorage.setItem('username', r.username)
              this.$router.replace({ name: "Main" });
            } else {
              this.toast("")
            }
          }).catch(error => {
            console.log(error);
          });
        }
      },
    },
    created() {
    },
  };
  </script>
  
  <style>
  .img-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 180px;
  }
  
  .logo {
    width: 100px;
    height: 100px;
    /* border-radius: 50px; */
    margin-top: 20px;
  }
  
  .text {
    width: 100vw;
    text-align: center;
    margin: 30px 0;
  }
  
  .input-bg {
    margin: 15px;
  }
  
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    padding-bottom: 2px;
  }
  </style>
