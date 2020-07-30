<template>
   <div id="PaySuccess">
       <div class="success">
            <van-icon name="checked" color="#52c41a" size="170" />
            <p>恭喜您，支付成功</p> 
            <van-button  block type="info" @click="onClick">
          确定
        </van-button>
       </div>

       
   </div> 
</template>
<script>
export default {
    name:'PaySuccess',
   methods:{
      onClick() {
          this.$router.go(-2)
      } 
   } 
}
</script>
<style scoped>
#PaySuccess {
   position: absolute;left: 0;top:0;width: 100%;height: 100%;background: #2d3365; 
}
#PaySuccess .success{width: 200px;margin: 35px auto;color:#ffffff;text-align: center;}
#PaySuccess .success p{
    font-size: 20px;
    margin-bottom: 45px;
}
</style>