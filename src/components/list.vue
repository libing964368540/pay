<template>
  <div class="listPage">
      <ul>
          <li>
              <div class="flex"><span class="title">问题1</span><span>2020.5.29 22:10:00</span></div>
                   <div class="content" style="padding-left:60px">我的问题XXXXXX</div>
              <div>
                  <div class="flex"><span  class="title">官方回复</span><span>2020.5.29 22:10:00</span></div>
                  <div class="content" style="padding-left:80px">我的问题XXXXXX</div>
             </div>  
          </li>
      </ul>  
 </div>  
</template>
<script>
export default {
   name:'list',
   props:{
      problemList:{
         type:[Array],
         default:[] 
      }
   }    
}
</script>
<style>
.listPage {color: #ffffff;padding:10px}
.listPage ul li {margin-bottom: 10px;}
.listPage .title {color: #f8680d;margin-right:15px;}
.listPage .content {padding:10px 0 10px 60px;border: 1px solid #3e457c;}
</style>