<template>
  <div class="Invitation"> 
       <ListCell :title="title">
           <div slot="content">
            <ul class="Invitation_list">
              <li class="flex justify-content" style="color:#ffffff;padding-bottom:15px;"><span>手机号</span><span>vip</span><span style="text-align:center">时间</span></li>
              <li class="flex justify-content" style="color:#ffffff;padding-bottom:15px" v-for="(item,index) in list" :key="index">
                <span v-text="item.mobile"></span><span v-text="item.vip"></span><span v-text="changeTime(item.createtime*1000)"></span></li>
          </ul>
           </div>
       </ListCell>  
  </div>
</template>
<script>
import ListCell from '@/components/ListCell'
import { invite_people } from '@/api/code'
import { timestampToTime } from '@/utils/util'
export default {
    name: 'Invitation',
    components:{
      ListCell  
    },
    mounted() {
      this.invite_people()
    },
    data() {
       return {
        title:'我直推的用户',
        list: []
       } 
    },
    methods:{
      changeTime(time) {
        return timestampToTime(time)
      },
      invite_people() {
        const data = {
          page:0,
          size:1000
        }
        invite_people(data).then(res =>{
            const { data } = res;
            this.list = data
           
        })
      }
    }
}

</script>
<style>
.Invitation .Invitation_list span{display:inline-block;width:33.3% }
.Invitation .Invitation_list {padding:10px 10px;text-align: center;}
.Invitation .Invitation_list li span:nth-child(1){width:100px}
.Invitation .Invitation_list li span:nth-child(2){width:50px}
.Invitation .Invitation_list li span:nth-child(3){width:150px}
.Invitation .Invitation_list li:nth-child(1) span{ padding-left:15px;text-align: center;}
</style>