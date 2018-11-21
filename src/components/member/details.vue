<template>
  <div class="memdetails">
        <Me></Me>
        <div class="space-right">
            <h2><strong>配资申请详情</strong></h2>
            <div class="process-box">
                <div class="p14"><span>第二步</span></div>
            </div>
            <div class="formbox">
                <h4>基本信息</h4>
                    <table class="h-20">
                        <tbody>
                            <tr>
                                <th>配资单号：</th>
                                <td>{{dh}}</td>
                            </tr>
                            <tr>
                                <th>配资金额：</th>
                                <td>{{pzje/100 | MoneyFormat}} &nbsp;元</td>
                            </tr>
                            <tr>
                                <th>保证金：</th>
                                <td>{{bzj/100 | MoneyFormat}} &nbsp;元</td>
                            </tr>
                            <!--tr>
                                <th>开始时间：</th>
                                <td>2017 年 06 月 05 日</td>
                            </tr-->
                            <tr>
                                <th>到期时间：</th>
                                <td>{{time}}</td>
                            </tr>
                            <!--tr>
                                <th>配资期限：</th>
                                <td>2 天</td>
                            </tr-->
                            <!--<tr>
                                <th>配资利息：</th>
                                <td>0&nbsp;元</td>
                            </tr>-->
                            <tr>
                                <th>服务费：</th>
                                <td>{{fwf/100 | MoneyFormat}}&nbsp;元</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>配资资金记录</h4>
                    <div class="listbox">
                        <table>
                            <tbody>
                                <tr>
                                    <th style="width:350px;">发生类型</th>
                                    <th style="width:150px;">发生金额</th>
                                    <th style="width:150px;">发生时间</th>
                                </tr>
                                <tr v-for="(item,index) in datalists" :key="index">
                                    <td align="center">{{item.type}}，配资单号：{{dh}}</td>
                                    <td align="center"> <strong style="color: red;">{{item.in_or_out * (item.money/100) | MoneyFormat}}</strong> 元</td>
                                    <td align="center">{{item.rtime}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Page v-if="datalists.length!=0"  :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
                    </div>
                </div>
        </div>
  </div>
</template>

<script>
import Me from "./me"
import qs from "qs"
import Page from '../page'
export default {
    components:{
        Me,Page
    },
  name: 'memdetails',
  data () {
    return {
        page:{
            onedate:10,
            oldlistsnum:1,
        },
        dh:'',
        pzje:0,
        bzj:0,
        time:0,
        fwf:0,
        type:'',
        datalists:[]
    }
  },
  computed:{
      formatDate(){
          return this.$store.state.format
      }
  },
  created(){
    this.myme(null)
  },
  methods:{
      myme(page){
        var that = this;
        var id = this.$route.params.id
        var uid = sessionStorage.getItem('userid');
        var url ;
        // var opt ;
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
        this.myme(data)
    },
    pageprev(data){
        this.myme(data)
    }
  }
}
</script>

<style scoped lang="scss">
.memdetails{
    padding-top: 50px;
    width: 980px;
    padding-bottom: 120px;
}
.space-right {
    width: 810px;
    padding-bottom: 50px;
    background: #fff;
    padding: 0px 10px 20px 0;
    h2 {
        border-bottom: 2px solid #eee;
        line-height: 30px;
        font-size: 18px;
        margin-bottom: 20px;
        strong {
            margin-right: 20px;
            color: #333;
        }
    }
}
.process-box {
    height: 60px;
    overflow: hidden;
    margin-bottom: 30px;
    width: 100%;
}
.process-box div span {
    display: none;
}
.process-box .p14 {
    background-position: center -180px;
    background-image: url(../../assets/img/bg45.png);
    background-repeat: no-repeat;
    height: 60px;
}
.formbox {
    min-height: 150px;
    margin: 10px 0;
    h4 {
        line-height: 30px;
        font-family: "Microsoft YaHei", "微软雅黑";
        font-size: 16px;
        color: #F60;
        padding: 5px;
        margin-top: 10px;
    }
    table {
        font-size: 14px;
        width: 100%;
        border-collapse: collapse;
        th {
            background: #BAB0A7;
            border: 1px solid #fff;
            border-top: 0;
            font-weight: 300;
            color: #fff;
            text-align: center;
            line-height: 24px;
        }
        td {
            border: 1px solid #eee;
            line-height: 22px;
            color: #666;
            padding: 10px 5px;
        }
    }
    table.h-20 th {
        line-height: 20px;
        padding: 5px;
        vertical-align: top;
        width: 130px;
        text-align: right;
        border: 1px solid #f0f0f0;
        background: #fcfcfc;
        font-weight: 300;
        color: #333;
    }
    table.h-20 td {
        line-height: 20px;
        padding: 5px;
        border: 1px solid #f0f0f0;
        color: #666;
        background: #fcfcfc;
    }
}
</style>
