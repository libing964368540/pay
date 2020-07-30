<template>
<div class="task_2">
     <ListCell :title="title">
          <div slot="content">
              <p class="tip">30日内伞下一层3名用户必须达成升级V2的任务</p>
              <countDown />
              <div style="padding:0 15px">
                <van-button type="primary" block color="#3b49ba">去邀请</van-button>
             </div>
          </div>
      </ListCell>
      <Invitation />
</div>
</template>
<script>
import ListCell from '@/components/ListCell'
import countDown from '@/components/countDown'
import Invitation from '@/components/Invitation1'
export default {
   name:'task2',
   components: {
     ListCell,
     countDown,
     Invitation
   },
    data() {
     return {
        title: '任务类型2' 
     }  
   } 
}
</script>
<style scoped>
.task_2 .tip {line-height:25px;text-align: center;color: #ffffff;font-size:14px;padding: 20px;}
.van-button--block {border-radius: 5px}
</style>