<template>
<div class="type_2" style="padding-bottom:50px;">
    <div class="title">申请</div>
    <ListCell :title="title">
        <div slot="content">
            <p class="type_1_tip">请在24小时内直推3人进入游戏</p>
            <countDown />
            <QRcode />
        </div>
    </ListCell>
    <Invitation /> 
</div>
</template>
<script>
import ListCell from '@/components/ListCell'
import QRcode from '@/components/QRcode.vue'
import Invitation from '@/components/Invitation'
import countDown from '@/components/countDown'
export default {
    name: 'type1',
    data(){
      return{
          title:'任务'
      }
    },
    components:{
      QRcode,
      Invitation,
      ListCell,
      countDown  
    }
}
</script>
<style>
.type_2 .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color: #2d3365;}
.type_2 .Apply_1 {background:#3e457c;margin:10px;border-radius:10px;}
.type_2 .type_1_tip { color:#ffffff;font-size:14px;padding:20px;line-height:25px;}
</style>