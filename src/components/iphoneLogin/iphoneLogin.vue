<template>
  <div id="iphoneLogin">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="login">
        <input type="text" class="username" placeholder="请输入手机号">
        <input type="text" class="password" placeholder="请输入短信验证码">
        <div class="request">
          <span>遇到问题？</span>
          <span>使用密码验证登录</span>
        </div>
        <div class="btn">登录</div>
        <div class="success">
          <input type="checkbox" class="success-one" value="0">
          <span>我同意<a href="#">《服务条款》</a>和<a href="#">《网易隐私政策》</a></span>
        </div>
        <div class="other" @click="isIphone()">其他方式登录></div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      isIphone:{
        type:Function,
        required:true
      }
    }
  }
</script>

<style scoped lang="stylus">
#iphoneLogin
  height 100%
  width 100%
  background #fff
  .logo
    width 100%
    height 90px
    text-align center
    padding  60px 0
    img
      width 280px
      height 90px
      display inline-block
  .login
    width 100%
    height 550px
    padding 20px 20px
    box-sizing border-box
    input
      height 90px
      width 100%
      padding 10px 30px
      outline none
      border-bottom 2px solid #eee
      box-sizing border-box
      font-size 27px
      margin-bottom 20px
    .password
      margin-bottom 40px
    .request
      height 70px
      background gery
      display flex
      justify-content space-between
      padding 0 10px
      box-sizing border-box
      span
        &:first-child
          font-size 30px
          color #7F7F7F
        &:last-child
          font-size 31px
    .btn
      width 100%
      height 90px
      background #DD1A21
      text-align center
      line-height 90px
      border-radius 5px
      color #fff
      font-size 30px
      margin-bottom 30px
    .success
      position relative
      padding 0 50px
      margin-bottom 40px
      .success-one
        width 35px
        height 35px
        position absolute
        left 4px
        top -3px
    .other
      height 80px
      width 100%
      text-align center
      line-height 80px
      font-size 25px
</style>
