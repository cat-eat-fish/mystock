<template>
  <div class="myfoot">
      <div class="footer">
        <div class="foot-cont clearfix">
            <div class="f-cont">
                <ul class="clearfix">
                    <li v-for="(item,index) in tnav" :key="index">
                        <router-link :to="item.href">
                            {{item.text}}
                        </router-link>
                    </li>
                    <li>
                        <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone"></a><a href="#" class="bds_tsina" data-cmd="tsina"></a><a href="#" class="bds_tqq" data-cmd="tqq"></a><a href="#" class="bds_renren" data-cmd="renren"></a><a href="#" class="bds_weixin" data-cmd="weixin"></a></div>
                    </li>
                </ul>
                <div class="write">
                    <div class="flogo"><img src="../assets/img/logo.png"></div>
                    <div class="fw">
                        <h1>风险提示  </h1>
                        保护投资者利益是中国证监会工作的重中之重。<br>
                        我们提醒您： 股市有风险，投资需谨慎！<br>
                        市场风险莫测，务请谨慎行事！
                    </div>
                    <div class="m-cont">
                        <img width="100" src="../assets/img/thumb_201712141425154357.jpg"><br>
                        关注微信公众号
                    </div>
                </div>
            </div>
            <div class="r-cont">
                <div class="r-cont-main">
                    <span style="font-size:16px;font-family:Arial;padding-bottom:0;">24小时咨询热线</span><span>0755-28896306</span>9:00 - 17:30
                </div>
            </div>
        </div>
        <p style="text-align: center; color: #fff; margin-top: -10px; padding-bottom: 10px;">Copyright (c) 2015  ******* All Rights Reserved  <a style="color:#fff;" href="http://www.miibeian.gov.cn/" target="_blank" title="" rel="nofollow">粤ICP备17152310号-1</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myfoot',
  data () {
    return {
      tnav:[
          {id:0,text:'公司简介',href:'/other/about'},
          {id:1,text:'联系我们',href:'/other/contactus'},
          {id:2,text:'招商加盟',href:'/other/market'},
          {id:3,text:'APP下载',href:'/other/appdown'},
          {id:4,text:'安全保障',href:'/safety'},
          {id:5,text:'咨询中心',href:'/news/consultation'},
      ]
    }
  }
}
</script>