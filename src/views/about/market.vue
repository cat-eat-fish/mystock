<template>
  <div class="market">
      <div class="wrap">
            <div class="about-sec">
                <h1 class="market-title">
                    <span class="red">为什么要加盟</span>创盈中心？
                    <span class="line"></span>
                </h1>
                <div class="market-item clearfix">
                    <div class="fr img"><img src="../../assets/img/market_01.jpg"></div>
                    <div class="fl content text-right">
                        <h2 style="text-align:left">国内最权威的股票操盘平台</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创盈中心提供专业的股票操盘服务，同时也是国内专业的操盘加盟提供商。企业在传统行业深耕多年，拥有一支专业的风控团队和操盘手团队，可以随时为您服务，现诚邀全国加盟代理，享受高额利润分成，有志加盟股票操盘行业者，欢迎详询合作！</p>
                    </div>
                </div>
                <div class="market-item clearfix">
                    <div class="fl img"><img src="../../assets/img/market_02.jpg"></div>
                    <div class="fr content">
                        <h2>创盈中心加盟方式</h2>
                        <p style="text-align:left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以合作伙伴的方式加入创盈中心，创盈中心成为您强大的后盾，为您提供全方位的资金支持，技术支持，风控管理，以及客户的日常维护。</p>
                    </div>
                </div>
            </div>
            <div class="about-sec">
                <h1 class="market-title">
                    创盈中心<span class="red">产品优势</span>
                    <span class="line"></span>
                </h1>
                <div class="market-advant">
                    <p>1.	公司实力雄厚，全行业最大最安全最稳定最快捷，自有资金百分百实盘股票操盘专业平台；</p>
                    <p>2.	快速开户，操盘门槛低，200元起配；</p>
                    <p>3.	资金秒配秒到，方便快捷，支持多渠道充值，让客户安心；</p>
                    <p>4.	高杠杆倍数，10倍杠杆；</p>
                    <p>5.	实名认证安全，第三方资金监管，专款专用；</p>
                    <p>6.	闪电提现，提现只到绑定的银行卡；</p>
                    <p>7.	期限灵活，按天按月随心配，按月只收交易日管理费。</p>
                </div>
            </div>
            <div class="about-sec">
                <h1 class="market-title">
                    加盟<span class="red">代理条件</span>
                    <span class="line"></span>
                </h1>
                <div class="market-item clearfix">
                    <div class="fl img"><img src="../../assets/img/market_04.jpg"></div>
                    <div class="fr content" style="width:574px;text-align:right">
                        <p class="pt25">诚信守信，合法合规，依法诚信经营的自然法人或自然人；</p>
                        <p>具备与股票操盘行业相关的人脉资源、市场资源、业务经验和知识和相对固定的经营场所；</p>
                       <p> 签订区域独立代理协议，负责该地区的股票操盘业务与维护工作，并进行利润分成模式合作；</p>
                        <p>公司可提供专业的业务培训和辅导，协助市场宣传和品牌宣传，快速抢占市场。</p>
                    </div>
                </div>
            </div>
            <div class="about-sec">
                <h1 class="market-title">
                    加盟<span class="red">代理流程</span>
                    <span class="line"></span>
                </h1>
                <div class="market-step clearfix">
                    <ul>
                        <li>
                            <img src="../../assets/img/market_step1.png">
                            <p>填写申请合作</p>
                        </li>
                        <li>
                            <img src="../../assets/img/market_step2.png">
                            <p>资格审核</p>
                        </li>
                        <li>
                            <img src="../../assets/img/market_step3.png">
                            <p>鉴定协议书</p>
                        </li>
                        <li>
                            <img src="../../assets/img/market_step4.png">
                            <p>开发客户</p>
                        </li>
                        <li>
                            <img src="../../assets/img/market_step5.png">
                            <p>每月获取高额服务费</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="about-sec">
                <h1 class="market-title">
                    加盟<span class="red">代理优势</span>
                    <span class="line"></span>
                </h1>
                <div class="market-advant market-advant1">
                    <p>1.	独立的代理商后台，客户管理一目了然；</p>
                    <p>2.	独立的代理商网站，公司名称可自主设置；</p>
                    <p>3.	0技术0经验0加盟费，总部全程一站式服务；</p>
                    <p>4.	强大的互联网营销推广团队，品牌日均曝光次数超过50万次；</p>
                    <p>5.	专业完善的技术团队，风控团队支持；</p>
                    <p>6.	后续无忧服务，专业客服全天候维护客户；</p>
                    <p>7.	丰厚服务费，返佣准确快速。</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'market',
  data () {
    return {
        
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',1)
      this.$store.commit('newaboutactive',2)
  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
