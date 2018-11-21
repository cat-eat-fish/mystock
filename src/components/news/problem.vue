<template>
  <div class="consultation">
      <div class="news-content-wrap clearfix">
            <div class="content-left">
                <div class="item-newslist-wrap clearfix" v-for="(item,index) in lists" :key="index">
                    <router-link :to="{path:`/news/newspage/${item.id}`}" target="_blank" style="display: inline-block;">
                        <img style="width: 160px; height: 120px;" :src="item.thumb" class="view-top">
                    </router-link>
                    <div class="content-wrap-news">
                        <router-link :to="{path:`/news/newspage/${item.id}`}" target="_blank" class="c-title">
                            {{item.title}}
                        </router-link>
                        <div class="summary">{{item.desc}}</div>
                        <div class="bottom-wrap clearfix">
                            <div class="views">
                                <img src="../../assets/img/views.png">{{item.look}}
                            </div>
                            <div class="date">{{item.date}}</div>
                        </div>
                    </div>
                </div>
                <Page v-if="lists" :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
            </div>
            <!-- <div class="content-right"></div> -->
        </div>
  </div>
</template>

<script>
import Page from '@/components/page'
export default {
  name: 'consultation',
  components: {
    Page
  },
  data () {
    return {
        page:{
            onedate:10,
            oldlistsnum:1,
        },
        lists:[
            {id:0,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:1,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:2,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:3,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:4,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:5,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:6,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:7,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:8,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:9,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
            {id:10,thumb:require('../../assets/img/thumb_201808081115206743.jpg'),href:'',title:'周二行情强势反弹，行情逆转仍面临考验！',desc:'周二三大股指齐齐飙涨，早盘沪深两市双双高开后试探性回落，但是10点半后大幅拉升单边上扬。沪指创下逾两年的单日最大涨幅，成功回到2750点上方。盘面上，行业板块全线飘红，沪深两市合计成交3167亿元，量能较之前有所放大。',look:2,date:'2018-08-08'},
        ]
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
      this.$store.commit('newnewsactive',4)
  },
  created(){

  },
  methods:{
      myme(page){
        var that = this;
        var id = this.$route.params.id
        var uid = sessionStorage.getItem('userid');
        var url ;
        if(page == null){
            url = `http://first.hdgprj.com/index.php?app=api&mod=user&ac=peizi_detail&uid=${uid}&pz_id=${id}`
        }else{
            url = `http://first.hdgprj.com/index.php?app=api&mod=user&ac=peizi_detail&uid=${uid}&pz_id=${id}&page=${page}`
        }
    this.$axios.get(url)
      .then((data)=>{
          console.log(data)
          if(data.data.code == 1){
            var data = data.data.data
            that.dh = data.pz_num
            that.pzje = data.trade_money_total
            that.bzj = data.bond_total
            data.end_time = that.formatDate(parseInt(data.end_time))
            that.time = data.end_time
            that.fwf = data.manage_cost_act
            data.jilu.forEach((val,index)=>{
                switch(val.type){
                    case '1':
                            val.type = '充值';
                            break;
                            case '2':val.type = '提现';
                            break;
                            case '5':val.type = '冻结保证金';
                            break;
                            case '6':val.type = '解冻保证金';
                            break;
                            case '7':val.type = '补交亏损';
                            break;
                            case '10':val.type = '支付管理费';
                            break;
                            case '12':val.type = '盈利提取';
                            break;
                            case '302':val.type = '操盘提盈';
                            break;
                            default:
                            data.type = '默认';
                        }
                val.rtime = that.formatDate(parseInt(val.rtime))
            })

            that.datalists = data.jilu
            that.page.oldlistsnum=data.pager;
          }
      })
      .catch(()=>{

      })
      },
    ievent(data){
        // this.myme(data)
    },
    pageprev(data){
        // this.myme(data)
    }
  },
}
</script>
