<template>
<div class="ListCell">
    <div>
        <p class="ListCell_title" v-html="title" v-if="titleShow"></p>
        <slot name="content"></slot>
    </div>
</div>
</template>
<script>
export default {
   name:'ListCell',
   props:{
      title:{
        type: [String],
        default: ''
       },
      titleShow: {
        type: [Boolean],
        default: true 
      }   
   },
   name:'ListCell'
}
</script>
<style>
.ListCell {background:#3e457c;margin:10px;border-radius:10px;padding-bottom:20px;}
.ListCell .ListCell_title { border-bottom: 1px solid #cccccc;padding: 15px 20px;font-weight: bold;color:#ffffff }
</style>