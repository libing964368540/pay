<template>
  <div id="login">
      <p class="title">
         <img src="@/assets/imgdev/logo.png">
      </p>
  <van-tabs type="card">
     <van-tab title="账号密码登录">
        <van-form  @submit="onSubmit2" :show-error-message="false">
           <van-field
             v-model="mobile2"
             name="请输入手机号"
             left-icon="contact"
             placeholder="请输入手机号"
             type="tel"
             maxlength="11"
             :rules="[{ required: true, message: '请输入手机号' }]"
            />
             <van-field
             v-model="pwd"
             :type="passwordType?'text':'password'"
             name="请输入密码"
             left-icon="contact"
             placeholder="请输入密码"
             :rules="[{ required: true, message: '请输入密码' }]"
             :right-icon="passwordType?'eye':'closed-eye'"
             @click-right-icon="onpasswordType"
             maxlength="12"
            >
            <template #left-icon> 
                 <van-icon class-prefix="iconfont icon-zhifumima" name="extra" class="van-cell__left-icon" style="margin-left:-5px"/>
            </template>
            </van-field>
            <p style="text-align:right" @click="JumpForgetPassword">忘记密码？</p>
          <div style="padding-top:2rem">
           <van-button  block type="info" native-type="submit" color="#3845a9">登录</van-button>
         </div>
        </van-form>   
    </van-tab>
     <van-tab title="手机验证码登录">
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
            <van-button size="small" type="primary" :color="disabledCodeBtn?'#52c41a':'#cccccc'" @click.prevent="yzm('login')"  native-type="button">{{codeText}}</van-button>
         </div>
          <div style="padding-top:2rem">
           <van-button  block type="info" native-type="submit" color="#3845a9">登录</van-button>
         </div>
       </van-form> 
     </van-tab> 
     <p style="margin-top:10px;text-align:center" @click="JumpRegister">注册账号</p>
</van-tabs>  

  </div>  
</template>
<script>
import { login, sendyzm,login2 } from '@/api/user'
import { Icon } from 'vant'
import { code } from '@/mixin/code'
import { setNavColor} from '@/utils/plus.js'
export default {
   data () {
    return {
       mobile2:'',
       pwd: ''
    }
  },
  mixins: [code],
  mounted() {
    setNavColor()
  },
  methods: {
    //密码登录
    onSubmit2() {
      this.login2()
    },
    //验证码登录
    onSubmit(values) {
       this.login()  
    },
    login () {
      login(
        {mobile: this.mobile, 
        code: this.code}
      ).then(res =>{
        if(res) {
          sessionStorage.setItem('token', res.data.token)
          // Notify({ type: 'success', message: '登录成功' });
          this.$router.push({path: '/'}) 
        }
         
      })
    },
    login2() {
      const data = {
        mobile: this.mobile2,
        pwd: this.pwd
      }
       login2(data).then(res =>{
        if(res) {
          sessionStorage.setItem('token', res.data.token)
          // Notify({ type: 'success', message: '登录成功' });
          this.$router.push({path: '/'}) 
        }
       })
    },
    JumpRegister() {
      this.$router.push('/register')
    },
    JumpForgetPassword() {
      this.$router.push('/ForgetPassword')
    }
  }  
}
</script>
<style>
 #login{
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background: #2d3365;
    color: #ffffff;
    padding: 35px 30px 0;
    box-sizing: border-box;
  }
 #login .title {
   margin: 0 auto;
   width: 125px;
   height: 125px;
    margin-bottom: 37px;
 }
  #login .title img {
    width: 100%;
    height: 100%;
  }
 #login .van-button{
    border-radius: 5px;
    height: 45px;
}
 #login .van-button__text{
    font-size: 16px;
}
 #login .van-cell { background: #3e457c; border-radius: 5px; margin-bottom: 20px;padding-left:15px ;padding-right: 15px;}
#login  .van-cell:not(:last-child)::after{ border: none; }
#login  .InvitationCode .van-button--small{ width: 220px!important; height: 54px;margin-left:10px ;}
#login  .InvitationCode .van-button__text{font-size: 16px!important;}
/* #login  .van-icon { margin-left: 20px;} */
#login  .van-tabs--card>.van-tabs__wrap{height: 40px; margin-bottom: 15px;}
#login .van-tabs__nav--card {height: 40px;border: 1px solid #f8680d;}
#login .van-tabs__nav--card .van-tab {line-height: 40px;color: #ffb904;border-right: 1px solid #f8680d;}
#login .van-tabs__nav--card .van-tab.van-tab--active{background: #f8680d;color:#ffffff;}
#login .van-cell__left-icon {font-size: 20px;margin-left:-5px ;}
</style>