import { version } from '@/api/user'
import Vue from 'vue';
import { Dialog } from 'vant';
export const versionS = {
    data() {
       return {
         myVersion:'',
         file: ''
       }
    },
    methods:{
       appUpdate() {
           const that = this;
           if(window.plus) {
            plus.runtime.getProperty(plus.runtime.appid, function (inf) {
                that.myVersion = inf.version;
                const ua = navigator.userAgent.toLowerCase();
                if (/android/.test(ua)) {
                   that.getversion() 
                }
            })
           }else{
          document.addEventListener('plusready',function () {    
             plus.runtime.getProperty(plus.runtime.appid, function (inf) {
               that.myVersion = inf.version;
               const ua = navigator.userAgent.toLowerCase();
               if (/android/.test(ua)) {
                  that.getversion() 
               }
           })
        })
       }
   
       }, 
       getversion() {
          version({}).then(res =>{
              const { data } = res
              this.file = data.az_url
            
              if(data.edition>this.myVersion){
                 
                Dialog.alert({
                    title: '版本更新',
                    message: `发现最新版本V${data.edition},请更新`,
                  }).then(() => {
                    plus.nativeUI.toast("正在准备环境，请稍后！");  
                    const dtask = plus.downloader.createDownload(data.az_url, {}, function (d, status) {
                        if (status == 200) {
                            const path = d.filename;//下载apk
                             plus.runtime.install(path); // 自动安装apk文件
                        } else {
                            plus.nativeUI.alert('版本更新失败:' + status);
                        }

                    });
                    dtask.start();
                  });
              }
          })
       }
    }
}