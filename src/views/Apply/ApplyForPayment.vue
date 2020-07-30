<template>
  <div class="ApplyWrap">
       <type0 v-if="show0"/>
        <type1 v-if="show1" :timeS="time"/> 
        <!-- <type2 v-if="show2"/> -->
       <type3 v-if="show3"/> 
  </div>
</template>
<script>
import type0 from './components/type_0'
import type1 from './components/type_1'
import type3 from './components/type_3'
import { ttask } from '@/api/pay'
export default {
   components:{
     type0,
     type1,
     type3
   },
   data() {
     return {
       show0: false,
       show1: false,
       show3: false,
       time:''
     }
   },
   mounted() {
       this.ttask()
   },
   methods: {
      ttask() {
        ttask({}).then(res =>{
           if(res) { //0 未完成  1 完成  2 过期
             const { data } = res
             if(data){
               const count =data.end_time*1000 - new Date().getTime()
                   
               this.time = count>0?count:0
              
                this.show0 = false
                this.show1 = true
                this.show3 = false
             }else {
               const userData = JSON.parse(sessionStorage.getItem('user'))
               const vip = userData.vip
               if(vip>0){
                  this.show0 = false
                this.show1 = false
                this.show3 = true
               }else{
                  this.show0 = true
                  this.show1 = false
                  this.show3 = false
               }
               
             }
           }
          
        })
     }
   }
}
</script>
<style>

</style>