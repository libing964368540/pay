<template>
    <div id="Approval">
    <van-nav-bar
       title="我的团队"
       left-arrow
       @click-left="onClickLeft"
    
     />
    <div class="list">
           <van-cell 
            :title="item" 
            is-link 
            value="" 
            v-for="(item,index) in list" 
            :key="index" 
            @click="onclickHandle(index+1)"
            />
       </div>
    </div>
</template>
<script>
import { getTeam ,getTeamM,getTeamN} from '@/api/Mypage'
export default {
    name: 'Approval',
    data() {
       return {
           list :[]
       }
    },
    mounted(){
     this.getTeamN()
    },
    methods: {
        onClickLeft() {
           this.$router.go(-1)
        },
        onclickHandle(vip) {
            this.$router.push({
                name:'ApprovalDeatils',
                params: {
                    vip:vip
                }
                })
        },
        getTeamN() {
           getTeamN().then(res =>{
             const data = res.data;
              this.list= [`1.我的团队人数${data.t1}人`,
                  `2.我的团队人数${data.t2}人`,
                  `3.我的团队人数${data.t3}人`,
                  `4.我的团队人数${data.t4}人`,
                  `5.我的团队人数${data.t5}人`,
                  `6.我的团队人数${data.t6}人`,
                  `7.我的团队人数${data.t7}人`] 
           }) 
        }
       
    }
}
</script>
<style scoped>
#Approval{position: absolute;left: 0;top:0;width: 100%;height: 100%;background: #2d3365;}
#Approval .list {padding-top: 12px;}
#Approval .van-cell{background: #3e457c; padding-left:12px ;padding-right:12px;}
#Approval .van-cell:not(:last-child)::after {border-bottom: none;}
#Approval .van-cell__right-icon {color: #ffffff;}
</style>