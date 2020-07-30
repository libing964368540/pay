<template>
 <div id="wallet">
      <van-nav-bar
       title="钱包"
       left-arrow
       @click-left="onClickLeft"
     />
     <ListCell :title="title" :titleShow="false">
        <div slot="content" class="introduce">
            <em @click="onClickPage('/record')">账单</em>
           <div class="flex flex-x-center" style="margin-bottom:23.5px"><span>总资产</span><i></i></div>
           <div class="flex flex-x-center" style="margin-bottom:30px;font-size:24px"><span style="margin-right:8px">$</span>
           <!-- <count-to  :start-val="0" :end-val="money" :duration="3000" class="text-style" :decimals="2"></count-to></div>   -->
           <span v-text="money"></span></div>
           <div class="flex flex-x-center" style="margin-bottom:23px"><i class="account" v-text="'账号：'+username"></i></div>
           <div class="flex justify-content">
               <van-button size="small" type="primary" color="#6a73b6" @click="onClickPage('/Recharge')">充值</van-button>
               <van-button size="small" type="primary" color="#52c41a" @click="onClickPage('/transfer')">转账</van-button>
               <van-button size="small" type="primary" color="#52c41a" @click="onClickPage('/WithdrawMoney')">提现</van-button>
           </div>
        </div>
     </ListCell>
     <ListCell :title="title">
         <div slot="content">
            <ul style="padding:0 10px" class="list">
               <li class="flex" v-for="(item,index) in list" :key="index">
                 <div class="imgWrap"><img :src="'http://codex1.me'+item.image"></div>
                 <div class="flex1 flex-y-end">
                     <div class="flex justify-content tag"><span v-text="item.name">USDT</span><span>余额</span></div>
                     <div class="flex justify-content"><span v-text="item.name.toLowerCase()">usdt</span><span v-text="'$ '+item.balance">$90.00</span></div>
                 </div>
               </li>
                
            </ul>   
         </div>
     </ListCell>
</div> 
</template>
<script>
import ListCell from '@/components/ListCell'
import countTo from 'vue-count-to'
import { userWallet } from '@/api/pay'
export default {
   name: 'wallet',
   components: {
      ListCell,
      countTo
   },
   mounted() {
     const userData = JSON.parse(sessionStorage.getItem('user'))
     this.username = userData.mobile
      this.userWallet()
   },
   data() {
      return {
         title: '资产余额', 
         username: '',
         list : [],
         money: 0 
      }
   },
   methods: {
     onClickLeft() {
        this.$router.go(-1)   
     },
     onClickPage(path) {
        this.$router.push(path)     
     },
     userWallet() {
        userWallet({}).then(res =>{
             if(res) {
                const { data } = res
                this.list = data.wallet
                this.money = data.wallet[0].balance
             } 
        })
     }  
   } 
}
</script>
<style>
#wallet {
    color: #ffffff;
}
#wallet .introduce {
    padding: 28px 19px 10px;
    position: relative;
}
#wallet .introduce em {
   display: inline-block;
   position: absolute;
   top:10px;
   right:20px;
   color: #2196f3;
   font-style: normal;
}
#wallet .account { padding: 10px 20px; background: #2d3365;border-radius: 50px;font-style: normal;}
#wallet .van-button--small {width: 95px;height: 44px;border-radius: 5px;}
#wallet .van-button__text {font-size: 16px;}
#wallet  .list li{ padding:15px 0; border-bottom: 1px solid #74789a;}
#wallet  .list li .tag { color: #6a73b6; margin-bottom:10px ;}
#wallet .imgWrap {width: 45px; height: 45px; background: #32aa86; border-radius: 10px;margin-right:10px;overflow: hidden;}
#wallet .imgWrap img {width: 100%;height: 100%;}
</style>