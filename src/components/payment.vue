<template>
<div class="payment">
   <van-overlay :show="show" @click="show = false" >
      <div class="wrapper" @click.stop>
         <div class="block">
          <!-- 密码输入框 -->
         <van-password-input
            :value="value"
            info="密码为 6 位数字"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            
           />
         </div>
         <van-number-keyboard
           :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
         />
      </div>
   </van-overlay>
</div>
</template>
<script>
import Vue from 'vue';
import { PasswordInput, NumberKeyboard } from 'vant';
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
export default {
   name: 'payment',
   props:{
      show:{
         type:[Boolean],
         default: false
      }
   },
   data() {
      return {
         value: '',
         showKeyboard: true
      }
   },
   methods:{
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
        if(this.value.length==6){
           this.$emit('pay',this.value)
        }
      },
      onDelete() {
         this.value = this.value.slice(0, this.value.length - 1);
      },
   }  
}
</script>
<style>
.payment .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

.payment  .block {
    width: 250px;
    height: 100px;
    background-color: #fff;
    padding: 20px 10px;
    border-radius:10px;
  }
</style>