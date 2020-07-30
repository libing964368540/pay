<template>
 <div class="RecordDetails">
    <van-nav-bar
       :title="title"
       left-arrow
       @click-left="onClickLeft"
     /> 
     <div class="wrap">
     <ul>
         <li class="flex justify-content"><p>金额</p><p v-text="price"></p></li>
         <li class="flex justify-content"><p>渠道名称</p><p v-text="cname"></p></li>
         <li class="flex justify-content"><p>地址</p><p v-text="address" style="font-size:13px"></p></li>
         <li class="flex justify-content"><p>创建时间</p><p v-text="changeTime(createtime)"></p></li>
         <li class="flex justify-content"><p>状态</p><p v-text="status"></p></li>
         <li class="flex justify-content"><p>备注</p><p v-text="remark"></p></li>
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
      price:'',
      remark:'',
      createtime:'',
      status:'',
      cname:'',
      mobile:'',
      address:''
    }
  },
  mounted() {
    const {price,remark,createtime,status,cname,mobile,title,address}=this.$route.params
      this.price= price
      this.remark=remark
      this.createtime=createtime
      this.status=status
      this.cname=cname
      this.mobile = mobile
      this.title = title
      this.address = address
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