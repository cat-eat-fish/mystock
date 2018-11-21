<template>
  <div class="about">
      <div class="wrap">
            <div class="about-sec">
                <h1 class="about-title">
                    关于我们
                    <span class="line"></span>
                </h1>
                <div class="company-info">
                    <p>创盈中心，是一个专注于创新型股票操盘服务平台，致力于为广大用户提供方便、快捷安全、稳定的互联网金融投资服务。创盈中心平台引进了现代投资管理理念，建立了具有自己特色的管理模式，致力于向客户提供专业化经营的市场发展战略，用我们的专业和贴心服务共创佳绩。</p>
                    <p>公司拥有雄厚的资金实力，金融背景深厚，为金融投资者提供资金匹配、风险控制、金融信息等一站式服务。以客户为中心，秉承专业、诚信、贴心、共赢的服务宗旨，以诚信共赢、高效专业的经营理念，赢得了客户及合作伙伴的高度认可，紧密结合金融市场环境及用户需求，不断加强创新能力，致力于为用户打造一个安全、专业、稳定、可信任的投资平台。</p>
                    <div class="company-map"></div>
                </div>
            </div>
            <div class="about-sec">
                <h1 class="about-title">
                    三大优势
                    <span class="line"></span>
                </h1>
                <div class="about-advant">
                    <div class="advant-item clearfix">
                        <div class="fl cont">
                            <h3>实力：资金实力雄厚，行业经验丰富</h3>
                            <p>创盈中心平台在新型互联网行业深耕多年，安全、合法和稳定，资金量庞大，充分保证平台交易实盘操作。业务经营专业化、业务管理科学化。</p>
                        </div>
                        <div class="fr imgs"><img src="../../assets/img/about_advant1.jpg"></div>
                    </div>
                    <div class="advant-item clearfix">
                        <div class="fr cont">
                            <h3>方便：在线操作快速简便，财富增值快人一步</h3>
                            <p>创盈中心在线完成，只需要通过手机号码注册登录，即可通过公司官网进行在线操作，方便快捷，资金充值到账便利，支付少额保证金，进行股票操盘，放大交易收益。</p>
                        </div>
                        <div class="fl imgs"><img src="../../assets/img/about_advant2.jpg"></div>
                    </div>
                    <div class="advant-item clearfix">
                        <div class="fl cont">
                            <h3>安全：实名认证资金安全隐私保护信息安全</h3>
                            <p>创盈中心三方监管并施，资金由银行监管，交易由券商监管，风控由投资达人监管，采用互联网数据全行业标准的安全协议，用户在进行个人账户管理、充值等涉及敏感信息的操作时，防止任何人包括公司员工获取用户信息，保证用户的个人信息安全及资金交易安全。</p>
                        </div>
                        <div class="fr imgs"><img src="../../assets/img/about_advant3.jpg"></div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  beforeCreate(){
      this.$store.commit('newheadactive',1)
      this.$store.commit('newaboutactive',0)
  },
  created(){
      
  }
}
</script>

