<template>
<div id="Mypage">
   <div class="title">我的</div>
   <div class="content">
        <div class="back" style="padding:26px 17px">
            <ul class="flex">
                <li style="margin-right:1.5rem">
                    <span class="imgWrap"><img src="@/assets/imgdev/header.jpg"></span>
                </li>
                <li style="font-size:14px;margin-right:1.5rem;padding:5px 0" class="flex-direction justify-content">
                    <div class="flex"><p v-text="username" style="margin-right:15px"></p><i @click="onClick('/changeMobile')" style="color: rgb(67, 171, 219);font-style:normal">更改</i></div>
                    <div class="flex">
                         <!-- <p style="margin-right:20px">ID:15694813</p> -->
                         <p style="color:#43abdb" v-text="'当前等级：VIP'+vip"></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="back">
            <ul class="flex Statistics">
                <li class="ReturnValue"><p>回报值</p><span v-text="huibao"></span></li>
                <li><p>漏单赠金</p><span v-text="loudan"></span></li>
            </ul>
        </div>
        <div class="back" style="margin-top:18px;padding:0 13px 100px">
            <van-cell title="我的邀请码"  @click="onClick('/DownCode')">
               <template #icon>
                 <van-icon name="share" color="#1654b8" class="van-cell__left-icon"/>
               </template>
            </van-cell>
            <van-cell title="我的团队" icon="friends" @click="onClick('/Approval')">
               <template #icon>
                 <van-icon class-prefix="iconfont icon-tuandui" name="extra" color="#ffc26e" class="van-cell__left-icon"/>
               </template>
            </van-cell>
            <van-cell title="上级信息" icon="comment" @click="onClick('/Superior')" >
               <template #icon>
                  <van-icon  name="comment"  color="#f15959" class="van-cell__left-icon" />
               </template> 
            </van-cell>
             <van-cell title="钱包" icon="bill" @click="onClick('/wallet')" >
               <!-- <template #icon>
                  <van-icon  name="comment"  color="#f15959" class="van-cell__left-icon" />
               </template>  -->
            </van-cell>
            <van-cell title="提交工单"  @click="onClick('/WorkOrder')" >
               <template #icon>
                  <van-icon class-prefix="iconfont icon-shenqingguanli" name="extra"  color="#f15959" class="van-cell__left-icon" />
               </template> 
            </van-cell>
            <van-cell title="设置支付密码"  @click="onClick('/modifyPassword')" >
              <template #icon>
                  <van-icon class-prefix="iconfont icon-zhifumima" name="extra"  color="#f15959" class="van-cell__left-icon" />
               </template> 
            </van-cell>
            <van-cell title="退出" icon="lock" @click="clear">
                <template #icon>
                 <van-icon class-prefix="iconfont icon-xitong" name="extra" color="#2196f3" class="van-cell__left-icon"/>
               </template>
            </van-cell>
        </div>
   </div>
</div>
</template>
<script>
import Vue from 'vue';
import { Dialog } from 'vant';
import { getUserInfo } from '@/api/user'
// 全局注册
Vue.use(Dialog);
export default {
    name:'Mypage',
    data() {
      return {
          username: '',
          vip: '',
          huibao: '',
          loudan: ''
      }
    },
    mounted() {
       this.getUserInfo()
       const userData = JSON.parse(sessionStorage.getItem('user'))
             console.log(userData)
       this.username = userData.mobile
       this.vip = userData.vip
       this.huibao = userData.huibao
       this.loudan = userData.loudan
    },
    methods:{
       onClick(str) {
         this.$router.push(str)
       },
       clear() {
           const that = this;
           Dialog.alert({
             title: '提示',
            message: '确认退出',
            }).then(() => {
               // on close
               that.$router.push('/login')
               sessionStorage.removeItem('token')
               sessionStorage.removeItem('user')
              
              });
       },
       getUserInfo() {
          getUserInfo().then( res => {
              const { data } = res; 
             const str = JSON.stringify(data)
             sessionStorage.setItem('user',str) 
           });
       } 
    }
}
</script>
<style scoped>
#Mypage .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color:#2d3365;}
#Mypage .content {position: absolute;top:45px;width: 100%;height: 100%;background: #2d3365;padding:7px 0 0;box-sizing: border-box;}
#Mypage .back {background: #3e457c; color: #ffffff;}
#Mypage .imgWrap {width: 4rem;height: 4rem;border-radius: 50%;display: block;background: #f3f5f8;overflow: hidden;}
#Mypage .imgWrap img { width: 100%;height: 100%;}
#Mypage .Statistics {padding: 11.5px;margin-top:11px}
#Mypage .Statistics li {width: 50%;height: 35px;text-align: center;position: relative;}
#Mypage .Statistics li.ReturnValue::before{content:'';position:absolute;width:1px;background: #ffffff;height: 100%;right: 0;top:0;}
#Mypage .van-cell {font-size: 18px;}
#Mypage .van-cell__left-icon{font-size: 22px;margin-right: 15px;color: #ffc36e;}
#Mypage .van-cell:not(:last-child)::after {border-bottom: 1px solid #2d3365;}
#Mypage .van-cell__left-icon.icon-zhifumima{color: #101010;margin-left:-8px;margin-right:5px;}
</style>