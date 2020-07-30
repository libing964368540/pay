import { path } from "chromedriver";

//设置状态栏的颜色
export function setNavColor() {
   if(window.plus) {
      plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
      plus.navigator.setStatusBarBackground('#2d3365');//设置状态栏的颜色
   }else{
     document.addEventListener('plusready',function () {
        // 在这里调用plus api
       plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
       plus.navigator.setStatusBarBackground('#2d3365');//设置状态栏的颜色
      },false);
   }
  
}
//保存二维码到相册
export function saveImg(path) {
   if(window.plus) {
       // 在这里调用plus api
    plus.gallery.save(path, function (e) {
      alert( "保存图片到相册成功" );
      },function(e){
       alert(e)
      });   
   }else{
    document.addEventListener('plusready',function () {
        // 在这里调用plus api
    plus.gallery.save(path, function (e) {
            alert( "保存图片到相册成功" );
     },function(e){
         alert(e)
     });   
     },false);
   }
}

export function copyToClip(text) {
   if(window.plus) {
      var ua = navigator.userAgent.toLowerCase();
      if (/android/.test(ua)) {
      var Context = plus.android.importClass("android.content.Context");  
      var main = plus.android.runtimeMainActivity();  
      var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);  
      plus.android.invoke(clip, "setText", text); 
      alert('复制成功')
      }else{
         var UIPasteboard  = plus.ios.importClass("UIPasteboard");  
         var generalPasteboard = UIPasteboard.generalPasteboard();  
           // 设置/获取文本内容:  
         generalPasteboard.setValueforPasteboardType(text, "public.utf8-plain-text");  
         generalPasteboard.valueForPasteboardType("public.utf8-plain-text"); 
         plus.nativeUI.alert('复制成功');
      }
     
   }else{
     document.addEventListener('plusready',function () {
      var ua = navigator.userAgent.toLowerCase();
      if (/android/.test(ua)) {
      var Context = plus.android.importClass("android.content.Context");  
      var main = plus.android.runtimeMainActivity();  
      var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);  
      plus.android.invoke(clip, "setText", text); 
      alert('复制成功')
      }else{
         var UIPasteboard  = plus.ios.importClass("UIPasteboard");  
         var generalPasteboard = UIPasteboard.generalPasteboard();  
           // 设置/获取文本内容:  
         generalPasteboard.setValueforPasteboardType(text, "public.utf8-plain-text");  
         generalPasteboard.valueForPasteboardType("public.utf8-plain-text"); 
         plus.nativeUI.alert('复制成功');
        }
      },false)
   }
  
}