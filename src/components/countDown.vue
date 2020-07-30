<template>
<div class="countDown">
    <p class="countDown_tip">任务完成剩余时间</p>
     <van-count-down  millisecond :time="time"  @finish="finish"  format="HH:mm:ss">
           <template v-slot="timeData">
                <span class="block">{{timeData.days*24+timeData.hours< 10 ?'0'+timeData.hours:timeData.days*24+timeData.hours }}</span><span class="colon">:</span><span class="block">{{ timeData.minutes<10?'0'+ timeData.minutes: timeData.minutes }}</span><span class="colon">:</span><span class="block">{{ timeData.seconds<10?'0'+timeData.seconds:timeData.seconds }}</span>
          </template>
     </van-count-down>
     <p class="tip">如任务时间内未完成，您的账号将被冻结</p>
</div>
</template>
<script>
export default {
  name:'countDown', 
  props:{
    time: {
      type:[Number,String],
      default: 0
    }
  },
  methods:{
    finish() {
       this.$emit('finish')
    }
  }
};
</script>
<style scoped>
  .countDown {text-align: center}
  .countDown .countDown_tip {color:#e0b822;padding-bottom:18px;font-size:14px}
  .countDown .tip {color: #ffffff;font-size: 14px;padding: 20px;line-height: 25px;}
  .countDown .van-count-down {font-weight:blod;font-size:50px;color:#e0b822;}
  .countDown .colon {
    display: inline-block;
    margin: 0 4px;
  }
   .countDown .block {
    display: inline-block;
    /* width: 50px; */
    font-size:50px;
    text-align: center;
  }
</style>