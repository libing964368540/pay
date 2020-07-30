import { sendyzm } from '@/api/user'
import { Notify } from 'vant';
export const code = {
    data() {
       return {
        mobile: '',
        code : '',
        disabledCodeBtn: true,
        codeText: '获取验证码',
        setTime: '',
        passwordType: true
       }
    },
    methods: {
        //注册register 登录login  支付密码setpay 替换手机号changemobile 验证check
        yzm(type) {
            if(!this.disabledCodeBtn){
                Notify({
                    message: '已发送',
                    duration: 1000,
                  });
                return
            }
           const data = {
             mobile: this.mobile,
             event: type  
           }
           sendyzm(data).then(res =>{
               if(res){
                  Notify({ type: 'success', message: '发送成功' });
                  this.countDown(60) 
               }
                 
           })
        },
        countDown (time) {
            if (time === 0) {
              this.disabledCodeBtn = true
              this.codeText = "获取验证码"
              return
            } else {
              this.disabledCodeBtn = false;
              this.codeText = '重新发送(' + time + ')'
              time--
            }
            setTimeout(()=> {
              this.countDown(time)
            }, 1000)
        },
        onpasswordType() {
          this.passwordType =!this.passwordType
        }
    }
}