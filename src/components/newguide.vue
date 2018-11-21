<template>
    <div class="new-guide">
        <div class="new-guide-banner"><img src="../assets/img/new_guide_banner.jpg" alt="新手指引"></div>
        <div class="new-guide-sec sec-bg1 clearfix">
            <div class="fl w1">
                <div class="new-guide-steps">
                    <i>01</i>
                    <em>第一步</em>
                </div>
                <div class="tit">注册成为创盈中心新用户</div>
                <div class="des">迈出成功路上的第一步</div>
                <router-link to="/register"  class="btn">注&nbsp;册</router-link>
            </div>
            <div class="fr">
                <img src="../assets/img/newguide_sec_01.png" alt="注册">
            </div>
        </div>
        <div class="new-guide-sec sec-bg2 clearfix">
            <div class="fr w1">
                <div class="new-guide-steps">
                    <i>02</i>
                    <em>第二步</em>
                </div>
                <div class="tit">申请操盘</div>
                <div class="des">进入股票操盘-立即申请</div>
                <router-link to="/trade/daytrade" class="btn">申请操盘</router-link>
            </div>
            <div class="fl">
                <img src="../assets/img/newguide_sec_02.png" alt="申请操盘">
            </div>
        </div>
        <div class="new-guide-sec sec-bg1 clearfix">
            <div class="fl w1">
                <div class="new-guide-steps">
                    <i>03</i>
                    <em>第三步</em>
                </div>
                <div class="tit">通过第三方充值账户</div>
                <div class="des">银行监管，资金安全有保障</div>
                <a href="JavaScript:;" @click="recharge" class="btn">账户充值</a>
            </div>
            <div class="fr">
                <img src="../assets/img/newguide_sec_03.png" alt="账户充值">
            </div>
        </div>
        <div class="new-guide-sec new-guide-sec-p2 sec-bg2 clearfix">
            <div class="fr w1">
                <div class="new-guide-steps">
                    <i>04</i>
                    <em>第四步</em>
                </div>
                <div class="tit">通过交易股票去交易</div>
                <div class="des">进入个人中心-交易股票</div>
                <a href="javascript:;" @click="transaction" class="btn">交易股票</a>
            </div>
            <div class="fl">
                <img src="../assets/img/newguide_sec_04.png" alt="交易股票">
            </div>
        </div>
        <div class="new-guide-sec new-guide-sec-p2 sec-bg1 clearfix">
            <div class="fl w1">
                <div class="new-guide-steps">
                    <i>05</i>
                    <em>第五步</em>
                </div>
                <div class="tit">立即完善资料</div>
                <div class="des">进入个人中心-完善资料</div>
                <a href="javascript:;" @click="addbank" class="btn">绑定银行卡</a>
            </div>
            <div class="fr">
                <img src="../assets/img/newguide_sec_05.png" alt="绑定银行卡">
            </div>
        </div>
        <div class="new-guide-sec new-guide-sec-p2 sec-bg2 clearfix">
            <div class="fr w1">
                <div class="new-guide-steps" style="margin-top: 100px;">
                    <i>06</i>
                    <em>第六步</em>
                </div>
                <div class="tit">申请结算提现资金</div>
                <div class="des">申请结算-进入账户充值提现</div>
                <a href="javascript:;" @click="settlement" class="btn">结算提现</a>
            </div>
            <div class="fl">
                <img src="../assets/img/newguide_sec_06.png" alt="结算提现">
            </div>
        </div>
        <div class="new-guide-end">
            <img src="../assets/img/newguide_sec_07.png">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    beforeCreate(){
        this.$store.commit('newheadactive',4)
    },
  computed:{
      islog(){
          return this.$store.state.islogos;
      }
  },
  methods:{
      recharge(){
          if(!this.islog){
              this.$router.push('/login')
          }else{
            this.$router.push('/member/assets')
          }
      },
      transaction(){
          if(!this.islog){
              this.$router.push('/login')
          }else{
            this.$router.push('/member/mytrade')
          }
      },
      addbank(){
          if(!this.islog){
              this.$router.push('/login')
          }else{
            this.$router.push('/member/setting')
          }
      },
      settlement(){
          if(!this.islog){
              this.$router.push('/login')
          }else{
            this.$router.push('/member/drawings')
          }
      }
  },
}
</script>
