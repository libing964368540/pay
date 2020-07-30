<template>
 <div class="WithdrawMoney">
   <van-nav-bar
       title="提现"
       left-arrow
       @click-left="onClickLeft"
     />
      <van-form @submit="onSubmit" :show-error-message="false">
      <div style="margin-top: 10px">
        <van-field  
          placeholder="输入金额"  
          input-align="right" 
          v-model="money"
           name="请输入金额"
          :rules="[{ required: true, message: '请输入金额' }]" 
          @input="inputs"
          type="digit">
          <template #left-icon>
              <div class="flex flex-y-center">
                   <span class="imgWrap"><img :src="'http://codex1.me'+wallet[0].image"></span> 
                  <span class="custom-title" v-text="wallet[0].name">USDT</span>
              </div>
          </template>
        </van-field>
        <div class="flex justify-content">
           <p v-text="'提现费率为总金额的'+t_transfer+'%'" style="line-height: 45px;text-align:right;color:#ffffff;font-size: 14px;padding: 0 10px;"></p>
            <p style="line-height: 45px;text-align:right;color:#ffffff;font-size: 14px;padding: 0 10px;" v-text="'可用余额：'+moneyS"></p>
        </div>
       <p style="line-height: 45px;text-align:right;color:#ff4747;font-size: 14px;padding: 0 10px;font-weight:bold" v-text="inputTip"></p>
     </div>  
       <div style="margin-bottom: 20px">
           <div>
             <van-field 
             label="地址" 
             placeholder="输入接收地址"
             name='输入接收地址' 
             input-align="right" 
             v-model="address"
             :rules="[{ required: true, message: '输入接收地址' }]" 
             />
            </div>  
           <van-field label="留言" placeholder="输入备注" input-align="right" v-model="remark"/>
       </div>
       
    
    <van-notice-bar wrapable :scrollable="false">
      最小提现金额为 100 USDT，最大 1000000 USDT，转账后需要进行确认，确认后会转入您的账户
   </van-notice-bar> 
    <van-button  block type="info" color="#52c41a"  native-type="submit">
      确认
    </van-button>
  </van-form>
      <payment :show="PShow" @pay="reflect" ref="payment"></payment>
    
</div>   
</template>
<script>
import Vue from 'vue';
import { Notify } from 'vant'
import { Dialog } from 'vant';
// 全局注册
Vue.use(Dialog);
Vue.use(Notify);
import { reflect, linkslog, userWallet,channel } from '@/api/pay'
import payment from '@/components/payment'
export default {
  name: 'WithdrawMoney',
  components:{
     payment
  },
  data() {
    return {
        value: '',
        money: '',
        cid: '',
        remark: '',
        address: '',
        show: false,
        list: [],
        moneyS: '',
        wallet:[],
        channel_id:'',
        needsetpaypwd:'',
        transfer:'',
        t_transfer:'',
        PShow: false,
        inputTip:''
    }
  },
  mounted() {
    this.userWallet()
     this.channel()
  },
  methods: {
    inputs(val) {
      if(val){
       let num = val*this.t_transfer/100
       let numTotal = val- num
       this.inputTip= `实际到账金额为${numTotal}, 提现收费${num}`
      }else{
        this.inputTip= ''
      }
       
    },
    onSubmit(){
     this.judge()
    },
    judge() {
    const num = this.moneyS-this.money
    
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
          this.t_transfer = data.txtransfer
      })
    },
    onClickLeft() {
       this.$router.go(-1)  
    },
    reflect(value) {
           this.PShow = false
          const data = {
          money: this.money,
          cid: this.channel_id,
          remark: this.remark,
          address: this.address,
          paypwd:value
      }
      reflect(data).then(res =>{
        if(res){
            Notify({ type: 'success', message: '操作成功' });
             this.money ="",
             this.remark ="",
             this.address =""
             this.userWallet()
              this.inputTip= ''
        }
           this.$refs.payment.value = ""
      })
      
    },
    linkslog() {
      const data = {
         page: 0,
         size: 100
      }
      linkslog(data).then(res =>{
          if(res) {
             const { rows } = res.data
             this.list = rows
          }
      })
    },
    chooseAddress(item) {
       this.address = item.link
       this.show = false
    },
    userWallet() {
        userWallet({}).then(res =>{
             if(res) {
                const { data } = res
                this.wallet = data.wallet
                this.moneyS = data.wallet[0].balance
                this.channel_id = data.wallet[0].channel_id
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