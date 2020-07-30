<template>
  <div id="register">
    <van-nav-bar
     left-arrow
     @click-left="onClickLeft"
     />  
      <p class="title">
         <img src="@/assets/imgdev/logo.png">
      </p>
<div class="content">
    <van-form @submit="onSubmit" :show-error-message="false">
     <van-field
       v-model="mobile"
       name="手机号"
       left-icon="contact"
       placeholder="请输入手机号"
       type="tel"
       maxlength="11"
       :rules="[{ required: true, message: '请输入手机号' }]"
     />
    <div class="flex InvitationCode">
     <van-field
        v-model="code"
        name="验证码"
        left-icon="bag-o"
        placeholder="请输入验证码"
        type="digit"
       :rules="[{ required: true, message: '请填写验证码' }]"
      /> 
      <van-button size="small" type="primary" :color="disabledCodeBtn?'#52c41a':'#cccccc'" @click.prevent="yzm('register')" >{{codeText}}</van-button>
  </div>
  <div class="flex flex1">
     <van-field
        v-model="invite_code"
        name="邀请码"
        left-icon="qr"
        type="digit"
        placeholder="请输入邀请码"
       :rules="[{ required: true, message: '请输入邀请码' }]"
      /> 
      
  </div>
 
  <div style="padding-top:2rem">
    <van-button  block type="info" native-type="submit" color="#3845a9">
      下一步
    </van-button>
  </div>
</van-form> 

</div>
</div>  
</template>
<script>
import Vue from 'vue';
import { Notify } from 'vant'
Vue.use(Notify);
import { register } from '@/api/user'
import { Icon } from 'vant'
import { code } from '@/mixin/code'
export default {
   data () {
    return {
      invite_code:''
    }
  },
  mixins: [code],
  methods: {
    onSubmit(values) {
       this.register()  
    },
    register() {
      const data = {
        mobile:this.mobile,
        code: this.code,
        invite_code: this.invite_code
      }
      register(data).then(res =>{
         if(res){
            Notify({ type: 'success', message: '操作成功' });
            this.mobile = '',
            this.code = '',
            this.invite_code =''
            this.countDown(0)
            sessionStorage.setItem('token', res.data.token)
            this.$router.push({path: '/setPwd'}) 
          }
       })
    },
    onClickLeft() {
        this.$router.go(-1)
    }
  },   
}
</script>
<style>
 #register .van-nav-bar{background: #2d3365;}
 #register .van-hairline--bottom::after {border: none}
 #register .van-nav-bar .van-icon { color: #ffffff}
 #register .content{
    width: 100%;
    height: 100%;
    background: #2d3365;
    color: #ffffff;
    padding: 35px 30px 0;
    box-sizing: border-box;
  }
 #register .title {
   margin: 0 auto;
   width: 125px;
   height: 125px;
    margin-bottom: 37px;
 }
  #register .title img {
    width: 100%;
    height: 100%;
  }
 #register .van-button{
    border-radius: 10px;
    height: 45px;
}
 #register .van-button--block {border-radius: 5px;}

 #register .van-button__text{
    font-size: 16px;
}
 #register .van-cell { background: #3e457c; border-radius: 5px; margin-bottom: 20px;}
#register  .van-cell:not(:last-child)::after{ border: none; }
#register  .InvitationCode .van-button--small{ width: 220px!important; height: 54px;margin-left:10px ;border-radius: 5px;}
#register  .InvitationCode .van-button__text{font-size: 16px!important;}
#register  .van-icon { margin-left: 20px;}
</style>