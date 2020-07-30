<template>
  <div class="WorkOrder">
     <van-nav-bar
       title="提交工单"
       left-arrow
       @click-left="onClickLeft"
     /> 

    <div style="padding:10px 10px 30px">
       <van-form  @submit="onSubmit" :show-error-message="false">
        <van-field
         v-model="notice"
         rows="4"
         autosize
         type="textarea"
         placeholder="请输入问题"
         maxlength="50"
        />
         <div>
           <van-button  block type="info" native-type="submit" color="#3845a9">提交</van-button>
         </div>
       </van-form>  
    </div>
    <div>
        <ListCell :title="title">
            <div slot="content" >
                <ul style="padding: 30px 15px">
                  <van-list
                     v-model="loading1"
                     :finished="finished1"
                     finished-text="没有更多了"
                     :error.sync="error1"
                     error-text="请求失败，点击重新加载"
                     @load="onLoad"
                    >
                  <li v-for="(item,index) in problemList" :key="index">
                     <div class="flex"><span class="title" v-text="'问题'+(index+1)"></span><span v-text="changeTime(item.createtime)"></span></div>
                        <div class="content" style="padding-left:60px" v-text="item.notice"></div>
                    <div v-if="item.content">
                       <div class="flex"><span  class="title">回复 </span><span v-text="changeTime(item.updatetime)"></span></div>
                      <div class="content" style="padding-left:60px" v-text="item.content"></div>
                    </div>  
                  </li>
                   </van-list>
            </ul>  
            </div>
        </ListCell>
       
    </div>  
  </div>  
</template>
<script>
import Vue from 'vue';
import { Dialog } from 'vant';
import { Notify } from 'vant'
import List from '@/components/list'
import ListCell from '@/components/ListCell'
import { detail, noticeS,lists } from '@/api/notice'
import { timestampToTime } from '@/utils/util'
export default {
   name:'workOrder',
   components: {
    ListCell
   },
   data() {
      return {
          title:'回复专区',
          message:'',
          problemList:[],
          notice:'',
           list1Page: 0,
          list1Total: 0,
         loading1: false,
         finished1: false,
         error1: false,
      }
   },
   mounted() {
     
   },
   methods: {
      onLoad() {
       this.lists() 
     },
     changeTime(createtime){
        return timestampToTime(createtime*1000)
     },
     onSubmit() {
       this.Onnotice()
     },
     onClickLeft() {
       this.$router.go(-1)  
     }, 
     //提交问题
     Onnotice() {
       const data = {
          notice: this.notice
       }
       noticeS(data).then(res =>{
          if(res){
             Notify({ type: 'success', message: res.msg });
             this.notice = ""
             this.list1Page= 0
             this.list1Total= 0,
             this.loading1= false
             this.finished1= false
             this.error1= false
             this.problemList = []
         
          }  
       })
     },
     //获取问题列表
     lists() {
       const data ={
         page: this.list1Page,
         pagesize: 10
       }
       lists(data).then(res =>{
         if(res) {
            // 加载状态结束
            this.loading1 = false;
           const { rows,total} = res.data
             for (let i = 0; i < rows.length; i++) {
              this.problemList.push(rows[i]);
            }
            this.list1Total = total
            this.list1Page += 1
          if(this.problemList.length==this.list1Total) {
               this.finished1 = true
            }
         }else{
            this.loading1 = false;
            this.error1 = true
         }
         
       }).catch(err =>{
          this.loading1 = false;
           this.error1 = true
       })
     }
   } 
}
</script>
<style>
 .WorkOrder .van-button{border-radius: 5px;height: 45px;}
 .WorkOrder .van-button__text{font-size: 16px;}
.WorkOrder .van-cell:not(:last-child)::after {left: 0;border: none}
.van-field__control {margin:10px 0;border: 1px solid #3e457c;padding: 10px;}
.WorkOrder {color: #ffffff;}
.WorkOrder ul li {margin-bottom: 10px;}
.WorkOrder .title {color: #f8680d;width: 60px;}
.WorkOrder .content {padding:5px 0 20px 60px;border: 1px solid #3e457c;}
</style>