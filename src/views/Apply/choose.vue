<template>
  <div id="choose">
    <van-nav-bar
       title="我的邀请码"
       left-arrow
       @click-left="onClickLeft"
     />
    <div class="list" style="margin-bottom:25px">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p style="margin-bottom:20px" v-text="(index+1)+'.抱团取暖系统终身只需投入多少金额？'"></p>
                <van-radio-group v-model="radio" direction="horizontal">
                  <van-radio name="1">200</van-radio>
                   <van-radio name="2">500</van-radio>
                   <van-radio name="3">1000</van-radio>
                   <van-radio name="4">1万以上</van-radio>
                 </van-radio-group>
            </li>
        </ul>
   </div> 
   <div style="padding:0 30px">
        <van-button type="primary" block color="#3b49ba" @click="onClick">提交</van-button>
   </div>
  
 </div>  
</template>
<script>

export default {
   name:'choose',
   data() {
     return {
         list:['','','','',''],
         radio:1
     }
   },
   methods:{
     onClickLeft() {
         this.$router.go(-1)
     },
     onClick() {
         this.$router.push('/payType')
     }  
   } 
}
</script>
<style scoped>
#choose {position: absolute;left: 0;top:0;width: 100%;height: 100%;background: #2d3365;}
#choose li{ background:#3e457c;color: #ffffff;padding:15px;margin-top:10px}
#choose li .van-radio--horizontal {margin-right: 20px;}
</style>