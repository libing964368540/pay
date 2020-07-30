<template>
  <div id="ForgetPassword">
    <van-nav-bar
     left-arrow
     @click-left="onClickLeft"
     /> 
     <div class="ForgetPassword">
        <p class="title" style="padding-top:10px">
         <img src="@/assets/imgdev/logo.png">
      </p>
        <van-form @submit="onSubmit" :show-error-message="false">
           <van-field
             v-model="mobile"
             name="请输入手机号"
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
            <van-button size="small" type="primary" :color="disabledCodeBtn?'#52c41a':'#cccccc'" @click.prevent="yzm('check')"  native-type="button">{{codeText}}</van-button>
         </div>
          <van-field
             v-model="pwd"
            :type="passwordType?'text':'password'"
             name="请输入6-12字母和数字组合的新密码"
             left-icon="contact"
             placeholder="请输入6-12字母和数字的密码"
             :rules="[{ required: true, message: '请输入6-12字母和数字的密码' }]"
             :right-icon="passwordType?'eye':'closed-eye'"
              @click-right-icon="onpasswordType"
              maxlength="12"
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
import Vue from 'vue';
import { Notify } from 'vant'
import { retrievepwd, sendyzm } from '@/api/user'
import { Icon } from 'vant'
import { code } from '@/mixin/code'
import { setNavColor} from '@/utils/plus.js'
export default {
   name:'ForgetPassword',
   data () {
    return {
       pwd:''
    }
  },
  mixins: [code],
  mounted() {
    setNavColor()
  },
  methods: {
    onClickLeft() {
       this.$router.go(-1)
    },  
    onSubmit(values) {
       this.retrievepwd()  
    },
    retrievepwd () {
      retrievepwd(
        {mobile: this.mobile, 
          code: this.code,
           pwd: this.pwd 
        }
      ).then(res =>{
        if(res) {
          Notify({ type: 'success', message: '密码重置成功' });
          this.$router.push('/login') 
        }
         
      })
    },
  }  
}
</script>
<style>
 #ForgetPassword .van-nav-bar{background: #2d3365;}
 #ForgetPassword .van-hairline--bottom::after {border: none}
 #ForgetPassword .van-nav-bar .van-icon { color: #ffffff!important}
 .ForgetPassword{ position: absolute;top:0;bottom:0;width: 100%;height: 100%;background: #2d3365;color: #ffffff;padding: 35px 30px 0;box-sizing: border-box;}
#ForgetPassword .title {margin: 0 auto;width: 125px;height: 125px;margin-bottom: 37px;}
#ForgetPassword .title img {width: 100%;height: 100%;}
#ForgetPassword .van-button{border-radius: 5px;height: 45px;}
#ForgetPassword .van-button__text{font-size: 16px;}
#ForgetPassword .van-cell { background: #3e457c; border-radius: 5px; margin-bottom: 20px;padding-left: 15px; padding-right: 15px;}
#ForgetPassword  .van-cell:not(:last-child)::after{ border: none; }
#ForgetPassword  .InvitationCode .van-button--small{ width: 220px!important; height: 54px;margin-left:10px ;}
#ForgetPassword  .InvitationCode .van-button__text{font-size: 16px!important;}
#ForgetPassword  .van-icon { margin-left: 0;}
#ForgetPassword .van-cell__left-icon {font-size: 20px;margin-left:-5px ;}
</style>