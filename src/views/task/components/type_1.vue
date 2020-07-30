<template>
  <div class="task_1">
      <ListCell :title="title" v-show="flag">
          <div slot="content">
              <p class="tip" v-text="vip">恭喜您，获得了V2升V3的资格，请点击按钮去支付</p>
              <countDown :time="time" @finish="finish"/>
              <div style="padding:0 15px">
                <van-button type="primary" block color="#52c41a" @click="pay">去支付</van-button>
             </div>
          </div>
      </ListCell>
  </div>    
</template>
<script>
import ListCell from '@/components/ListCell'
import countDown from '@/components/countDown'
import { getTask } from '@/api/task'
export default {
    name: 'task1',
   components: {
     ListCell,
    countDown,
   },
   data() {
     return {
        title: '',
        time: '',
        vip: '',
        flag: false 
     }  
   },
   mounted() {
    this.getTask()
   },
   methods:{
    getTask() {
       getTask({}).then(res =>{
          if(res){
            const { data } = res;
            if(data) {
               this.flag = true;
                const count =data.end_time*1000 - new Date().getTime()
               this.title = data.explain
               this.time = count>0?count:0
               this.vip = `恭喜您，获得了升级v${data.vip}的资格，请点击按钮去支付`
            }else{
                this.flag = false;
            }
            
          }
       })
    },
    finish() {
   //   this.getTask()
    },
    pay() {
        this.$router.push('/payType')
    } 
   }
}
</script>
<style scoped>
.task_1 .tip {line-height:25px;text-align: center;color: #ffffff;font-size:14px;padding: 20px;}
.van-button--block {border-radius: 5px}
</style>