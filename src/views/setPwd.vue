<template>
  <div id="setPwd">
     <div class="title">设置密码</div>
     <div style="padding:15px">
       <van-form @submit="onSubmit" :show-error-message="false">
     <van-field
       v-model="pwd"
       :right-icon="passwordType1?'eye':'closed-eye'"
       @click-right-icon="onpasswordType1"
       name="请输入6-12字母和数字的登录密码"
       left-icon="contact"
       placeholder="请输入6-12字母和数字的登录密码"
       :rules="[{ required: true, message: '请输入6-12字母和数字的登录密码' }]"
       :type="passwordType1?'text':'password'"
       maxlength="12"
       >
      <template #left-icon> 
          <van-icon class-prefix="iconfont icon-zhifumima" name="extra" class="van-cell__left-icon"/>
        </template>
       </van-field>
      <van-field
       v-model="paypwd"
       name="请输入6位支付密码"
       :type="passwordType2?'number':'password'"
       left-icon="contact"
       placeholder="请输入6位支付密码"
       maxlength="6"
       :rules="[{ required: true, message: '请输入6位支付密码' }]"
       :right-icon="passwordType2?'eye':'closed-eye'"
       @click-right-icon="onpasswordType2"
      >
       <template #left-icon> 
            <van-icon class-prefix="iconfont icon-zhifumima" name="extra" class="van-cell__left-icon"/>
        </template>
      </van-field>
      <div style="padding-top:2rem">
           <van-button  block type="info" native-type="submit" color="#3845a9">提交</van-button>
        </div>
  </van-form>
 </div>
    
 </div>  
</template>
<script>
import { setpwd } from '@/api/user'
export default {
  name:'setPwd',
  data() {
    return {
      pwd: '',
      paypwd: '',
      passwordType1: true,
      passwordType2: true
    }  
  },
  methods: {
    onpasswordType1() {
     this.passwordType1 = !this.passwordType1
    },
    onpasswordType2() {
     this.passwordType2 = !this.passwordType2
    },
    onSubmit() {
      this.setpwd()
    },
    setpwd() {
        const data = {
          pwd: this.pwd,
          paypwd: this.paypwd
        } 
        setpwd(data).then(res =>{
            if(res) {
               this.$router.push('/')  
            }
        })  
     } 
  }   
}
</script>
<style>
#setPwd .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color: #2d3365;}
 #setPwd{position: absolute;top:0;bottom:0;width: 100%;height: 100%;background: #2d3365;color: #ffffff;
    box-sizing: border-box;}
#setPwd .van-button{border-radius: 5px;height: 45px;}
#setPwd .van-button__text{font-size: 16px;}
#setPwd .van-cell { background: #3e457c; border-radius: 5px; margin-bottom: 20px;padding-left: 15px; padding-right: 15px;}
#setPwd  .van-cell:not(:last-child)::after{ border: none; } 
#setPwd .van-cell__left-icon {font-size: 20px;margin-left:-5px ;}  
</style>