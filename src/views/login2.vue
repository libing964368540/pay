<template>
   <div class="login2">
       <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <!-- <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  /> -->
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
  </div> 
</template>
<script>
import { login2 } from '@/api/user'
import { setNavColor,saveImg,copyToClip } from '@/utils/plus.js'
export default {
   name: 'login2',
   data() {
       return {
          username: '',
          // password: '' 
       }
   },
   mounted() {
     setNavColor()
   },
   methods: {
      onSubmit() {
          const data ={
               mobile: this.username,
              //  password: this.password 
          }
          login2(data).then(res =>{
            
              if(res){
              sessionStorage.setItem('token', res.data.token)
              // Notify({ type: 'success', message: '登录成功' });
               this.$router.push({path: '/'}) 
              }
          })
      }
   }   
}
</script>
<style scoped>

</style>