<template>
 <div class="RecordDetails">
    <van-nav-bar
       :title="title"
       left-arrow
       @click-left="onClickLeft"
     /> 
     <div class="wrap">
     <ul>
         <li class="flex justify-content"><p>金额</p><p v-text="income"></p></li>
         <li class="flex justify-content"><p>渠道名称</p><p v-text="name"></p></li>
         <li class="flex justify-content"><p>创建时间</p><p v-text="changeTime(createtime)"></p></li>
         <li class="flex justify-content"><p>类型</p><p v-text="type"></p></li>
         <li class="flex justify-content"><p>对方账户</p><p v-text="mobile"></p></li>
     </ul>
     </div>
 </div>  
</template>
<script>
import { timestampToTime } from '@/utils/util'
export default {
  name: 'RecordDetails',
  
  data(){
    return {
      title:'',
      income:'',
      remark:'',
      createtime:'',
      type:'',
      name:'',
      mobile:''
    }
  },
  mounted() {
    const {income,remark,createtime,type,name,mobile,title}=this.$route.params
      this.income=income
      this.remark=remark
      this.createtime=createtime
      this.type=type
      this.name=name
      this.mobile = mobile
      this.title = title
  },
  methods:{
     changeTime(createtime){
        return timestampToTime(createtime*1000)
     },
    onClickLeft() {
      this.$router.go(-1)
    }
  }    
}
</script>
<style>
.RecordDetails .wrap {padding-left: 15px;background: #3e457c;margin-top:10px;}
.RecordDetails .record-icon {display: block;background: #33ad86;width:35px;height: 35px;border-radius: 5px;}
.RecordDetails li{padding: 20px 15px;border-bottom: 1px solid #9fa2b9; }
.RecordDetails li p,.record li .money{color: #ffffff;}
.RecordDetails li:last-child{border:none}
</style>