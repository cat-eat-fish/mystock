<template>
  <div class="feedertrade">
            <div class="bg-banner"></div>
            <div class="free-bg">
                <div class="bg01">
                    <ul>
                        <li class="bg_yel"><span class="word1">总计已有</span><span class="wordred count_activited"><i>9</i><i>1</i><i>7</i><i>1</i></span><span class="word3">人参与</span></li>
                        <li class="pd">今日&nbsp;<span class="color-rede1 totalborrow ">2000</span>元免费操盘资金</li>
                        <li class="bg_yel"><span class="word1">还剩余</span><span class="wordred leave_activited"><i>1</i><i>9</i><i>6</i><i>2</i><i>9</i></span><span class="word3">人份</span></li>
                    </ul>
                    <input type="hidden" id="avtivityedcount" value="371">
                    
                </div>
                <div class="bg02"><a class="menu-receive" @click="startstockfree">立即领取<i class="free_borrow">2000</i>元</a></div>
                <div class="bg03">
                    <h1>活动规则</h1>
                    <ul>
                        <li>1. 赠送 <i class="free_borrow">2000</i>元实盘资金（完全免费）;</li>
                        <li>2. 您交<i class="benjin">100</i>元保证金（结束时如无亏损全额返还，如亏损则扣除亏损剩余返还）;</li>
                        <li>3. 总共 <span class="totalmoney">2100</span>元实盘资金（由您操盘，盈利全归您）;</li>
                        <li>4. 盈利全归您<span id="profit_distribution" style="display: none;">10</span>，亏损自负（无亏损保证金全额退还，如交易账户总资产低于<span class="openline">2030.00</span>元将会自动平仓并终止体验，亏损将从保证金中扣除，超出保证金亏损部分由创盈中心承担）;</li>
                        <li>5. 免费操盘资金仅限使用 <span class="days">3</span>个交易日，第<span class="days">3</span>个交易日只能委托卖出不能委托买入，如第<span class="days">3</span>个交易日未委托卖出股票，系统将在14:30后执行自动委托卖出指令，不保证委托卖出价格。</li>
                    </ul>
                    <div class="bg3-cont">
                        <div class="right">*创盈中心拥有本次活动最终解释权</div>
                        <div class="gifts">完成免费炒股 更有豪礼相送</div>
                    </div>
                </div>
                <div class="bg04">
                    <a class="menu-receive">
                        <div class="sp1">创盈中心</div>
                        <div class="sp2">券商</div>
                    </a>
                </div>
                <div class="bg05">
                    <h1>细数券商三宗罪</h1>
                    <div class="sin clearfix">
                        <ul class="sin1">
                            <li class="c_red">宗罪2：</li>
                            <li class="word-blue">风险控制差</li>
                            <li><span>一不小心就被套</span></li>
                        </ul>
                        <ul class="sin2">
                            <li class="c_red">宗罪1：</li>
                            <li class="word-blue">开户速度慢</li>
                            <li><span>开户流程繁琐<br>
                                线下排队挤破头</span></li>
                        </ul>
                        <ul class="sin3">
                            <li class="c_red">宗罪3：</li>
                            <li class="word-blue">客服不尽心</li>
                            <li><span>客服电话难接通<br>
                                处理问题效率低下</span></li>
                        </ul>
                    </div>
                </div>
                <div class="bg06"><a class="menu-receive" @click="startstockfree">立即领取<i class="free_borrow">2000</i>元</a></div>
                <div class="bg07">
                    <div class="bg07-cont">
                        <ul class="left-cont">
                            <li>30秒</li>
                            <li>股票上涨10% 利润可达90%</li>
                            <li>分级止损预警</li>
                            <li>人工止损预警</li>
                        </ul>
                        <ul class="right-cont">
                            <li>24小时</li>
                            <li>股票上涨10% 利润可达10%</li>
                            <li>无</li>
                            <li>无</li>
                        </ul>
                        <div class="bg07-word">创盈中心速度快 利润高 风险控制更权威！</div>
                    </div>
                </div>
            </div>
            <div class="company-intro">
                <div class="company-box clearfix">
                    <ul>
                        <li>
                            <img src="../../assets/img/icon-zj.png"></li>
                        <li>资金保障</li>
                        <li class="last-line">第三方支付机构为平台提供资金委托服务，严格把控，确保用户资金安全。</li>
                    </ul>
                    <ul>
                        <li>
                            <img src="../../assets/img/icon-xx.png"></li>
                        <li>信息保障</li>
                        <li class="last-line">国际领先的系统加密保护技术，保障用户的交易信息和资金信息不泄露。</li>
                    </ul>
                    <ul>
                        <li>
                            <img src="../../assets/img/icon-xm.png"></li>
                        <li>项目保险</li>
                        <li class="last-line">设立严格的风控制度，从而实现全过程资金严控，保证资金安全。</li>
                    </ul>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        
    }
  },
  computed:{
      islog(){
          return this.$store.state.islogos;
      }
  },
  methods:{
      startstockfree(){
        //   判断是否登录状态
          if(!this.islog){
              this.$router.push('/login')
          }else{
            // this.$router.push('/login')
          }
      }
  }
}
</script>
