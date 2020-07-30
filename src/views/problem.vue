<template>
  <div class="problem">
      <van-nav-bar
       title="问题详情"
       left-arrow
       @click-left="onClickLeft"
     /> 
     <div v-html="content" class="content"></div>
  </div>    
</template>
<script>
export default {
   name: 'problem',
   data() {
      return {
        content:''
      }
   },
   mounted() {
     this.content = this.$route.params.content
   },
   methods: {
      onClickLeft() {
        this.$router.go(-1)
      } 
   } 
}
</script>
<style>
  .problem .content{ padding: 20px;color: #ffffff;}
</style>