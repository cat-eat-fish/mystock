<template>
  <div class="safety">
      <!-- 头部 -->
      <MyHead></MyHead>
      
        <div class="wrap">
            <div class="safe-title">法律保障</div>
            <div class="safe-list clearfix">
                <ul>
                    <li class="img-cont"><img src="../assets/img/icon-falv01.png"></li>
                    <li class="word-title">居间服务的合法性</li>
                    <li>根据《合同法》第23章关于”居间合同”的规定，特别是第424条规定的”居间合同是居间人向委托人报告订立合同的机会或者提供订立合同的媒介服务，委托人支付报酬的合同”，创盈中心为操盘人提供撮合的居间服务有着明确的法律基础。</li>
                </ul>
                <ul>
                    <li class="img-cont"><img src="../assets/img/icon-falv02.png"></li>
                    <li class="word-title">电子合同的合法性</li>
                    <li>根据《电子签名法》的规定，民事活动中的合同或者其他文件、单证等文书，当事人可以约定使用电子签名、数据电文，不能因为合同采用电子签名、数据电文就否定其法律效力。同时，《电子签名法》中还规定，可靠的电子签名与手写签名或者盖章具有同等的法律效力。明确肯定了符合条件的电子签名与手写签名或盖章具有同等的效力。</li>
                </ul>
            </div>
            <div class="safe-title">信息保障</div>
            <div class="safe-list clearfix">
                <ul>
                    <li class="img-cont"><img src="../assets/img/icon-xinxi01.png"></li>
                    <li class="word-title">强制加密</li>
                    <li>采用强制加密技术，让用户在进行个人账户管理、充值提现等操作时，信息被自动加密。</li>
                </ul>
                <ul>
                    <li class="img-cont"><img src="../assets/img/icon-xinxi02.png"></li>
                    <li class="word-title">安全隔离</li>
                    <li>防火墙隔离系统的访问层、控制层、逻辑层和数据层。</li>
                </ul>
            </div>
            <div class="safe-title">风控保障</div>
            <div class="safe-list clearfix">
                <ul class="fengkong">
                    <li class="img-cont"><img src="../assets/img/icon-fengkong.png"></li>
                    <li>创盈中心采用专业的风险管理体系，严格限制可投资范围和持仓集中度，实时监控账户风险，严格执行预警平仓机制，禁止违规交易。</li>
                </ul>
            </div>
            <div class="safe-title">资金保障</div>
            <div class="safe-list clearfix no-botborder">
                <ul class="zijin">
                    <li class="img-cont"><img src="../assets/img/icon-zijin01.png"></li>
                    <li class="word-title">第三方托管</li>
                    <li>创盈中心委托第三方支付机构对用户账户进行资金管理第三方托管</li>
                </ul>
                <ul class="zijin">
                    <li class="img-cont"><img src="../assets/img/icon-zijin02.png"></li>
                    <li class="word-title">银行卡绑定</li>
                    <li>用户资金只能转出到实名认证及绑定过的同名银行账户。</li>
                </ul>
                <ul class="zijin">
                    <li class="img-cont"><img src="../assets/img/icon-zijin03.png"></li>
                    <li class="word-title">操作透明</li>
                    <li>用户可以实时查询到资金账户详情及每一笔交易记录。</li>
                </ul>
                <ul class="zijin">
                    <li class="img-cont"><img src="../assets/img/icon-zijin04.png"></li>
                    <li class="word-title">严格内控</li>
                    <li>内部严格的资金管理流程和安全完善的系统保证资金安全。</li>
                </ul>
            </div>
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
  name: 'safety',
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
  },
}
</script>
