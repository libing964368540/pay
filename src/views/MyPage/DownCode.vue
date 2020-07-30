<template>
 <div id="DownCode">
   <van-nav-bar
       title="我的邀请码"
       left-arrow
       @click-left="onClickLeft"
     />
    <div class="DowncodeContent">
        <div class="code">
            <div class="codeWrap" id="qrcode" ref="qrcode"><img :src="payPath" alt=""></div>
            <p style="color:#ffffff;text-align:center;padding-top:14px;padding-bottom:30px" v-text="invite_code"></p>
        </div>
        <van-button  block type="info" @click="save(payPath)">
          保存到相册
        </van-button>
    </div> 
    <p style="font-size:14px;color:#ffffff;text-align:center;padding-top:5px;">如保存失效，请截图保存</p>
</div>
</template>
<script>
import { share } from '@/api/code'
import { saveImg } from '@/utils/plus.js'
import QRCode from 'qrcodejs2'
export default {
   name:'DownCode',
   data() {
     return {
       invite_code:'',
       invite_img: '',
       payPath:'',
       imgPath:''
     }
   },
   mounted() {
    this.share()
   },
   methods:{
      qrcode () {
         let that = this;
         let qrcode = new QRCode('qrcode', {
             width: 200,
             height: 200,        // 高度
             text:  this.payPath,   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
          this.imgPath = qrcode      
      },
     onClickLeft() {
         this.$router.go(-1)
     },
      share(){
         share().then(res =>{
            const { data } = res
            this.invite_code = data.invite_code?'邀请码：'+data.invite_code:'请将账户升级至VIP1'
            this.payPath = data.invite_url
            //  document.getElementById('qrcode').innerHTML = ""
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
<style scoped>
#DownCode .DowncodeContent{margin: 62px 50px;}
#DownCode .codeWrap{ width: 200px;height: 200px;background: #ffffff;margin-bottom: 5px;margin: 0 auto;}
#DownCode .codeWrap img{width: 100%;height:100% ;}
</style>