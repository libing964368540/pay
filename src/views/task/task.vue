<template>
   <div id="task" style="padding-bottom:50px">
    <div class="title">任务中心</div>
    <task1 />
   </div> 
</template>
<script>
import task1 from './components/type_1'

export default {
   components:{
     task1
   },
   data() {
      return {
         time: 30 * 60 * 60 * 1000
      }
   },
  
}
</script>
<style scoped>
#task .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color: #2d3365;}
#task .content {position: absolute;top:45px;width: 100%;height: 100%;background: #2d3365;padding:10px 8px 0;box-sizing: border-box;}
#task .deatils {background: #3e457c;border-radius:10px;color: #ffffff;}
#task .biti {border-bottom:1px solid #ffffff;line-height: 45px;font-weight: bold;padding:0 20px;font-size:18px}
#task .border {padding-top:15px;}
#task .border p {padding-bottom:14px;}
.van-button__text {font-size:20px; }
</style>