<template>
<div class="QRcode">
    <div class="code">
        <p style="color:#818df1;text-align:center;margin-bottom:10px">推广二维码</p>
        <div class="codeWrap" id="qrcode" ><img :src="payPath" alt=""></div>
        <p style="color:#ffffff;text-align:center;padding-top:14px;padding-bottom:30px" v-text="invite_code"></p>
    </div>
     <van-button  block type="info" color="#3b49ba" @click="save(payPath)">保存到相册</van-button>
    <p style="font-size:14px;color:#ffffff;text-align:center;padding-top:5px;">如保存失效，请截图保存</p>
</div>
</template>
<script>
import { share } from '@/api/code'
import { saveImg } from '@/utils/plus.js'
import QRCode from 'qrcodejs2'
export default {
   name: 'QRcode',
   data() {
       return {
       invite_code: '',
       invite_img: '',
       payPath:'',
       imgPath:''
     }
   },
   mounted() {
     this.share()
   },
   methods: {
       qrcode () {
         let that = this;
         let qrcode = new QRCode('qrcode', {
             width: 150,
             height: 150,        // 高度
             text:  this.payPath,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
          this.imgPath = qrcode      
      },
      share(){
         share().then(res =>{
            const { data } = res
            this.invite_code = data.invite_code?'邀请码：'+data.invite_code:'请将账户升级至VIP1'
            this.payPath = data.invite_url
            // document.getElementById('qrcode').innerHTML = ""
            //   this.$nextTick(()=>{
            //      this.qrcode()
            //   })
         })
      },
      save(path) {
         saveImg(path)
      }  
   }
}
</script>
<style>
.QRcode {margin: 0 85px 0;padding-bottom:20px;}
.QRcode .codeWrap {width:150px;height: 150px;background: #ffffff;margin:0 auto;}
.QRcode .codeWrap img {width:100%;height:100%;}
.QRcode .van-button__text {font-size:16px; border-radius:5px}
.QRcode .van-button--block{border-radius: 5px}
</style>