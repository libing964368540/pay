<template>
  <div id="ApplyForPayment">
    <div class="title">申请</div>
    <div class="content">
         <div class="deatils" style="margin-bottom:25px">
             <p class="biti">申请流程</p>
             <div style="padding:10px 25px 10px">
               <!-- <div class="border">
                 <p>本次申请条件</p>
                 <p class="tip">本次升级累计收到0.000元赠金</p>
             </div> --> 
              <div class="border">
                 <p>本次需转赠金</p>
                 <p class="tip" v-text="price+'   USDT'"></p>
             </div>
              <div class="border">
                 <p>可选择支付方式</p>
                    <p class="tip flex flex-y-center"><span class="radio__inner"></span><span>钱包支付</span></p>
                   <!-- <van-radio-group v-model="radio" direction="horizontal">
                     <van-radio name="1">圈圈社交钱包支付</van-radio>
                  </van-radio-group> -->
                
             </div>
              <div class="border" style="border:none">
                 <p class="tip">需要在24小时之内进行提交申请</p>
             </div>
             </div>
         </div>
         <div style="width:300px;margin:0 auto">
            <van-button type="primary" block color="#3b49ba" @click="createTask">提交</van-button>
         </div>
         
    </div>
   
</div>  
</template>
<script>
import { createTask,getprice } from '@/api/pay'
export default {
    data() {
      return {
         time: 30 * 60 * 60 * 1000,
         radio: 1,
         price: 0
      }
   },
   mounted() {
    this.getprice()
   },
   methods:{
     onClick() {
       
     },
     createTask() {
        this.$router.push('/payType')
      //  createTask({}).then(res => {
      //      if(res){
      //       //   this.$router.push('/choose')
      //        this.$router.push('/payType')
      //      }
          
      //  })
     },
     getprice() {
       getprice({}).then(res =>{
          if(res){
            const { data } = res
            this.price = data
          }
       })
     }
   }  
}
</script>
<style scoped>
#ApplyForPayment .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color: #2d3365;}
#ApplyForPayment .content {position: absolute;top:45px;width: 100%;height: 100%;background: #2d3365;padding:17px 8px 0;box-sizing: border-box;}
#ApplyForPayment .deatils {background: #3e457c;border-radius:10px;color: #ffffff;}
#ApplyForPayment .biti {border-bottom:1px solid #ffffff;line-height: 45px;font-weight: bold;padding:0 25px;font-size: 18px;}
#ApplyForPayment .border {border-bottom:1px solid #ffffff;padding-top:12px;}
#ApplyForPayment .border p {padding-bottom:12px;}
#ApplyForPayment .tip {color: #d5b033}
#ApplyForPayment .van-button--block {border-radius: 5px;} 
</style>