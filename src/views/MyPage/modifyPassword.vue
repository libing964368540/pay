<template>
 <div class="modifyPassword">
    <van-nav-bar
       title="设置支付密码"
       left-arrow
       @click-left="onClickLeft"
     />
      <van-form @submit="onSubmit" :show-error-message="false">
         <div style="margin-top:10px;padding-left: 13px;background:#3e457c">
    <div class="wrap">
    <van-field
      v-model="mobile"
       name="手机号："
      label="手机号："
       placeholder="请输入手机号码"
         type="tel"
     maxlength="11"
     :rules="[{ required: true, message: '请输入手机号码' }]"
     />
    </div>      
   <div class="wrap">
       <van-field
    v-model="code"
    name="验证码："
    label="验证码："
    placeholder="请输入验证码"
     type="digit"
    :rules="[{ required: true, message: '请输入验证码' }]"
  >
  <template #right-icon>
      <span :style="{color:disabledCodeBtn?'#52c41a':'#cccccc'}" v-text="codeText" @click.prevent="yzm('setpay')"></span>
  </template>
  </van-field>
   </div>
   <div>
    <van-field
       v-model="pwd"
       type="password"
       name="密码："
       label="密码："
       placeholder="请输入至少6位的密码"
      :rules="[{ required: true, message: '请输入至少6位的密码' }]"
      maxlength="6"
      
  />
   </div>
 </div>
  <div style="margin: 16px;">
    <van-button block type="info" native-type="submit" color="#52c41a">
      保存
    </van-button>
</div>   
</van-form>


</div>   
</template>
<script>
import Vue from 'vue';
import { Notify } from 'vant'
Vue.use(Notify);
import { modifyPassword } from '@/api/pay.js'
import { code } from '@/mixin/code'
export default {
  name: 'modifyPassword',
  data() {
    return {
      mobile: '',
      pwd: ''
    };
  },
  mixins: [code],
  mounted() {
     const userData = JSON.parse(sessionStorage.getItem('user'))
     this.mobile = userData.mobile
  },
  methods: {
      onSubmit(values) {
       
      // console.log('submit', values);
      const data = {
         code: this.code,
         mobile: this.mobile,
         pwd: this.pwd
      }
      modifyPassword(data).then(res =>{
           if(res){
              Notify({ type: 'success', message: '修改成功' });
             this.code = ""
             this.mobile = ""
             this.pwd = ""
             this.$router.go(-1)
           }
      })
      },
      onClickLeft() {
         this.$router.go(-1) 
      }
  }  
}
</script>
<style scoped>
.modifyPassword .van-cell {background: #3e457c;padding-left: 10px;padding-right: 10px;margin-bottom:0;}
.modifyPassword .van-cell:not(:last-child)::after {border: none;}
.modifyPassword .wrap { border-bottom:1px solid #9fa2b9}
.modifyPassword .van-button{
    width: 295px;
    margin: 35px auto;
    border-radius: 5px;
    height: 45px;
}
.modifyPassword .van-button__text{
    font-size: 16px;
}
</style>