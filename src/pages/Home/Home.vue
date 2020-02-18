<template>
  <div id="container">
    <div class="homeHeaders">
      <a href="#" class="logo"></a>
      <i class="search iconfont icon-sousuo"></i>
      <input type="text" class="input" placeholder="搜索商品，共2016款好物">
      <div class="btn">登录</div>
    </div>
    <div class="homeNav">
      <ul class="content">
        <li @click="isClick = !isClick" :class="{active:isClick}">
          推荐
        </li>
        <li :class="{active: navIndex===index && isClick == false}" v-for="(item,index) in navList" :key="index" @click="navIndex = index">
          {{item.name}}
        </li>
        
      </ul>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in navList" :key="index">
          <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="guarantee">
      <div>
        <span class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></span>
        <span>网易自营品牌</span>
      </div>
      <div>
        <span class="iconfont icon-tuihuo"></span>
        <span>30天无忧退货</span>
      </div>
      <div>
        <span class="iconfont icon-tuikuan"></span>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="homeList">
      <ul v-if="hotList.kingKongModule">
        <li v-for="(item,index) in hotList.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </li>  
      </ul>
    </div>
    <Reservation/>
    <div class="newPerson">
      <span>—— 新人专享礼 ——</span>
      <div class="left">
        <span>新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="right">
        <div class="top">
          <span>福利社</span><br/>
          <span>今日特价</span>
          <div class="pirce">
            <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
          </div>
        </div>
        <span></span>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapState} from 'vuex'
import Reservation from '../../components/Reservation/Reservation'
  export default {
    data(){
      return {
        navIndex:0,
        isClick:false
      }
    },
    components:{
      Reservation
    },
    mounted(){
        this.$store.dispatch('getIndexListAction')
        this.$store.dispatch('gethotListAction')
        console.log(this.hotList)
        if(this.hotList && this.navList){
          this._initShow()
        }
        
    },
    computed: {
      ...mapState({
        navList:state => state.navList,
        hotList:state => state.hotList
      })
    },
    methods:{
      _initShow(){
        let wrapper = document.querySelector('.homeNav')
        new BScroll(wrapper,{
          scrollX:true,
          click:true
        })
        
        
      }
    },
    watch:{
      navIndex(){
          this.isClick = false
      },
      
      navList(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
            autoplay:true,
            pagination:{
              el:'.swiper-pagination'
            }
        })
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
#container
  .homeHeaders
    width 100%
    height 90px
    display flex
    align-items center
    justify-content space-around
    position relative
    margin-bottom 5px
    .logo
      width 138px
      height 40px
      display inline-block
      background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
      background-position center
      background-size cover
      margin-left 20px
    .search
      display block
      height 20px
      width 20px
      color grey
      font-size 45px
      position absolute
      left 200px
      bottom 45px
    .input
      width 442px
      height 56px
      display inline-block
      border-radius 10px
      background #ccc
      padding 0 62px
      box-sizing border-box
      border none
    .btn
      background #fff
      font-size 20px
      width 80px
      height 35px
      border-radius 10px
      line-height 35px
      color red
      border 2px solid red
      margin-right 10px
      text-align center
  .homeNav
    height 60px
    overflow hidden
    margin-bottom 10px
    .content
      display flex
      white-space nowrap
      height 100%
      padding-left 46px
      box-sizing border-box
      width 1500px
      li
        width 140px
        height 100%
        text-align center
        line-height 60px
        font-size 26px
        margin-right 44px
        position relative
        &.active
          color red
          &:after
            content ''
            height 4px
            display block
            background red
            width 100%
            position absolute
            bottom 0px
            left 0
        &:first-child
          width 80px  
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      height 370px
      .swiper-slide
        width 100%
        height 100%
        background pink
        img
          width 100%
          height 100%
/deep/.swiper-pagination
        .swiper-pagination-bullet
          width 50px
          height 5px
          border-radius 0
        >span.swiper-pagination-bullet-active
            background #fff
  .guarantee
    width 100%
    height 72px
    display flex
    margin-bottom 10px
    div
      flex 1
      text-align center
      line-height 72px
      .iconfont
        font-size 40px
        margin-right 5px
        vertical-align middle
        color red
  .homeList
    width 100%
    height 340px
    ul
      width 750px
      display flex
      height 100%
      flex-wrap wrap
      justify-content space-between
      padding 10px 35px
      box-sizing border-box
      li
        margin-right 4px
        height 150px
        width 110px
        text-align center
        padding-bottom 5px
        img 
          display inline-block
          width 100%
          height 70%
          border-radius 30%
          margin-top 5px
          margin-bottom 5px
  .newPerson
    width 100%
    height 560px
    padding 20px
    box-sizing border-box
    >span 
      text-align center
      display block
      height 40px
      font-size 40px
      color red
      margin-bottom 30px
    .left
      width 350px
      height 434px
      float left
      margin-right 10px
      position relative
      background #F9E9CF
      span
        font-size 35px
        position absolute
        left 20px
        top 30px 
      img
        width 70%
        height 60%
        position absolute
        left 60px
        bottom 50px
    .right
      width 350px
      height 434px
      float right
      display flex
      flex-direction column
      .top
        height 49%
        width 100%
        padding 20px
        box-sizing border-box
        position relative
        background #FBE2D3
        .pirce
          width 60%
          height 100%
          position absolute
          right 0
          top 0
          img
            width 100%
            height 100%
      >span
        border 4px solid #fff
      .bottom
        height 49%
        width 100%
        box-sizing border-box  
        padding 20px   
        background #FFECC2
     
      


      



 



































</style>
