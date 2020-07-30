<template>
 <div class="Recharge">
      <van-nav-bar
       title="充值"
       left-arrow
       @click-left="onClickLeft"
     />
     <ListCell :title="title">
        <div slot="content" style="padding-top:15px">
             <div style="margin-bottom: 15px"><p class="tip">使用钱包扫描的二维码</p></div>
             <div style="margin-bottom:25px"><span class="codeWrap" id="qrcode"><img :src="imgPath" alt=""></span></div>
             <div>
                 <p class="tip" style="margin-bottom: 10px">收款地址</p>
                 <p style="color:#ffffff;font-size:14px;text-align:center" v-text="payPath"></p>
             </div>
             <div style="width:80%;margin:10px auto" @click="copy" :data-clipboard-text="payPath" class="code">
                 <van-button  block type="info" color="#52c41a" >复制地址</van-button>
             </div>
             
        </div>   
     </ListCell>
       <van-notice-bar wrapable :scrollable="false">
     注意事项：需要12个网络确认才能到账，任何非USDT-ERC20资产充值到USDT-ERC20地址后不可找回!
     </van-notice-bar>
      <!-- <ListCell :title="addressTitle">
        <div slot="content" style="padding:15px"> 
           <van-field
             v-model="link"
             center
             clearable
             placeholder="请输入钱包地址"
            >
           <template #button>
              <van-button size="small" type="primary" @click="setlink">绑定</van-button>
           </template>
           </van-field>
           <ul style="padding-top:15px;overflow-x:auto">
              <li class="flex" v-for="(item,index) in list" :key="index" style="flex-wrap: wrap;border-bottom:1px solid #ffffff;margin-bottom:10px;padding-bottom:10px">
                  <div class="imgWrap"><img :src="'http://47.245.53.54'+item.image"></div> -->
                 <!-- <div>
                     <div class="tag" style="margin-bottom:5px"><span v-text="item.name"></span></div>
                      <div><span v-text="item.link" style="display:block;font-size: 14px;"></span></div>
                 </div>
               </li>
           </ul>
        </div>   
     </ListCell>    --> 
</div>   
</template>
<script>
import Vue from 'vue';
import { Notify } from 'vant'
Vue.use(Notify);
import { Toast } from 'vant';
Vue.use(Toast);
import ListCell from '@/components/ListCell'
import { linkslog,setlink,payMoney } from '@/api/pay'
import QRCode from 'qrcodejs2'
import { setNavColor,saveImg,copyToClip } from '@/utils/plus.js'
import Clipboard from 'clipboard'
export default {
   name: 'Recharge',
   components: {
     ListCell  
   },
   data() {
      return {
         title:'',
         //  title: `<div class="flex flex-y-center">
         //            <i style="width: 28px;height: 28px;border-radius:5px ;background: #33ab84;display: block;margin-right:10px"></i>USDT@usdt

         //            </div>`,
          addressTitle: '绑定充值钱包地址',
          link:'',
          list: [],
          payPath: '',
          imgPath: '',
          codeName: '',
          channel_id: ''
      }
   },
   mounted() {
     this.payMoney() 
   //   this.linkslog()
   },
   methods: {
      //   copy() {
      //     copyToClip(this.payPath)
      //  },
       qrcode () {
         let that = this;
         let qrcode = new QRCode('qrcode', {
             width: 180,
             height: 180,        // 高度
             text:  this.payPath,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
          this.imgPath = qrcode      
       },
      onClick() {
        this.$router.push('/modifyPassword')
      },
      payMoney() {
         const data = {}
         payMoney(data).then(res =>{
             if(res){
                 const { data } = res
                 this.title = data.name
              this.payPath = data.link
              this.channel_id = data.channel_id
              document.getElementById('qrcode').innerHTML = ""
              this.$nextTick(()=>{
                 this.qrcode()
              })
             }
         })
      },
      onClickLeft() {
        this.$router.go(-1)  
      },
      setlink() {
         const data = {
            cid: this.channel_id,
            link: this.link
         }
        setlink(data).then(res =>{
           if(res){
             this.linkslog()
             Notify({ type: 'success', message: '操作成功' });
           }
        })
      },
      linkslog() {
      const data = {
         page: 0,
         size: 100
      }
      linkslog(data).then(res =>{
          if(res) {
             const { rows } = res.data
             this.list = rows
          }
      })
      },
       copy () {
         
      var clipboard = new Clipboard('.code')
      clipboard.on('success', e => {
        console.log('复制成功', e)
        Toast({
          message: '复制成功'
        })
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        Toast({
          message: '手机权限不支持复制功能'
        })
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    }
   }  
}
</script>
<style scoped>
.Recharge .Recharge-icon{width: 28px;height: 28px;border-radius:5px ;background: #33ab84;display: block; }
.Recharge .codeWrap{ display: block;margin: 0 auto;background: #e6e6e6;width: 180px;height: 180px;}
.Recharge .codeWrap img { width: 100%;height: 100%;}
.Recharge .tip {text-align: center;color: #6a73b6;font-size: 14px;}
.Recharge .van-notice-bar { color: #262624;background: #fffff1;margin-top:10px;}
.Recharge .van-button{width: 295px;margin: 0 auto;border-radius: 5px;height: 45px;}
.Recharge .van-button__text{font-size: 16px;}
.Recharge{  border-bottom: 1px solid #74789a; color: #ffffff;}
.Recharge   li .tag { color: #6a73b6; margin-bottom:10px ;}
.Recharge .imgWrap {flex-basis: 45px; height: 45px; background: #32aa86; border-radius: 10px;margin-right:10px;overflow: hidden;}
.Recharge .imgWrap img {width: 100%;height: 100%;}
.Recharge span{ color: #ffffff;}
</style>