<template>
<div id="home">
     <router-view />
<van-tabbar 
   v-model="active" 
   active-color="#1654b8" 
   inactive-color="#acafb1" 
   route>
  <van-tabbar-item to="/home/HomePage">
      <span>首页</span>
    <template #icon>
       <van-icon class-prefix="iconfont icon-shouye" name="extra" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item  to="/home/Apply">
    <span>申请</span>
    <template #icon>
       <van-icon class-prefix="iconfont icon-shenqingguanli" name="extra" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item to="/home/Examine">
    <span>任务</span>
    <template #icon>
       <van-icon class-prefix="iconfont icon-renwu1" name="extra" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item to="/home/Me">
     <span>我的</span>
    <template #icon>
       <van-icon class-prefix="iconfont icon-wo" name="extra" />
    </template>
  </van-tabbar-item>
</van-tabbar>
<van-overlay :show="show">
         <div class="wrapper1" @click.stop>
         <div class="block1">
            <p class="block1_title">尊敬的小明：</p>
            <p class="block1_tip">您的账号因未完成系统任务已被冻结</p>
            <div class="flex flex-y-center" style="margin-bottom:35px"><p style="font-size:16px">冻结阶段漏金：</p><i class="Money" v-text="'￥'+loudan">￥1000</i></div>
             <van-button type="primary" block color="#3b49ba" @click.stop="jump">申请解封</van-button>
            </div>
         </div>
     </van-overlay>
</div>    
</template>
<script>
import { versionS } from '@/mixin/version'
export default {
   name: 'home',
   mixins: [versionS],
   data() {
       return {
           active: 0,
           vip:0,
           show: false,
           loudan: 0
       }
   } ,
   watch:{
        active(val){
          this.IsShow()
           if(val==0){
            this.appUpdate()
           } 
        }
   },
   mounted() {
       this.IsShow()
       this.appUpdate()
   },

   methods:{
      init(){
      
      },
      IsShow(){
         const userData = JSON.parse(sessionStorage.getItem('user'))
           this.vip = userData.vip
          if(userData.status == 'hidden') {
              this.show = true
              this.loudan = userData.loudan
           } 
         // this.show = false
       },
       jump() {
         this.$router.push('/Frozen')
       }
   }
}
</script>
<style>
#home { 
    width: 100%;
    height: 100%;
}
 .wrapper1 {display: flex;align-items: center;justify-content: center;height: 100%; color: #ffffff;}
  .block1 { width: 220px;height: 210px;background-color: #2d3365;border-radius: 10px;padding: 20px;} 
  .block1 .block1_title {font-size: 18px;margin-bottom: 14px;}
  .block1 .block1_tip {margin-bottom: 20px;font-size: 13px;}
  .Money {font-size: 30px;color:#f1c517}
  .van-button--block {border-radius: 5px;}
</style>