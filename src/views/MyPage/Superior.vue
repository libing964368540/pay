<template>
 <div id="Superior">
   <van-nav-bar
       title="上级信息"
       left-arrow
       @click-left="onClickLeft"
     />
    <div class="list">
        <ul>
            <li class="flex"><span>邀请码</span><p v-text="invite_code"></p></li>
            <li class="flex"><span>电话</span><p v-text="mobile"></p></li>
        </ul>
    </div>
</div>    
</template>
<script>
import { getPinfo } from '@/api/Mypage'
export default {
   name:'Superior',
   data() {
       return{
         invite_code:'',
         mobile:''
       }
   },
   mounted() {
    this.getPinfo()
   },
   methods:{
       onClickLeft() {
           this.$router.go(-1)
       },
       getPinfo() {
           const that = this;
          getPinfo({}).then(res =>{
              if(res) {
                  const { data } = res
                  that.invite_code = data.invite_code
                  that.mobile = data.mobile
              }
              
          }) 
       }
   } 
}
</script>
<style scoped>
#Superior{position: absolute;left: 0;top:0;width: 100%;height: 100%;background: #2d3365;}
#Superior .list{padding:20px 13px;background: #3e457c;color: #ffffff;font-size: 14px;margin-top:20px}
#Superior .list li{line-height: 30px;}
#Superior .list li span{display: inline-block;width: 75px;}
</style>