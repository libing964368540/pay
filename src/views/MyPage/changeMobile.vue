<template>
  <div id="changeMobile" >
      <van-nav-bar
       title="更换手机号"
       left-arrow
       @click-left="onClickLeft"
     />
     <div class="content">
       <van-form @submit="onSubmit" :show-error-message="false">
         <p style="color:#818df1;text-align:center;margin-bottom:10px;">一个账号只允许换绑2次手机</p>
         <van-field
           v-model="mobile"
           name="请输入新手机号"
           left-icon="contact"
           placeholder="请输入新手机号"
           type="tel"
           :rules="[{ required: true, message: '请输入新手机号' }]"
          />
          <div class="flex InvitationCode">
           <van-field
              v-model="code"
              name="验证码"
              left-icon="bag-o"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
              type="digit"
            /> 
          <van-button size="small" type="primary" :color="disabledCodeBtn?'#52c41a':'#cccccc'" @click.prevent="yzm('changemobile')">{{codeText}}</van-button>
  </div>
    <div style="padding-top:2rem">
    <van-button  block type="info" native-type="submit" color="#3845a9">
      更改手机号
    </van-button>
  </div>
</van-form>
  </div> 
   
  </div>  
</template>
<script>
import Vue from 'vue';
import { Dialog } from 'vant';
import { Notify } from 'vant'
import { sendyzm,changeMobile } from '@/api/user'
import { Icon } from 'vant'
import { code } from '@/mixin/code'
export default {
   data () {
    return {
      mobile: ''
    }
  },
  mixins: [code],
  mounted() {
  
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit(values) {
       this.changeMobile()  
    },
    changeMobile () {
      const data = {
         mobile: this.mobile,
         code: this.code
      }
      changeMobile(data).then(res =>{
          if(res) {
            Notify({ type: 'success', message: '更改成功' });
            this.mobile = ""
            this.code =""
          }
      }) 
    }
  }  
}
</script>
<style>
 #changeMobile .content {padding: 15px;}
 #changeMobile .title {margin: 0 auto;width: 125px;height: 125px; margin-bottom: 37px;}
 #changeMobile .title img {width: 100%;height: 100%;}
 #changeMobile .van-button{border-radius: 5px;height: 45px;}
 #changeMobile .van-button__text{font-size: 16px;}
 #changeMobile .van-cell { background: #3e457c; border-radius: 5px; margin-bottom: 20px;}
#changeMobile  .van-cell:not(:last-child)::after{ border: none; }
#changeMobile  .InvitationCode .van-button--small{ width: 220px!important; height: 54px;margin-left:10px ;}
#changeMobile  .InvitationCode .van-button__text{font-size: 16px!important;}
#changeMobile  .van-icon { margin-left: 20px;}
</style>