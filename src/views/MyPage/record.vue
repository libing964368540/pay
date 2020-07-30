<template>
 <div class="record">
      <van-nav-bar
       title="账单"
       left-arrow
       @click-left="onClickLeft"
     /> 
  <van-tabs v-model="active">
  <van-tab title="收入">
    <div class="wrap">
       <ul>
         <van-list
             v-model="loading1"
             :finished="finished1"
             finished-text="没有更多了"
             :error.sync="error1"
             error-text="请求失败，点击重新加载"
            @load="onLoad"
           >
           <li class="flex" v-for="(item,index) in list1" :key="index" @click="lookDetails(item,1)">
               <span class="record-icon"></span>
               <div class="flex flex-y-center justify-content flex1" style="padding:0 10px">
                   <div>
                       <p>USDT</p>
                       <p style="color: #5a5f8b" v-text="changeTime(item.createtime)"></p>
                   </div>
                   <div class="money" v-text="'+'+item.income"></div>
               </div>
           </li>
          </van-list>
       </ul>
      </div>
  </van-tab>
  <van-tab title="支出">
     
    <div class="wrap">
       <ul>
         <van-list
             v-model="loading2"
             :finished="finished2"
             finished-text="没有更多了"
             :error.sync="error2"
             error-text="请求失败，点击重新加载"
            @load="onLoad2"
           >
           <li class="flex" v-for="(item,index) in list2" :key="index" @click="lookDetails(item,2)">
               <span class="record-icon"></span>
               <div class="flex flex-y-center justify-content flex1" style="padding:0 10px">
                   <div>
                       <p>USDT</p>
                       <p style="color: #5a5f8b" v-text="changeTime(item.createtime)"></p>
                   </div>
                   <div class="money" v-text="'-'+item.income"></div>
               </div>
           </li>
        </van-list>
       </ul>
      </div>
  </van-tab>
  <van-tab title="提现">
    <!-- <div class="flex record-select" style="color: #ffffff" @click="change">
        <span>2020年2月</span>
        <van-icon name="arrow-down" color="#ffffff" />
    </div> -->
    <div class="wrap">
       <ul>
         <van-list
             v-model="loading3"
             :finished="finished3"
             finished-text="没有更多了"
             :error.sync="error3"
             error-text="请求失败，点击重新加载"
            @load="onLoad3"
           >
           <li class="flex" v-for="(item,index) in list3" :key="index" @click="lookDetails(item,3)">
               <span class="record-icon"></span>
               <div class="flex flex-y-center justify-content flex1" style="padding:0 10px">
                   <div>
                       <p>USDT</p>
                       <p style="color: #5a5f8b" v-text="changeTime(item.createtime)"></p>
                   </div>
                   <div class="money" v-text="'-'+item.price"></div>
               </div>
           </li>
           </van-list>
       </ul>
      </div>
  </van-tab>
</van-tabs>
<van-action-sheet v-model="show"> 
<van-datetime-picker
  v-model="currentDate"
  :show-toolbar="true"
  type="year-month"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
  @confirm="confirm"
  @cancel="cancel"
/> 
</van-action-sheet> 
</div>   
</template>
<script>
import { RechargeRecord, reflectlogRecord,income,payRecord } from '@/api/pay'
import { timestampToTime } from '@/utils/util'
export default {
   name: 'record',
   data() {
    return {
      active: 0,
      list1: [],
      list2: [],
      list3: [], 
      list1Page: 0,
      list1Total: 0,
      loading1: false,
      finished1: false,
      error1: false,
      list2Page: 0,
      list2Total: 0,
      loading2: false,
      finished2: false,
      error2: false,
      list3Page: 0,
      list3Total: 0,
      loading3: false,
      finished3: false,
      error3: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 12, 1),
      currentDate: new Date(),
      show: false
      
    };
  },
  mounted() {
   
  },
   methods: {
     changeTime(createtime){
        return timestampToTime(createtime*1000)
     },
     change() {
      this.show = true
     },  
     onClickLeft() {
        this.$router.go(-1)   
     },
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      }
      return val;
    }, 
    confirm() {
       this.show = false
    },
    cancel() {
        this.show = false
    }, 
    // 获取充值记录
    RechargeRecord() {

    },
    // 获取提现记录
    reflectlogRecord() {
      const data = {
        page: this.list3Page,
        pagesize: 10
      }
      reflectlogRecord(data).then(res =>{
          if(res){
            this.loading3 = false;
            const { rows,total } = res.data
            for (let i = 0; i < rows.length; i++) {
              this.list3.push(rows[i]);
            }
            this.list3Total = total
            this.list3Page += 1
            if(this.list3.length==this.list3Total) {
               this.finished3 = true
            }
          }else{
             this.loading3 = false;
             this.error3 = true
          }
      })
    },
    income() {
       const data = {
        page: this.list1Page,
        pagesize: 10
       }
       income(data).then(res =>{
           if(res){
             // 加载状态结束
            this.loading1 = false;
            const { rows, total } = res.data
            for (let i = 0; i < rows.length; i++) {
              this.list1.push(rows[i]);
            }
            this.list1Total = total
            this.list1Page += 1
            if(this.list1.length==this.list1Total) {
               this.finished1 = true
            }
          }else{
            this.loading1 = false;
            this.error1 = true
          }
       })
    },
    payRecord() {
      const data ={
         page: this.list2Page,
         pagesize: 10
      }
      payRecord(data).then(res =>{
           if(res){
            this.loading2 = false;
            const { rows,total } = res.data
            this.list2Total = total
            for (let i = 0; i < rows.length; i++) {
              this.list2.push(rows[i]);
            }
            this.list2Page+=1
            if(this.list2.length==this.list2Total) {
               this.finished2 = true
            }
          }else{
            this.loading2 = false;
            this.error2 = true
          }
      })
    },
    //查询各类详情
    lookDetails(item,type) {
      if(type==1){ item.title="收入详情"}
      if(type==2){ item.title="支出详情"}
      if(type==3){ 
        item.title="提现详情"
        item.mobile = JSON.parse(sessionStorage.getItem('user')).mobile
         this.$router.push({
           name:'tixian',
           params:item
          })
        }else{
           this.$router.push({
            name:'RecordDetails',
             params:item
          })
        }
     
    },
    onLoad() {
       this.income()
     },
    onLoad2() {
       this.payRecord()
     },
    onLoad3() {
       this.reflectlogRecord()
    } 
   }  
}
</script>
<style>
.record .van-tabs__nav { background: #2d3365; color: #ffffff;}
.record .van-tab__text { color: #ffffff; }
.record .van-tabs__line {background-color: #52c41a;}
.record .wrap {padding-left: 15px;background: #3e457c;}
.record .record-icon {display: block;background: #33ad86;width:35px;height: 35px;border-radius: 5px;}
.record li{padding: 13px 0;border-bottom: 1px solid #9fa2b9; }
.record li p,.record li .money{color: #ffffff;}
.record .record-select {margin: 10px 0; border: 1px solid #ffffff;display: inline-block;border-radius: 5px;margin-left:15px;padding:5px;font-size: 12px;}
</style>