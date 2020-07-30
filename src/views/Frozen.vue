<template>
  <div id="Frozen">
     <van-notice-bar wrapable :scrollable="false">
      请在规定时间内完成直推一人的任务完成账号解封操作
   </van-notice-bar>
   <ListCell :title="title">
     <div slot="content" style="padding-top:20px">
        <!-- <countDown /> -->
       <QRcode />
     </div>
   </ListCell>
   
</div>  
</template>
<script>
import countDown from '@/components/countDown'
import QRcode from '@/components/QRcode'
import ListCell from '@/components/ListCell'
export default {
   name:'Frozen',
   components:{
     countDown,
     QRcode,
     ListCell
   },
    mounted() {
    },
   data() {
       return {
            title:'冻结'
       }
   } 
}
</script>
<style scoped>
#Frozen {
    padding-bottom:2rem ;
}
.flex {
    display: flex;
}
.time{
    line-height: 2rem;
}
.imgWrap{background: #bbbbbb;width: 7rem;height: 7rem;display: inline-block;}
</style>