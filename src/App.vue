<template>
  <div id="app">
    <router-view/> 
  </div>
</template>
<script>
export default {
  name: 'App'
}
window.onload=function () {
    document.addEventListener('touchstart',function (event) {
      if(event.touches.length>1){
        event.preventDefault();
      }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
      var now=(new Date()).getTime();
      if(now-lastTouchEnd<=300){
        event.preventDefault();
      }
      lastTouchEnd=now;
    },false)
   }
</script>
<style>
  body {
    margin: 0 0;
    padding: 0 0;
     background-color: #2d3365;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .group {
    width: 100%;
    height: auto;
  }

  .wid {
    width: 25%
  }

  .wid2 {
    width: 15%
  }

  .wid3 {
    width: 70%
  }

  .wid4 {
    width: 24.25%
  }

  .wid5 {
    width: 1%
  }

  .wid6 {
    width: 50%
  }

  .wid7 {
    width: 80%
  }

  .wid8 {
    width: 33.33%
  }

  .wid9 {
    width: 49%;
  }

  .pos-fid {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
  }

  .pad {
    padding: 0.2rem 3%;
    box-sizing: border-box
  }

  .pad2 {
    padding: 0.6rem 0;
    box-sizing: border-box
  }

  .pad3 {
    padding: 0.6rem 3%;
    box-sizing: border-box
  }

  .pad4 {
    padding: 0 3%;
    box-sizing: border-box
  }

  .sticky {
    position: sticky;
    top: 0;
  }

  .link {
    text-decoration: none;
  }

  .ov-y {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  p {
    margin: 0 0;
    padding: 0 0;
    font-size: 1rem;
  }

  .p1 {
    font-size: 0.6rem;
  }

  .p2 {
    font-size: 1rem;
  }

  .p3 {
    font-size: 1.5rem;
  }

  .p4 {
    font-size: 0.8rem;
  }

  .p5 {
    font-size: 0.9rem;
  }

  .col {
    color: #acafb1;
  }

  .col2 {
    color: #47cfff;
  }

  .col3 {
    color: #ffffff;
  }

  .col4 {
    color: #ffffff;
  }

  .col5 {
    color: #f2a01c;
  }

  .col6 {
    color: #47cfff;
  }

  .active-col {
    color: #363c6e;
  }

  .dis {
    display: flex;
    flex-wrap: wrap;
  }

  .dis-between {
    display: flex;
    justify-content: space-between;
  }

  .bor-top {
    border-top: 1px solid #cacaca
  }

  .bor-top2 {
    border-top: 1px solid #2d3365;
  }

  .bor-top3 {
    border-top: 1px solid #47cfff;
  }

  .bor-bottom {
    border-bottom: 1px solid #2d3365;
  }

  .bor-right {
    height: 1.5rem;
    border-right: 1px solid #acafb1;
    margin: auto 0;
  }

  .bor-r {
    border-radius: 1rem;
  }

  .cen {
    text-align: center;
  }

  .lin {
    line-height: 2.5rem;
  }

  .mar {
    margin: 0.4rem 0;
  }

  .mar2 {
    margin: auto 0;
  }

  .mar3 {
    margin: 0.5rem 0;
  }

  .mar4 {
    margin: 0.2rem 0;
  }

  .mar5 {
    margin: 1rem 0;
  }

  .bac3 {
    background-color: #2d3365;
  }

  .bac {
    background-color: #363c6e;
    opacity: 0.9;
    filter: alpha(opacity=90);
  }

  .bac2 {
    background-color: #47cfff;
  }

  .he {
    height: 0.5rem;
  }

  .footer-bac {
    background-color: #ffffff
  }

  .footer-bac2 {
    background-color: #f1f1f1
  }

  .footer-img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .footer-he {
    height: 3.5rem;
  }

  .me-mar3 {
    margin: 0.6rem 0.6rem 0.6rem 0;
  }

  .me-mar4 {
    width: 1.1rem;
    height: 1.1rem;
    margin: 0.8rem 0 0.8rem 0.6rem;
  }

  .rou-mar {
    margin: 0.8rem 0 0.5rem 0;
  }

  .but {
    width: 20%;
    background-color: #545a88;
    border: 1px solid #47cfff;
    color: #47cfff;
    border-radius: 0.3rem;
  }

  .inp {
    padding: 0 3%;
    box-sizing: border-box;
    background-color: #545a88;
    border: 1px solid #47cfff;
    color: #47cfff;
    border-radius: 0.3rem;
    margin: 0 4%;
  }

  input::-webkit-input-placeholder {
    color: #ffffff;
  }

  input:-moz-placeholder {
    color: #ffffff;
  }

  input::-moz-placeholder {
    color: #ffffff;
  }

  input:-ms-input-placeholder {
    color: #ffffff;
  }

  .banner {
    width: 100%;
    height: 8rem;
    margin: 0.6rem 0 0 0;
  }

  .kong {
    line-height: 5rem;
    text-align: center;
  }

  .si-group {
    width: 80%;
    margin: 0.5rem 10%;
    height: 2rem;
  }

  .si-p {
    line-height: 10rem;
  }

  .si-pad2 {
    padding: 0 10%;
  }

  .re-he {
    height: 3rem;
  }

  .re-p {
    line-height: 7rem;
  }

  .re-he2 {
    width: 70%;
    height: 2rem;
    border: none
  }

  .re-p2 {
    margin: auto 0.5rem;
  }

  /* 表格start */
  table {
    border: 1px solid #ccc;
    width: 95%;
    margin:0;
    padding:0;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0 auto;
  }
  table tr {
    border: 1px solid #ddd;
    padding: 5px;
  }
  table th, table td {
    padding: 10px;
    text-align: center;
  }
  table th {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }
    table thead {
      display: none;
    }
    table tr {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ddd;
    }
    table td {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
    }
    table td:last-child {
      border-bottom: 0;
    }
    table td:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  /* 表格end */

  .content-color-top {
    color: white;
    padding-top: 0.7rem;
  }

  .pay-img {
    width: 2.5rem;
    height: 2.5rem;
  }

</style>
