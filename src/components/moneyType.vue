<template>
  <div class="moneyType"> 
     <van-nav-bar
       title="币种选择"
       left-arrow
       @click-left="onClickLeft"
     />
     <div>
         <ul>
             <li v-for="(item,index) in list" :key="index" class="flex flex-y-center"><span class="imgWrap"><img :src="'http://47.245.53.54'+item.image"></span><p v-text="item.name"></p></li>
        </ul>  
     </div>
 </div>
</template>
<script>
import { channel } from '@/api/pay'
export default {
   name:'moneyType',
   data() {
     return {
         list :[]
     }
   },
   mounted() {
    this.channel()
   },
   methods: {
      onClickLeft() {
         this.$router.go(-1) 
      },
      channel() {
         channel({}).then(res =>{
            const { data } = res;
            this.list = data;
         })  
      } 
   } 
}
</script>
<style scoped>
.moneyType ul {
    background: #3e457c;
    padding-left: 15px;
    margin-top: 10px;
}
.moneyType ul li { padding: 15px 15px 15px 0;border-bottom:1px solid #9fa2b9;}
.moneyType ul li:last-child {border: none}
.moneyType ul li span.imgWrap {display: block;border-radius:5px; width: 45px;height: 45px;}
.moneyType ul li span.imgWrap img { width: 100%;height: 100%;}
.moneyType ul li p {color: #ffffff; margin-left:15px}
</style>