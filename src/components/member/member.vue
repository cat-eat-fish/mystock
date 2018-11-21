<template>
  <div class="member">
      <!-- 头部 -->
      <MyHead></MyHead>
        <div class="main">
            <div class="inner-page-content-wrap clearfix">
                <div data-type="1" class="sibar-nav">
                    <a href="javascript:;" :class="{active:useractive==index}" @click="jump(item)" v-for="(item,index) in nav" :key="index"><i :class="item.icon"></i> <span>{{item.text}}</span></a>
                </div>
            </div>
            <router-view></router-view>
        </div>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
export default {
  components: {
    MyHead,MyFoot,Sidebar
  },
  name: 'member',
  data () {
    return {
        active:0,
        nav:[
            {id:0,text:'账户充值',icon:'iconfont icon-mokuai',href:'/member/assets',},
            {id:1,text:'申请操盘资金',icon:'iconfont icon-mokuai',href:'/trade/daytrade',},
            {id:2,text:'交易股票',icon:'iconfont icon-fenxi2',href:'/member/mytrade',},
            {id:3,text:'完善资料',icon:'iconfont icon-shezhi',href:'/member/setting',},
            {id:4,text:'资金明细',icon:'iconfont icon-shuoming',href:'/member/flowing',},
            {id:5,text:'邀请好友',icon:'iconfont icon-yaoqingchengyuan',href:'/member/extend',},
            {id:6,text:'消息中心',icon:'iconfont icon-xiaoxi',href:'/member/message',},
        ]
    }
  },
  methods:{
      jump(item){
          this.$router.push(item.href);
        //   this.active=item.id;
          this.$store.commit('newuseractive',item.id)
          
      },
  },
  created(){
      
  },
  computed:{
      useractive(){
          return  this.$store.state.mystate.useractive;
      },
  },
  mounted(){
      
  }
}
</script>

<style scoped lang="scss">
    .inner-page-content-wrap {
        width: 180px;
        min-height: 514px;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 120px;
        .sibar-nav {
            height: 314px;
            float: left;
            width: 180px;
            background-color: #fff;
            a{
                width: 100%;
                float: left;
                color: #000;
                height: 44px;
                line-height: 44px;
                padding-left: 30px;
                text-align: left;
                font-size: 14px;
                border-bottom: 1px solid #fff;
            }
            a.active,a:hover {
                font-weight: 700;
                color: #000;
                cursor: pointer;
                background-color: rgb(250,243,234);
            }
            a.action i{
                color: #ff4d4d;
            }
        }
    }
    .main{
        width: 1180px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
    .clearfix {
        clear: both;
        zoom: 1;
    }
</style>
