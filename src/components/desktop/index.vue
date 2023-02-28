<template>
    <div class="desktop">
        <div class="desktop-main"></div>
        <div class="author-title">
            <p>Intelligence Face Recognition System</p>
            <p>Author: Sun Maojun</p>
            <p>Some images are from the internet, if there is any infringement, please contact us for deletion.</p>
        </div>
    </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style>
.desktop{
  width: 100%;
  height: 100%;
  position: relative;
}
.desktop-main{
  position: absolute;
  width: 45%;
  height: 63%;
  transform: translate(-50%,-50%);
  left: 50%;
  top:40%;
  background: url(~@/assets/desktop/desktop.gif) no-repeat;
  background-size: 100% 100%;
}
.author-title{
  width: 100%;
  height: 100px;
  background-color: #008390;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 90%;
  left: 50%;
  text-align: center;
  font-size: 13px;
  color: #fff;
}
</style>