<template>
 <div class="WithdrawMoney">
   <van-nav-bar
       title="转账"
       left-arrow
       @click-left="onClickLeft"
     />
     <van-form @submit="onSubmit" :show-error-message="false">
      <div style="margin-top: 10px">
         <ListCell :title="titleS">
             <div slot="content">
            <div class="flex flex-y-center van-cell justify-content" v-for="(item,index) in wallet" :key="index" style="border-bottom:1px solid #2d3365">
                 <div><p class="tip flex flex-y-center"><span class="radio__inner"></span></p></div>
                 <div class="flex flex-y-center">
                     <span class="imgWrap"><img :src="'http://codex1.me'+item.image"></span> 
                      <span class="custom-title" v-text="item.name">USDT</span>
                 </div>
                   
            </div>
          <div style="margin-bottom: 20px">
           <div style="border-bottom:1px solid #2d3365">
             <van-field 
               label="对方账户" 
               placeholder="请输入账户" 
               input-align="right" 
               v-model="mobile" 
               type="tel" 
               maxlength="11"
                name="请输入账户"
              
              :rules="[{ required: true, message: '请输入账户' }]" 
               />
            </div>
            <div style="border-bottom:1px solid #2d3365">
               <van-field 
               label="转账金额" 
               placeholder="请输入转账金额" 
               input-align="right" 
               v-model="money" 
               type="digit" 
                name="请输入转账金额"
               :rules="[{ required: true, message: '请输入转账金额' }]" 
               />
            </div>  
             <p v-text="'转账费率为总金额的'+s_transfer+'%'" style="color:#ffffff;font-size:12px;text-align:right;padding-top:5px"></p>
              
         </div>
         </div>
         </ListCell> 
     </div>  
    <van-button  block type="info" color="#52c41a"  native-type="submit">
      确认
    </van-button>
    </van-form>
    <payment :show="PShow" @pay="ontransfer" ref="payment"></payment> 
</div>   
</template>
<script>
import Vue from 'vue';
import { Notify } from 'vant'
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);
Vue.use(Notify);
import { channel,transfer,userWallet } from '@/api/pay'
import ListCell from '@/components/ListCell'
import payment from '@/components/payment'
export default {
  name: 'transfer',
  components: {
     ListCell,
     payment
  },
  data() {
    return {
        s_transfer:'',
        wallet: [],
        titleS: '转账',
        cid:'',
        mobile:'',
        money: '',
        paypwd: '',
        PShow: false,
        needsetpaypwd:'',
        moneyS: '',
        inputTip:''
    }
  },
  mounted() {
     this.channel()
     this.userWallet()
  },
  methods: {
    
    onSubmit(){
     this.judge()
    },
      judge() {
    const shouXu = this.money*this.s_transfer/100
    const num = this.moneyS-this.money-shouXu
  
    if(this.money>0&&this.moneyS>0&&num>=0){
       this.setPasswordShow()
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
       if(this.needsetpaypwd){
           Dialog.alert({
              title: '提示',
            message: '请设置支付密码',
          }).then(() => {
            this.$router.push('/modifyPassword')
          });
        }else{
          this.PShow = true
        }
     },
    channel() {
      channel({}).then(res =>{
          const { data } = res;
          this.s_transfer = data.transfer
          this.wallet = data.list
          this.cid = data.list[0].id
      })
    },
    onClickLeft() {
       this.$router.go(-1)  
    },
    ontransfer(value){
       this.PShow = false
       const data ={
            cid: this.cid,
          mobile: this.mobile,
           money: this.money,
          paypwd: value
       }
       transfer(data).then(res =>{
          if(res) {
             this.mobile = ''
             this.money = ''
              Notify({ type: 'success', message: '操作成功' });
          }
            this.$refs.payment.value = ""
       })
   
    },
    userWallet() {
        userWallet({}).then(res =>{
             if(res) {
                const { data } = res
                this.moneyS = data.wallet[0].balance
                this.needsetpaypwd = data.needsetpaypwd
             } 
        })
     }   
}   
 
}
</script>
<style>
.WithdrawMoney .van-cell {background: #3e457c;padding-left: 10px;padding-right: 10px;margin-bottom:5px;}
.WithdrawMoney .van-cell:not(:last-child)::after {border: none;}
 .WithdrawMoney .imgWrap { width: 30px;height: 30px; background: #33ab85;display: block;margin-right:10px;border-radius: 5px;}
  .WithdrawMoney .imgWrap img{ width: 30px;height: 30px;}  
.WithdrawMoney .van-notice-bar { color: #262624;background: #fffff1;margin-bottom: 62px;}
.WithdrawMoney .van-button{width: 295px;margin: 0 auto;border-radius: 5px;height: 45px;}
.WithdrawMoney .van-button__text{font-size: 16px;}
.WithdrawMoney .content { padding: 16px 16px 160px;}
.WithdrawMoney .content li .tag { color: #6a73b6; margin-bottom:10px ;}
.WithdrawMoney .content .imgWrap {width: 45px; height: 45px; background: #32aa86; border-radius: 10px;margin-right:10px;overflow: hidden;}
.WithdrawMoney .content .imgWrap img {width: 100%;height: 100%;}
.WithdrawMoney .content span{ color: #6a73b6}
</style>