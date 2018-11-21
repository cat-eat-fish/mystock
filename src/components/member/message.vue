<template>
  <div class="message">
        <Me></Me>
        <div class="news-wrap">
            <h3>消息中心 </h3>
            <div class="new-list">
                <div class="JS-message-news message-content-wrap" v-for="(item,index) in lists" :key="index"> 
                    <p class="clearfix title" @click="showcon(item.id)"> 
                        <span class="news-type">公告</span> 
                        <span class="news-title">{{item.title}}</span>
                        <span class="news-post-time">{{item.date}}</span>
                    </p> 
                    <div style="" class="news-content clearfix"> 
                        <p style="text-indent:2em;">
                            <span style="font-size:14px;">{{item.content}}</span>
                        </p>
                    </div>
                </div>
                <Page v-if="lists" :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
            </div>
        </div>
  </div>
</template>

<script>
import Me from "./me.vue"
import Page from '@/components/page'
export default {
    components:{
        Me,Page
    },
  name: 'message',
  data () {
    return {

        lists:[
            {id:0,title:'厦门楼市神话破灭，但真实情况是如何的？',content:'近日，一篇名为《厦门神话破灭：地价腰斩，地王挥泪甩卖！房价下跌上万元！》的文章刷爆了我们的朋友圈，再次引起大家对于厦门房价的热议。',date:'2018/8/9 9:52:45'},
            {id:1,title:'房地产税要来了！但其初衷不是为房价而来！',content:'近日，一篇名为《厦门神话破灭：地价腰斩，地王挥泪甩卖！房价下跌上万元！》的文章刷爆了我们的朋友圈，再次引起大家对于厦门房价的热议。',date:'2018/8/8 13:34:48'},
            {id:2,title:'楼市调控发出最强音：坚决遏制房价上涨！',content:' 最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过了800亿元。',date:'2018/8/7 10:28:28'},
            {id:3,title:'问题多多！千亿独角兽带“病”上市？',content:' 最近，由于长生生物疫苗造假事件的发酵，叠加美年健康被曝出“假医生“，a股市场上的医疗板块市值已蒸发超过了800亿元。',date:'2018/8/6 10:38:11'},
            {id:4,title:'沪指七月收宫战翻红，八月能否跌穿2638点？',content:'7月31日是七月份最后一个交易日，三大股指平稳收宫。a股素来有“五穷六绝七翻身”的说法，然而“五穷六绝”如期上演了，“七翻身”却成了泡影。',date:'2018/8/3 10:09:52'},
            {id:5,title:'碧桂园是如何发家的？高周转模式可持续吗？',content:'碧桂园，是中国房地产的龙头企业之一。2017年，碧桂园实现合同销售金额人民币5508亿人民币，跃居行业第一，其也是首个年销售额突破5000亿元的房企。',date:'2018/8/2 9:58:49'},
            {id:6,title:'震撼！上市公司频现黑天鹅事件！',content:'今年以来，上市公司爆出不少大雷，不少上市公司由于资金问题而出现债券违约，或者股份质押由于股价大跌而被平仓，又或者为了兑付债券而发行新债但却遭到失败等等。',date:'2018/8/1 10:55:16'},
        ],
        page:{
            onedate:5,
            oldlistsnum:1,
        },
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
      this.$store.commit('newuseractive',6)
  },
  created(){

  },
  mounted(){
        document.querySelectorAll('.news-content')[0].style.cssText="display:block"
  },
  methods:{
      showcon(e){
          var lis=document.querySelectorAll('.news-content');
          lis.forEach(element => {
              element.style.cssText="dsiplay:none";
          });
          lis[e].style.cssText="display:block"
      },
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

<style scoped lang="scss">
    .message{
         padding-top: 50px;
        width: 980px;
        padding-bottom: 120px;
    }
    .news-wrap {
        border: 1px solid #ddd;
        padding: 40px;
        h3 {
            color: #000;
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #DDD;
            font-size: 16px;
            font-weight: 700;
        }
    }
    .news-list {
        font-size: 14px;
        
    }
    .title{
        height: 21px;
        cursor: pointer;
    }
    .news-post-time {
            float: right!important;
            color: #999;
        }
        .news-type {
            width: 54px;
            height: 21px;
            line-height: 21px;
            overflow: hidden;
            text-align: center;
            background-color: #ccc;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
        }
        .message-content-wrap {
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
            span {
                float: left;
                height: 21px;
                line-height: 21px;
            }
        }
        .news-content {
            line-height: 20px;
            display: none;
            margin-top: 20px;
            min-height: 100px;
            padding-top: 20px;
            margin-left: 80px;
            font-size: 14px;
            border-top: 1px #ddd dotted;
        }
        .news-title {
            font-weight: 700;
            font-size: 14px;
            margin-left: 20px;
        }
</style>
