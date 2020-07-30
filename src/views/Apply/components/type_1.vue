<template>
<div class="type_1" style="padding-bottom:50px;">
    <div class="title">申请</div>
    <ListCell :title="title">
        <div slot="content">
            <p class="type_1_tip" style="text-align:center">新入团用户必须在20日内直推3人进入游戏</p>
            <countDown :time="timeS" />
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
    props:{
       timeS:{
        type:[Number,String],
        default: 0
        }
    },
    data(){
      return{
        title:'任务',
        
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
.type_1 .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color: #2d3365;}
.type_1 .Apply_1 {background:#3e457c;margin:10px;border-radius:10px;}
.type_1 .type_1_tip { color:#ffffff;font-size:14px;padding:20px;line-height:25px;}
</style>