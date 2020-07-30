<template>
  <div class="type_3">
      <div class="title">申请</div>
     <div class="van-empty" style="margin-bottom:60px">
        <div class="van-empty__image">
             <img src="@/assets/imgdev/empty.jpg">    
        </div>
        <div class="van-empty__bottom">
            <p class="tips">恭喜你</p>
            <p class="tips">已完成全部申请任务</p> 
        </div> 
    </div>
    <Invitation /> 
  </div>
</template>
<script>
import Invitation from '@/components/Invitation'
export default {
   name:'type3',
   components:{
      Invitation 
   }
}
</script>
<style scoped>
.type_3 .title{ height:45px;line-height:45px;background: #ffffff;text-align: center;color: #2d3365;}
.type_3 .tips {color:#ffffff;text-align:center;margin-bottom:10px}
</style>