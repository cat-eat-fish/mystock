<template>
  <div class="flowing">
        <Me></Me>
        <div class="assest-wrapper">
                        <div class="ass-title">资金明细</div>
                        <div class="ass-index">
                            <!-- <ul class="ass-time clearfix">
                                <span class="first-title">时间：</span>
                                <li v-for="(item,index) in date" class="time" @click="changebg1(item)" :time_date='index' :key="index">{{item.text}}</li>
                            </ul> -->
                            <ul class="ass-type clearfix">
                                <span class="first-title">类型：</span>
                                <li v-for="(item,index) in type" class="time" :data-type="item.type" @click="changebg2(item)" :time_date='index' :key="index">{{item.text}}</li>
                            </ul>
                        </div>
                        <table class="JS-iolist-page ass-table">
                             <tbody>
                                <tr>
                                    <th class="t-time">发生具体时间</th>
                                    <th class="t-type">类型</th>
                                    <th class="t-type">进账</th>
                                    <th class="t-money">支出</th>
                                    <th class="t-money">合计</th>
                                    <th class="t-balance" style=" width: 339px;">备注</th>
                                </tr>
                            </tbody>
                            <tbody v-if="lists.length!=0" >
                                <tr v-for="(val,index) in lists" :key="index">
                                    <td>{{val.rtime}}</td>
                                    <td>{{val.type}}</td>
                                    <td>{{ (val.in_or_out/100  * val.money) > 0 ? ((val.in_or_out/100 * val.money) ) : "" | MoneyFormat}}</td>
                                    <td>{{ (val.in_or_out/100  * val.money) > 0 ? "" : ((val.in_or_out/100 * val.money) ) | MoneyFormat}}</td>
                                    <td>{{val.balance | MoneyFormat}}</td>
                                    <td> <router-link :to="{path:`/member/memdetails/${val.rec_id}`}">查看</router-link> </td>
                                </tr>
                            </tbody>
                            <tbody v-else id="user_money_list"><tr><td colspan="6" style="text-align: center">暂无记录</td></tr></tbody>
                            
                        </table>
                        <Page v-if="lists.length!=0"  :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
                       <span class="clear_f"></span>
                            <div class="pageDiv page-middel clearfix" style="float: right;">
                                <div class="query">
                                    <div class="fl" style="display:none;">本页收支共:<span id="moneycount">0</span>笔,支出共:<span id="money_pay">0</span>元,收入共:<span id="money_get">0</span></div>
                                    <div class="page pagination-sm pagination" id="pager_user_money" style="display: none; width: auto; padding-top: 5px; padding-left: 30px;margin-right: 11px;"><span class="disabled">上一页</span><span class="current">1</span><span class="disabled">下一页</span></div>
                                </div>
                            </div>
                            <span class="clear_f"></span>
                            <input type="hidden" id="user_money_count" value="0">
       
                    </div>
  </div>
</template>

<script>
import Me from "./me.vue"
import qs from "qs"
import Page from '@/components/page'
export default {
    components:{
        Me,Page
    },
  name: 'flowing',
  data () {
    return {
        date:[
            {id:0,text:'全部',},
            {id:1,text:'一星期',},
            {id:2,text:'一个月',},
            {id:3,text:'三个月',},
            {id:4,text:'一年',}
        ],
        type:[
            {id:0,text:'全部',type:0},
            {id:1,text:'充值',type:1},
            {id:2,text:'提现',type:2},
            {id:3,text:'冻结保证金',type:5},
            {id:4,text:'解冻保证金',type:6},
            {id:5,text:'补交亏损',type:7},
            {id:6,text:'支付管理费',type:10},
            {id:7,text:'盈利提取',type:12},
            {id:8,text:'操盘提盈',type:302},
        ],
        lists:[],
        page:{
            onedate:10,
            oldlistsnum:1,
        },
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
      this.$store.commit('newuseractive',4)
  },
  created(){
      var that = this;
       var uid = sessionStorage.getItem('userid');
        var phone = sessionStorage.getItem('username');
        this.$axios.get(`http://first.hdgprj.com/index.php?app=api&mod=user&ac=fund&uid=${uid}`)
            .then(function (response) {
                if(response.data == ''){
                    that.lists = [];
                }else{
                    var data = response.data.data
                    data.data.forEach((val,index)=>{
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
                        val.rtime=that.formatDate(parseInt(val.rtime))
                    })
                    that.lists = data.data
                    that.page.oldlistsnum=data.pager;
                }
            })
            .catch(function (error) {

              });
  },
  methods:{
        // changebg1(e){
        //     var lis=document.querySelectorAll('.ass-time li');
        //     lis.forEach(element => {
        //         element.classList.remove('ass-check');
        //     });
        //     lis[e.id].classList.add('ass-check');
        // },
         changebg2(e){
            var lis=document.querySelectorAll('.ass-type li');
            var that = this;
            var uid = sessionStorage.getItem('userid');
            var phone = sessionStorage.getItem('username');
            var fundtype = lis[e.id].getAttribute('data-type')
            this.$axios.get(`http://first.hdgprj.com/index.php?app=api&mod=user&ac=fund&uid=${uid}&fundtype=${fundtype}`)
                .then(function (response) {
                    if(response.data == ''){
                        that.lists = [];
                    }else{
                        var data = response.data.data
                        data.data.forEach((val,index)=>{
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
                            val.rtime=that.formatDate(parseInt(val.rtime))
                        })
                        that.lists = data.data
                        that.page.oldlistsnum=data.pager;
                    }
                })
                .catch(function (error) {

            });
            lis.forEach(element => {
                element.classList.remove('ass-check');
            });
            lis[e.id].classList.add('ass-check');
        },
    ievent(data){
        var page = data
        var that = this;
            var uid = sessionStorage.getItem('userid');
            var fundtype = document.querySelector('.ass-type li.ass-check').getAttribute('data-type')
            this.$axios.get(`http://first.hdgprj.com/index.php?app=api&mod=user&ac=fund&uid=${uid}&fundtype=${fundtype}&page=${page}`)
                .then(function (response) {
                    if(response.data == ''){
                        that.lists = [];
                    }else{
                        var data = response.data.data
                        data.data.forEach((val,index)=>{
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
                            val.rtime=that.formatDate(parseInt(val.rtime))
                        })
                        that.lists = data.data
                        that.page.oldlistsnum=data.pager;
                    }
                })
                .catch(function (error) {

            });
    },
    pageprev(data){
        var page = data
        var that = this;
            var uid = sessionStorage.getItem('userid');
            var phone = sessionStorage.getItem('username');
            var fundtype = document.querySelector('.ass-type li.ass-check').getAttribute('data-type')
            this.$axios.get(`http://first.hdgprj.com/index.php?app=api&mod=user&ac=fund&uid=${uid}&fundtype=${fundtype}&page=${page}`)
                .then(function (response) {
                    if(response.data == ''){
                        that.lists = [];
                    }else{
                        var data = response.data.data
                        data.data.forEach((val,index)=>{
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
                            val.rtime=that.formatDate(parseInt(val.rtime))
                        })
                        that.lists = data.data
                        that.page.oldlistsnum=data.pager;
                    }
                })
                .catch(function (error) {

            });
    }
  },
  computed:{
      formatDate(){
          return this.$store.state.format
      }
  },
  mounted(){
    //   document.querySelector('.ass-time li:nth-of-type(1)').classList.add('ass-check');
      document.querySelector('.ass-type li:nth-of-type(1)').classList.add('ass-check');
  }
}
</script>

<style scoped lang="scss">
.page{width: 100%;display: block}
    .flowing{
         padding-top: 50px;
        width: 980px;
        padding-bottom: 120px;
    }
    .assest-wrapper {
        padding: 40px 40px 20px;
        border: 1px solid #DDD;
        .ass-title {
            font-size: 16px;
            font-weight: 700;
            color: #000;
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #DDD;
        }
        .ass-index {
            padding-top: 40px;
            .first-title {
                font-size: 14px;
                color: #666;
                font-weight: 700;
                width: 50px;
                text-align: left;
            }
            .ass-check {
                color: #fff;
                background-color: #566B96;
                font-weight: 700;
            }
            ul {
                height: 34px;
                margin-bottom: 20px;
                li ,span{
                    font-size: 14px;
                    float: left;
                    margin-right: 10px;
                    cursor: pointer;
                    width: 80px;
                    height: 34px;
                    text-align: center;
                    line-height: 34px;
                    color: #566B96;
                }
            }
        }
        .ass-table {
            width: 100%;
            font-size: 14px;
            td {
                color: #999;
                text-align: center;
                border-bottom: 1px solid #F2F2F2;
                height: 52px;
                vertical-align: middle;
            }
            tr .t-time {
                width: 20%;
            }
            th {
                color: #999;
                background-color: #F2F2F2;
                border-bottom: 1px solid #DDD;
                text-align: center;
                height: 52px;
                vertical-align: middle;
            }
            tr:last-child td {
                border-bottom: 1px solid #DDD;
            }
        }
    }

    // 页码
    .pager{width: 100%;display: flex;justify-content: center}
</style>
