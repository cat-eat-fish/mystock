<template>
  <div class="extend">
        <Me></Me>
        <div class="setting">
            <div class="extend-title clearfix">  
                <div class="extend-detail"><router-link to="/member/extenddetailUser">查看推广明细&nbsp;&gt;&gt;</router-link></div>
            </div>
            <div id="juc-info-data" class="extend-reward clearfix">        
                <div class="reward-right"><i class="iconfont icon-yaoqingchengyuan"></i><span>0</span></div>
            </div>
        </div>
        <div class="extend-cont clearfix">
            <div class="rebate-title">分享给好友一起分红</div>
                <div class="wx-code">
                    <img height="230" width="220" src="../../assets/img/2971.png">
                </div>
                <div class="wx-word"><span>您的推广二维码，通过微信发送给您的朋友，自动注册成为您的下线用户。</span></div>
                   <div class="rebate-title">您的邀请链接</div>
                        <textarea id="txtInfo" style="background-color: #eee; font-size: 16px; width: 54%; text-align: center;">http://www.jc1788.com/register.html?refid=2971&amp;agents_id=3&amp;staff_id=0</textarea>
                        <div class="wx-word">复制链接发送给好友吧</div>
                        <div id="juc-rule-data" class="invite-reward">
                    </div> 
                </div>
  </div>
</template>

<script>
import Me from "./me.vue"
export default {
    components:{
        Me
    },
  name: 'extend',
  data () {
    return {
        
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
      this.$store.commit('newuseractive',5)
  },
  created(){
      
  },
  methods:{

  },
  computed:{
      
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .extend{
         padding-top: 50px;
        width: 980px;
        padding-bottom: 120px;
    }
    .setting {
        background-color: #FFF;
        border: 1px solid #DDD;
        padding: 40px;
    }
    .extend-title {
        border-bottom: 1px solid #DDD;
        padding-bottom: 20px;
        .extend-detail {
            float: right;
            a {
                font-size: 14px;
                color: #566B96;
                cursor: pointer;
            }
        }
    }
    .extend-reward {
        height: 138px;
        background: #FFF5D8;
        margin-top: 20px;
        padding: 20px;
        color: #333;
        font-size: 14px;
        .reward-right {
            float: right;
            width: 182px;
            height: 98px;
            background: #FFF;
            padding: 8px 15px;
            text-align: center;
            border: 1px solid #66799F;
            color: #66799F;
            line-height: 36px;
            i {
                font-size: 24px;
                margin-right: 5px;
            }
            span {
                display: block;
                font-size: 30px;
                font-weight: 700;
            }
        }
    }
    .extend-cont {
        margin-top: 20px;
        border: 1px solid #DDD;
        padding: 40px;
        background: url(../../assets/img/extend-bg.jpg) top center no-repeat #fff;
        text-align: center;
    }
    .rebate-title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #FF4D4D;
        padding-top: 10px;
        padding-bottom: 10px;
        background: url(../../assets/img/line-extend.png) center center no-repeat;
    }
    .wx-code {
        padding-top: 50px;
        padding-bottom: 30px;
    }
    .wx-word {
        color: #666;
        font-size: 14px;
        span {
            font-weight: 700;
            color: #333;
        }
    }
    .rebate-title {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #FF4D4D;
        padding-top: 10px;
        padding-bottom: 10px;
        background: url(../../assets/img/line-extend.png) center center no-repeat;
    }
    .invite-reward {
        width: 897px;
        height: 205px;
        background: url(../../assets/img/extend-img.jpg) no-repeat;
        margin-top: 60px;
        text-align: left;
        padding-top: 30px;
        font-size: 14px;
    }
</style>
