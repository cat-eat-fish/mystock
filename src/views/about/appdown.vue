<template>
  <div class="appdown">
      <!-- 头部 -->
      <MyHead></MyHead>

            <div class="appdown-banner">
            <div class="wrap">
                <div class="banner-main">
                    <div class="logo"><img src="../../assets/img/logo.png" alt="创盈中心"></div>
                    <h3>国内最大实盘股票操盘平台</h3>
                    <p>自有资金百分百实盘股票操盘平台操盘用户无需开立证券账户，</p>
                    <p>只需注册登录创盈中心操盘账户，即可交易所有非ST类股票，</p>
                    <p>安全便捷操盘炒股尽在创盈中心APP。</p>
                    <div class="appdown-list clearfix">
                        <dl>
                             <dd>
                                <img src="../../assets/img/znzx_android.png" style="width:105px;" alt="创盈中心安卓二维码">
                                <p>安卓下载</p>
                                <a href="javascript:void(0)" class="appdown-and" style="margin-top:30px;"><img src="../../assets/img/appdown_andbtn.png"></a>
                            </dd>
                            <dd style="width:34%;">
                                <img src="../../assets/img/appdown_ios.jpg" style="width:105px;" alt="创盈中心ios二维码">
                                <p>ios下载</p>
                                <p class="txt">如果您使用的是苹果手机版，安装后打开会提示未受信任的企业级开发者，您需要打开：设置-通用-设备管理-信任所弹出的商户的企业级应用。如使用有问题，请联系客服。</p>
                              
                            </dd>
                        </dl>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="appdown-main">
            <div class="warp clearfix">
                <div class="appdown-main-r">
                    <h3>随时随地操盘炒股</h3>
                    <p>随时操作，随地操盘，随心操盘，运用互联网技术，在线即可解决股民股票操盘放大操盘收益的需求，搭建操盘用户财富增值加速器，让炒股收益更丰厚。创盈中心拥有一支专业的强大的技术团队，</p>
                    <p>自主开发并运营创盈中心平台系统，从证券公司交易系统分离独立子账户，用户可以挂委托撤单查询委托真实性，百分百实盘操盘，拒绝虚拟盘交易。对操盘用户交易资金的管理完全按照"专户专款专用"的标准进行运作，资金第三方托管，充值即时到账，并只能提现到实名认证绑定的银行卡，充分保障操盘用户的资金安全。</p>
                    <a href="javascript:void(0)" class="btn" >下载APP &gt;&gt;</a>
                </div>
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
  name: 'appdown',
}
</script>
