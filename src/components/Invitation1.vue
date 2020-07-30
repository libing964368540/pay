<template>
  <div class="Invitation"> 
       <ListCell :title="title">
           <div slot="content">
            <ul class="Invitation_list">
              <li class="flex justify-content" style="color:#ffffff;padding-bottom:15px;"><span>姓名</span><span>手机号</span><span>VIP等级</span><span>完成时间</span></li>
              <li class="flex justify-content" style="color:#ffffff;padding-bottom:15px"><span>张三三</span><span>135888888</span><span>v2</span><span>2020.05.01</span></li>
              <li class="flex justify-content" style="color:#ffffff;padding-bottom:15px"><span>张三三</span><span>135888888</span><span>v2</span><span>2020.05.01</span></li>
              <li class="flex justify-content" style="color:#ffffff;padding-bottom:15px"><span>张三三</span><span>135888888</span><span>v2</span><span>2020.05.01</span></li>
          </ul>
           </div>
       </ListCell>  
  </div>
</template>
<script>
import ListCell from '@/components/ListCell'
export default {
    name: 'Invitation',
    components:{
      ListCell  
    },
    data() {
       return {
        title:'我直推的用户'
       } 
    }
}

</script>
<style>
.Invitation .Invitation_list span{display:inline-block;width:25%;text-align: center;}
.Invitation .Invitation_list {padding:10px 20px}
 .Invitation .Invitation_list li span:nth-child(1){width:20%}
.Invitation .Invitation_list li span:nth-child(2){width:20%}
.Invitation .Invitation_list li span:nth-child(3){width:25%}
.Invitation .Invitation_list li span:nth-child(4){width:25%}

</style>