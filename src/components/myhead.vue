<template>
  <div class="myhead">
      <div class="cf-head-wrap">
        <div class="head-line1 clearfix">
            <div class="warp">
                <div class="fl">欢迎来到创盈中心：0755-28896306&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务时间：7x24小时</div>
                <div class="fr">
                    <a  href="javascript:;"   id="show" >
                        关注公众号
                        <img class="wxbox" src="../assets/img/thumb_201712141425154357.jpg">
                    </a>
                    <router-link  to="/other/appdown"   id="app" >
                        APP下载
                    </router-link>
                    <router-link v-if="!islog"  to="/login"   id="JS-login1" >
                        登录
                    </router-link>
                    <router-link  v-if="!islog" to="/register"   id="JS-free-register1" >
                        免费注册
                    </router-link>
                    <router-link v-if="islog"  to="/member/assets"   id="hello" >
                        您好，{{Gusername}}
                    </router-link>
                    <router-link  to="/protocolprivacy"   id="ystk" >
                        隐私条款
                    </router-link> 
                </div>
            </div>
        </div>
        <div class="head-line2 clearfix">
            <router-link to="/" class="logo">
                <img src="../assets/img/logo.png" alt="创盈中心" style="height: 58px;" title="股票操盘平台">
            </router-link>
            <ul class="nav">
                <li v-for="(item,index) in bonav" :key="index">
                    <a @click="showjump(item)"  :class="{active:headactive==index}" href="javascript:;" >{{item.text}}</a>
                </li>
                <li class="user-photo dropdown clearfix">
                    <a href="javascript:;" class="user-center"><i class="icon-wo"></i>&nbsp;个人中心&nbsp;<i class="icon-moreunfold"></i></a>
                    <ul class="niu-dropdown-menu">
                        <li v-for="(item,index) in personnav" :key="index">
                            <a href="javascript:;"  @click="jump(item)">
                                <i :class="item.icon"></i>
                                {{item.text}}
                            </a>
                        </li>
                        <li v-if="!islog" class="JSsignin" id="JS-login2">
                            <router-link to="/login" rel="nofollow">
                                <i class="iconfont icon-tubiao211"></i>
                                <span class="color-orange fb JSsignin pr10">登录</span>
                            </router-link>
                        </li>
                        <li v-if="islog" class="JSsignin" id="JS-login2">
                            <a href="javascript:;" @click="logout" rel="nofollow">
                                <i class="iconfont icon-tubiao211"></i>
                                <span class="color-orange fb JSsignin pr10">退出</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import qs from "qs"
export default {
  name: 'myhead',
  data () {
    return {
        active:0,
        bonav:[
            {id:0,thisid:'JS-head',text:'首页',href:'/',},
            {id:1,thisid:'A2',text:'关于我们',href:'/other/about',},
            {id:2,thisid:'JS-free-practice',text:'免费体验',href:'/trade/feedertrade',},
            {id:3,thisid:'JS-stock-capital',text:'股票操盘',href:'/trade/daytrade',},
            {id:4,thisid:'A7',text:'新手指引',href:'/newguide',},
        ],
        personnav:[
            {id:0,icon:'iconfont icon-mokuai',text:'账户充值',href:'/member/assets',},
            {id:1,icon:'iconfont icon-mokuai',text:'申请操盘',href:'/trade/daytrade',},
            {id:2,icon:'iconfont icon-fenxi2',text:'交易股票',href:'/member/mytrade',},
            {id:3,icon:'iconfont icon-shezhi',text:'完善资料',href:'/member/setting',},
            {id:4,icon:'iconfont icon-shuoming',text:'资金明细',href:'/member/flowing',},
            {id:5,icon:'iconfont icon-yaoqingchengyuan',text:'邀请好友',href:'/member/extend',},
            {id:6,icon:'iconfont icon-xiaoxi',text:'消息中心',href:'/member/message',},
        ]
    }
  },
  created(){
      
  },
  methods:{
    //   路由跳转
      jump(item){
          this.$router.push({path:item.href});
      },

      showjump(item){
          this.$router.push({path:item.href});
          this.$store.commit('newheadactive',item.id)
      },

    //   退出
      logout(){
          var that = this;
          var uid = sessionStorage.getItem('userid');
        var phone = sessionStorage.getItem('username');
          this.$axios.post('http://first.hdgprj.com/index.php?app=api&mod=api&ac=logout',qs.stringify({uid:uid,mobile:phone}))
          .then(function(res){
              console.log(res)
              if(res.data.code ==1){
                that.$store.commit('SIGN_OUT')  
                that.$router.push('/login')
              }
          })
          .catch(function (error) {
            console.log(err)
          });
      }

  },
  computed:{
      headactive(){
          return  this.$store.state.mystate.headactive;
      },
      islog(){
          return  sessionStorage.getItem('isLogin');
        // return  this.$store.state.isLogo;
      },
      Gusername(){
          var str=sessionStorage.getItem('username');
        var str2 = str.substr(0,3)+"****"+str.substr(7);
          return str2;
      }
  },
}
</script>
