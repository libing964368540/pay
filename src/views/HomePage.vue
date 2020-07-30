<!--首页-->
<template>
  <div id="homepage">
    <div class="title">
        <p>财富自由</p>
    </div>
    <div class="content">
       <div class="block">
         <van-swipe :autoplay="3000"  style="height: 168px;">
           <van-swipe-item v-for="(item,index) in list" :key="index">
               <img  :src="'http://codex1.me'+item.image" />
           </van-swipe-item>
        </van-swipe>
      </div>
      <div class="iconList">
          <ul class="flex justify-content">
              <li class="flex-direction flex-y-center" @click="Onclick('/home/Me')"><div class="iconWrap iconWrap1"><van-icon name="gift" size="30" color="#ffffff"/></div><p>回报值</p></li>
              <li class="flex-direction flex-y-center" @click="Onclick('/home/Me')"><div class="iconWrap iconWrap2"><van-icon name="balance-list" size="30" color="#ffffff"/></div><p>漏单赠金</p></li>
              <li class="flex-direction flex-y-center" @click="Onclick('/wallet')"><div class="iconWrap iconWrap3"><van-icon name="column" size="30" color="#ffffff"/></div><p>我的钱包</p></li>
              <li class="flex-direction flex-y-center" @click="Onclick('/Approval')"><div class="iconWrap iconWrap4"><van-icon name="friends" size="30" color="#ffffff" /></div><p>我的团队</p></li>
          </ul>
      </div>
    </div>
    <ListCell :title="title">
       <div slot="content">
             <div style="padding: 0 15px">
         <div class="flex justify-content" style="padding: 15px 0" v-for="(item,index) in ArticleList" :key="index" @click="OnClickProblem(item)">
           <div style="border-bottom: 1px solid #cccccc;width:60vw;">
             <!-- <van-cell :title="item.title"/> -->
             <span v-text="item.title"></span>
           </div>
           <span class="imgWrap"><img :src="'http://codex1.me'+item.image"></span>
        </div> 
       </div>
       </div>
    </ListCell>
   
  </div>
  </div>
</template>
<script>
import ListCell from '@/components/ListCell'
import { lunbo,getArticle } from '@/api/shouye'
export default {
  name: 'HomePage',
  components:{
    ListCell
  },
  data () {
    return {
      show: false,
      title:'常见问题',
      list: [],
      ArticleList: []
    }
  },
  mounted() {
    this.lunbo()
    this.getArticle()
  },
  methods: {
    lunbo() {
      lunbo().then(res =>{
        const { data } = res 
        this.list = data
      })
    },
    IsShow(){
      this.show = false
    },
    OnClickProblem(item) {
      this.$router.push({
        name:'problem',
        params: {
           content: item.content
        }
      })
    },
    getArticle() {
      getArticle().then(res =>{
         const { data } = res
        this.ArticleList = data
      })
    },
    Onclick(str) {
       this.$router.push(str)
    }
  }
}
</script>

<style scoped>
  #homepage {color: #ffffff;padding-bottom:100px;}
  .title{width: 100%;text-align: center;color: #ffffff;margin-bottom: 15px;margin-top:10px;}
  .content {padding: 0 10px;}
  .iconList{color: #ffffff; margin:15px 19px 14px}
  .iconList p{ font-size: 14px;}
  .block,.home{ border-radius: 10px; overflow: hidden;}
  .imgWrap{ width: 65px; height:65px;background:#f3f5f8;}
  .imgWrap img {width: 100%;height:100% ;}
  #homepage .van-cell {padding-right:30px!important;} 
  .problem {border-bottom: 1px solid #cccccc;padding: 15px 10px;font-weight:bold;}
  .home {width: 100%;height: auto;margin: 8px auto;text-align: center;}
  .hp-img{width:1rem;height: 1rem;}
  .hp-he{height: 50vw;}
   #homepage .iconWrap{ width: 45px; height: 45px; border-radius: 50%; text-align: center;line-height: 65px;margin-bottom:5px;}
   #homepage .iconWrap1 {background:linear-gradient(left,#2b85d3,#416fc6);}
   #homepage .iconWrap2 {background:linear-gradient(left,#e3b688,#de7147);}
   #homepage .iconWrap3 {background:linear-gradient(left,#17d7a7,#1fa48b);}
   #homepage .iconWrap4 {background:linear-gradient(left,#5d72fe,#422df7);}
   .wrapper1 {display: flex;align-items: center;justify-content: center;height: 100%;}

  .block1 { width: 220px;height: 210px;background-color: #2d3365;border-radius: 10px;padding: 20px;} 
  .block1 .block1_title {font-size: 18px;margin-bottom: 14px;}
  .block1 .block1_tip {margin-bottom: 20px;font-size: 13px;}
  .Money {font-size: 30px;color:#f1c517}
  .van-button--block {border-radius: 5px;}
</style>
