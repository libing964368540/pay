<template>
   <div id="payType">
    <van-nav-bar
       title="支付方式"
       left-arrow
       @click-left="onClickLeft"
     />
     <div>
         <ul class="listWrap">
             <li class="flex" v-for="(item,index) in list" :key="index">
                 <div class="flex flex-y-center">
                      <span v-text="item.title"></span>
                     
                 </div>
                 <div> 
                   <span v-text="item.money"></span>
                     <!-- <van-button type="primary" @click="pays" v-if="item.istatus==1">创建</van-button>
                     <van-button type="primary"  v-if="item.istatus==2">完成</van-button> -->
                 </div>
            </li>
         </ul>
          <ul class="listWrap">
             <li class="flex">
                 <div class="flex flex-y-center">
                      <span>总计：</span>
                 </div>
                 <div> 
                   <span v-text="all_income"></span>
                 </div>
            </li>
            <li class="flex flex-y-end">
                 <div @click="onClick">
                      <span>选择支付币种</span>
                      <div style="padding-top:20px" class="flex flex-y-center"><span class="radio__inner"></span><span v-text="name"></span></div>
                 </div>
                 <div class="flex flex-end"> 
                   <span>余额：</span><span v-text="balance"></span>
                 </div>
            </li>
         </ul>
         <div style="margin:50px 40px 20px;">
            <!-- <van-button  block type="info" color="#52c41a" @click="setPasswordShow" v-if="disabled">支付</van-button> -->
            <van-button  block type="info" color="#52c41a" @click="judge">支付</van-button>
            </div>
        </div>
        <payment :show="PShow" @pay="onpay" ref="payment"></payment>   
  </div> 
</template>
<script>
import Vue from 'vue';
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);
import { pays1, upgrade1,userWallet,upgrade,pays } from '@/api/pay'
import payment from '@/components/payment'
import { code } from '@/mixin/code'
export default {
   name:'payType',
   components:{
     payment
   },
   mixins: [code],
   data() {
     return {
        list: [],
        type: {"normal":"正常","hidden":"冻结","activate":"待激活"},
        balance: 0,
        name: '',
        all_income: 0,
        disabled: true,
        PShow: false,
        channel_id:''
     }
   },
   mounted() {
      const userData = JSON.parse(sessionStorage.getItem('user'))
      const vip = userData.vip
      if(vip>0) {
         this.upgrade();
      }else {
         this.upgrade1();
      }
     this.userWallet();
   },
   methods:{
     judge() {
       const num = this.balance-this.all_income
       if(this.balance&&this.all_income&&num>=0){
           this.setPassword()
       }else{
           Dialog.confirm({
             title: '提示',
           message: '当前USDT余额不足',
           confirmButtonText: '充值'
            }).then(() => {
                this.$router.push('/Recharge')
           }).catch(() => {

          });
       }
     },
     setPasswordShow() {
       this.PShow = true
     },
     onClickLeft() {
        this.$router.go(-1)
     },
     onClick() {
        this.$router.push('/moneyType')
     },
     setPassword() {
        if(this.disabled){
          this.PShow = true
        }else { 
          Dialog.alert({
             title: '提示',
            message: '请设置支付密码',
          }).then(() => {
           this.$router.push('/modifyPassword')
         });
          
        }
        
     },
     onpay(value){
       const userData = JSON.parse(sessionStorage.getItem('user'))
       const vip = userData.vip
        if(vip>0) {
         this.pays(value);
         }else {
         this.pays1(value);
        }
     },
     pays1(value) {
       const data = {paypwd:value,cid:this.channel_id}
       this.PShow = false
        pays1(data).then(res =>{
           if(res){
             this.$router.push('/paySuccess')
            }
              this.$refs.payment.value = ""
        })
     },
     pays(value) {
       const data = {paypwd:value,cid:this.channel_id}
       this.PShow = false
        pays(data).then(res =>{
           if(res){
             this.$router.push('/paySuccess')
            }
              this.$refs.payment.value = ""
        })
     },
      upgrade1() {
       upgrade1({}).then(res =>{
           console.log(res)
           const { list,all_income } = res.data;
           this.all_income = all_income
           this.list = list.map(item=>{
             return {
               title:item.mobile+'（'+this.type[item.ustatus] +'）'+item.remark,
               money:item.income,
               istatus: item.status
             }
           })
       })
     },
      upgrade() {
       upgrade({}).then(res =>{
           console.log(res)
           const { list,all_income } = res.data;
           this.all_income = all_income
           this.list = list.map(item=>{
             return {
               title:item.mobile+'（'+this.type[item.ustatus] +'）'+item.remark,
               money:item.income,
               istatus: item.status
             }
           })
       })
     },
     userWallet() {
        userWallet({}).then(res =>{
           if(res) {
             const { data } = res
             this.name = data.wallet[0].name
             this.balance = data.wallet[0].balance
             this.channel_id = data.wallet[0].channel_id
             this.disabled = data.needsetpaypwd==1?false:true
             
           }
        })
     }
   } 
}
</script>
<style scoped>
#payType{position: absolute;left: 0;top:0;width: 100%;height: 100%;background: #2d3365;}
#payType .listWrap{ margin-top: 7.5px;background: #3e457c;}
#payType .listWrap li{ margin-left:15px ;display: flex;justify-content: space-between;padding: 20px 17.5px;
   color: #ffffff;
   border-bottom: 1px solid #9a9ebb;
   padding-left:0 ;
 }
#payType  .listWrap li:last-child {border: none;}
#payType  .listWrap li span{ display: inline-block; font-size: 16px;}
 #payType .van-button{border-radius: 5px;height: 45px;}
 #payType .van-button__text{font-size: 16px;}
</style>