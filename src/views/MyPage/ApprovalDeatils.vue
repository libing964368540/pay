<template>
   <div class="ApprovalDeatils">
      <van-nav-bar
       title="团队详情"
       left-arrow
       @click-left="onClickLeft"
     />
        <ul>
            <li class="flex justify-content">
                <!-- <span>姓名</span> -->
                <span style="width:30%">手机号</span>
                <span>回报值</span>
                <span>等级</span>
                <span>状态</span>
            </li>
            <van-list
             v-model="loading"
             :finished="finished"
             finished-text="没有更多了"
             :error.sync="error"
             error-text="请求失败，点击重新加载"
            @load="onLoad"
           >
            <li v-for="(item,index) in list" :key="index" class="flex justify-content">
                 <span v-text="item.mobile"></span>
                <span v-text="item.huibao"></span>
                <span v-text="item.vip"></span>
                <span v-text="type[item.status]"></span>
            </li>
             </van-list>
        </ul>
    </div> 
</template>
<script>
import { getTeamM } from '@/api/Mypage'
export default {
  name: 'ApprovalDeatils',
  data() {
    return {
      list :[],
      type: {"normal":"正常","hidden":"冻结","activate":"待激活"},
      loading: false,
      finished: false,
      error: false,
      page:0,
      total:0
    }
  },
  mounted() {
  
  },
  methods: {
      onClickLeft() {
        this.$router.go(-1)  
      },
      getTeamM() {
       const params= {
          page: this.page,
          pagesize: 10,
         vip:this.$route.params.vip
        }
        getTeamM(params).then(res =>{
          if(res){
            this.loading = false;
             const { rows,total } = res.data; 
           
            for (let i = 0; i < rows.length; i++) {
              this.list.push(rows[i]);
            }
            this.total = total
            this.page += 1
            if(this.list.length==this.total) {
               this.finished = true
            }
          }else{
              this.loading = false;
             this.error = true
          }
             
        })  
    },
    onLoad() {
       this.getTeamM()
    }
  } 
}
</script>
<style scoped>
.ApprovalDeatils { color: #ffffff; }
.ApprovalDeatils ul li {padding: 20px 13px; border-bottom: 1px solid #3e457c;}
</style>