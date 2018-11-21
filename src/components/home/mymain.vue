<template>
    <div class="main">
        <div class="swiper-container" id="swiper">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in myswiper.imgs" :key="index" class="swiper-slide">
                    <img  class="title a-flyTopIn" :src="item.src">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!-- 固定登录注册 -->
        <div class="login-index">
            <div class="login-box-tp1">
                <div class="login-box-con">
                    <div class="tit">您炒股，我出钱</div>
                    <div class="line"></div>
                    <h1>注册领取2000元体验金</h1>
                    <p>资金安全双重保障，100%实盘交易</p>
                    <div id="userout">
                        <router-link to="/register" class="btn">马上注册</router-link>
                        <p class="log">已有账号？ <router-link to="/login">立即登录</router-link></p>
                    </div>
                    <div id="userin" style="display: none;">
                        <a href="/member/assets.html" class="btn">个人中心</a>
                        <p class="log"><a href="javascript:void(0);" onclick="loginout()" class="reg">安全退出</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 1 -->
            <div class="pb1">
                <ul>
                    <li :class="item.class" v-for="(item,index) in pb1" :key="index">
                        <span>{{item.title}}</span>
                        <strong>
                            <span>{{item.text}}</span>
                        </strong>
                    </li>
                </ul>
            </div>
            <!-- 2 -->
            <div class="index-sec index-pro">
                <div class="wrap">
                    <div class="index-tit">
                        <div class="en">FUNDING</div>
                        <div class="ch">申请·<span>领投</span></div>
                        <div class="line"></div>
                        <p>小资金 大利润 我出资金 盈利翻番</p>
                    </div>
                    <div class="index-prolist clearfix">
                        <ul>
                            <li v-for="(item,index) in pb2" :key="index">
                                <i class="ico" :class="item.class"></i>
                                <h3>{{item.title}}</h3>
                                <p v-html="item.p1"></p>
                                <p v-html="item.p2"></p>
                                <p  v-if="item.p3==''">&nbsp;</p>
                                <p v-else v-html="item.p3"></p>
                                <router-link :style="{background:item.bg}" :to="item.href" class="btn btn-red">我要领投</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 3 -->
            <div class="index-sec index-join">
                <div class="wrap">
                    <div class="index-tit">
                        <div class="en">STOCK MARKET</div>
                        <div class="ch">招商·<span>加盟</span></div>
                        <div class="line"></div>
                        <p>市场巨大，发展前景一片蓝海</p>
                    </div>
                </div>
                <div class="index-join-main">
                    <div class="join-btn">国内最权威的股票操盘平台200元起配</div>
                    <p class="en">WE SINCERELY INVITE YOU TO JOIN US</p>
                    <p>现诚邀全国代理加盟，欢迎咨询合作！</p>
                    <p class="join-phone">0755-28997270</p>
                </div>
            </div>
            <!-- 4 -->
            <div class="index-sec nindex-news">
                <div class="wrap">
                    <div class="index-tit">
                        <div class="en">NEWS</div>
                        <div class="ch">最新·<span>资讯</span></div>
                        <div class="line"></div>
                        <p>精进不休，我们的最新动态</p>
                    </div>
                    <div class="nindex-news-main clearfix">
                        <div class="nindex-news-left fl">
                            <div class="nindex-news-tit clearfix">
                                <ul class="nav fl">
                                    <li v-for="(item,index) in pb3_t" :key="index">
                                        <a :class="{on:index==pb4nav}" @click="changepb4nav(index)"  href="javascript:;">
                                            {{item.text}}
                                        </a>
                                    </li>
                                </ul>
                                <router-link to="/news/dynamic" class="more fr" >MORE&gt;&gt;</router-link>
                            </div>
                            <div class="nindex-news-con">
                                <div class="nindex-news-list" id="con_Innews_1">
                                    <div class="news-with clearfix">
                                        <div class="imgs fl">
                                            <img :src="pb3_c1.slice(0,1)[0].img" :alt="pb3_c1.slice(0,1)[0].title">
                                        </div>
                                        <div class="content fr">
                                            <h1>{{pb3_c1.slice(0,1)[0].title}}</h1>
                                            <div class="des">{{pb3_c1.slice(0,1)[0].content}}</div>
                                            <router-link :to="pb3_c1.slice(0,1)[0].href" class="btn" target="_blank">
                                                查看详情
                                            </router-link> 
                                        </div> 
                                    </div>
                                    <ul class="newslis">
                                        <li v-for="(item,index) in pb3_c1.slice(1)" :key="index">
                                            <router-link  :to="item.href" target="_blank">
                                                {{item.title}}
                                            </router-link>
                                            <span class="time fr">
                                                {{item.date}}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div  class="nindex-news-list" id="con_Innews_2">
                                    <div class="news-with clearfix">
                                        <div class="imgs fl">
                                            <img :src="pb3_c2.slice(0,1)[0].img" :alt="pb3_c2.slice(0,1)[0].title">
                                        </div>
                                        <div class="content fr">
                                            <h1>{{pb3_c2.slice(0,1)[0].title}}</h1>
                                            <div class="des">{{pb3_c2.slice(0,1)[0].content}}</div>
                                            <router-link :to="pb3_c2.slice(0,1)[0].href" class="btn" target="_blank">
                                                查看详情
                                            </router-link> 
                                        </div> 
                                    </div>
                                    <ul class="newslis">
                                        <li v-for="(item,index) in pb3_c2.slice(1)" :key="index">
                                            <router-link  :to="item.href" target="_blank">
                                                {{item.title}}
                                            </router-link>
                                            <span class="time fr">
                                                {{item.date}}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="nindex-news-right fr">
                            <div class="nindex-news-tit">
                                <span class="on fl">常见问题</span>
                                <a href="/news/problem" class="more fr" target="_blank">MORE&gt;&gt;</a>
                            </div>
                            <div class="nindex-news-qa">
                                <div class="qa-list" v-for="(item,index) in pb3_l" :key="index"> 
                                    <h1 class="qus"> 
                                        <i class="ico ico-q">问</i>
                                        <router-link :to="item.href" target="_blank">{{item.p}}</router-link> 
                                    </h1> 
                                    <div class="ans"> 
                                        <i class="ico ico-a">答</i> 
                                        <p>{{item.a}}</p> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 5 -->
            <div class="index-foot">
                <div class="wrap">
                    <ul>
                        <li v-for="(item,index) in pb5" :key="index">
                            <i class="ico" :style="{backgroundPosition:item.img}"></i>
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data () {
    return {
        // 新闻动态、子牛咨询切换
        pb4nav:'',
      myswiper:{
          imgs:[
            {id:0,src:require('../../assets/img/201806291814092837.jpg')},
            {id:1,src:require('../../assets/img/201806291814092838.png')},
          ]
      },
    //   pb1
      pb1:[
          {id:0,class:'s1',title:'资金保障',text:'资金第三方托管，专款专用',src:''},
          {id:1,class:'s2',title:'真实交易',text:'100%实盘，level2可查委托',src:''},
          {id:2,class:'s3',title:'快捷提现',text:'闪电提现，三十分钟到账',src:''},
          {id:3,class:'s4',title:'专业服务',text:'客户体验至上为宗旨',src:''},
      ],
    //   pb2
    pb2:[
        {id:0,class:'ico-1',bg:'#cd3733',title:'按天领投',p1:'最高<span>500</span>万按日计息<span>200</span>元',p2:'起配<span>3-10</span>倍杠杆期限<span>2-20</span>',p3:'天盈利放大<span>10<span>倍',src:'',href:'/trade/daytrade'},
        {id:1,class:'ico-2',bg:'#0071da',title:'按月领投',p1:'<span>200</span>元起配<span>3-9</span>倍杠杆期限',p2:'<span>1-3</span>月盈利放大<span>9</span>倍',p3:'',src:'0 -170px',href:'/trade/monthtrade'},
        {id:2,class:'ico-3',bg:'#264561',title:'免费体验',p1:'<span>100</span>元配<span>2000</span>元<span>20</span>倍杠杆期',p2:'限<span>2</span>天盈利放大<span>20</span>倍',p3:'',src:'0 -510px',href:'/trade/feedertrade'},
    ],
    pb3_t:[
        {id:0,text:'新闻动态'},
        {id:1,text:'子牛咨询'},
    ],
    pb3_c2:[
        {id:0,href:'/news/newspage/5',img:require('../../assets/img/thumb_201808.png'),title:'问题多多！千亿独角兽带“病”上市？',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-02'},
        {id:1,href:'/news/newspage/2',img:require('../../assets/img/thumb_201808.png'),title:'沪指七月收宫战翻红，八月能否跌穿2638点？',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-02'},
        {id:2,href:'/news/newspage/3',img:require('../../assets/img/thumb_201808.png'),title:'碧桂园是如何发家的？高周转模式可持续吗？',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-01'},
        {id:3,href:'/news/newspage/4',img:require('../../assets/img/thumb_201808.png'),title:'震撼！上市公司频现黑天鹅事件！',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-07-31'},
    ],
    pb3_c1:[
        {id:0,href:'/news/newspage/5',img:require('../../assets/img/thumb_20180614112.jpg'),title:'关于端午节休假安排的通知',content:'尊敬的合作伙伴： 2018年6月16日（星期六）—2018年6月18日（星期一）休市3天。2018年6月19日（星期二）…',date:'2018-08-02'},
        {id:1,href:'/news/newspage/2',img:require('../../assets/img/thumb_20180614112.jpg'),title:'合规声明',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-02'},
        {id:2,href:'/news/newspage/3',img:require('../../assets/img/thumb_20180614112.jpg'),title:'2018五一劳动节放假通知',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-08-01'},
        {id:3,href:'/news/newspage/4',img:require('../../assets/img/thumb_20180614112.jpg'),title:'创盈中心系统升级温馨提示',content:'最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过…',date:'2018-07-31'},
    ],
    pb3_l:[
        {id:0,p:'指数弱势震荡',href:'/news/newspage/2',a:'昨日深沪两市呈现探低反弹走势，各大指数低开后震荡走低，但随着创业板指率先企稳反弹，带动大盘整体实现大逆转。创业板个股表现最亮眼，总共有22只个股…'},
        {id:1,p:'指数震荡筑底',href:'/news/newspage/1',a:'消息面：1、中国外交部表示，中美经贸谈判刚刚开始，中美经贸谈判应该是互惠的。2、朝鲜最高领导人金正恩会见王毅。王毅表示中方支持和祝贺北南领导人成…'},

    ],
    // 
    pb5:[
        {id:0,img:'',title:'资金保障',text:'严谨的风控流程'},
        {id:1,img:'0 -60px',title:'信息保障',text:'资金由银行机构监管'},
        {id:2,img:'0 -120px',title:'项目保险',text:'资金秒到 收益放大10倍'},
        {id:3,img:'0 -180px',title:'极速开户',text:'30秒极速开户'},
    ]
    }
  },
  created(){
      var that = this;
  },
  methods:{
      changepb4nav:function(index){
          this.pb4nav=index;
          localStorage.setItem('mymain_pb4nav',index);
          document.querySelectorAll('.nindex-news-list').forEach(element => {
              element.classList.remove('hide');
          });
          document.querySelector('.nindex-news-list:nth-of-type('+(index+1)+')').classList.add('hide');
      }
  },
  created(){
      
  },

  created(){
      
  },
  mounted(){
      var swiper = new Swiper('#swiper', {
      effect : 'fade',
      loop:true,
      autoplay:true,
      pagination: {
        el: '#swiper .swiper-pagination',
        clickable :true,
      },
    });
    
    
    this.pb4nav=localStorage.getItem('mymain_pb4nav')?localStorage.getItem('mymain_pb4nav'):0;
    document.querySelectorAll('.nindex-news-list')[this.pb4nav].classList.add('hide');
  }
}
</script>

