<template>
  <div class="assets">
      <div class="person-content">
                    <Me></Me>
                    <div class="account">
                        <table width="100%">
                            <tbody><tr class="header">
                                <!-- <td width="25%" style="font-size:16px;color:#666" class="font-bold">我的资产</td> -->
                                <td width="25%" style="font-size:16px;color:#666" class="font-bold">账户余额</td>
                                <td width="10%"></td>
                                <!-- <td width="25%" style="color:#666">净资产</td>
                                <td width="25%" style="color:#666">合约资产</td>
                                <td width="25%" style="color:#666">策略资金</td> -->
                            </tr>
                            <tr class="line">
                                <td style="font-size:28px;color:#333" class="font-bold">{{balance | MoneyFormat}}</td>
                                <td width="10%"></td>
                                <!-- <td style="color:#333" class="font-bold"> {{randid | MoneyFormat}}</td>
                                <td style="color:#333" class="font-bold">{{asset | MoneyFormat}}</td>
                                <td style="color:#333" class="font-bold">{{capital | MoneyFormat}}</td> -->
                            </tr>
                            <tr class="linea">
                                
                            </tr>
                            <!-- <tr class="jifen">
                                <td colspan="1">积分：<span class="font-bold">300</span></td>
                           
                            </tr>
                            <tr>
                                <td style="height:35px"></td>
                            </tr>
                            <tr class="chart">
                                <td>
                                    <div id="stockAsset">
                                        <div class="a1">
                                            <div class="a2">
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-wrap"><p style="margin-bottom:10px;color:#666666">证券净值</p><p style="color:#FF5256" class="font-bold"> <span class="f20">0.00</span></p></div>
                                </td>
                            </tr>
                            <tr class="chart">
                                <td>
                                    <div id="balance">
                                        <div class="a1">
                                            <div class="a2">
                                                0.00%
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-wrap"><p style="margin-bottom:10px;color:#666666">现金资产</p><p style="color:#566B96" class="font-bold">0.00</p></div>
                                </td>
                                <td class="btn">
                                    <router-link to="/member/recharge">充值</router-link>
                                    <router-link to="/member/drawings" class="out">提现</router-link>
                                </td>
                            </tr> -->
                        </tbody></table>
                                <div class="assetsba">
                                    <div class="jzc">
                                        <h5>净资产</h5>
                                        <strong>{{randid | MoneyFormat}}</strong>元
                                    </div>
                                    <div class="zhye">
                                        <h5>账户余额</h5>
                                        <strong>{{balance | MoneyFormat}}</strong>元
                                    </div>
                                    <div class="fh">(</div>
                                    <div class="hyzc">
                                        <h5>合约资产</h5>
                                        <strong>{{asset | MoneyFormat}}</strong>元
                                    </div>
                                    <div class="pzzj">
                                        <h5>配资资金</h5>
                                        <strong>{{capital | MoneyFormat}}</strong>元
                                    </div>
                                    <div class="fh">)</div>
                                </div>
                            <!-- <table class="myinfo">
                                <tr>
                                    <th>登录名：</th>
                                    <td><strong style="color:red;font-size:17px">{{true_name}}</strong> 累计登录 1 次</td>
                                </tr>
                                <tbody ><tr>
                                    <th>用户编号：</th>
                                    <td>{{user_num}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>登录密码：</th>
                                    <td>登录时需要输入的密码 (请及时更改初始密码)</td>
                                    <td class="r"><router-link to="/member/setting">修改</router-link></td>
                                </tr>
                                <tr>
                                    <th>注册时间：</th>
                                    <td>{{reg_time}} </td>
                                    <td class="r"></td>
                                </tr>
                            </tbody></table> -->
                    </div>
                </div>
  </div>
</template>

<script>
import Me from "./me.vue"
import qs from 'qs'
export default {
    components:{
        Me
    },
  name: 'assets',
  data () {
    return {
        balance:0,//账户余额
        asset:0,   //净资产
        capital:0,// 策略资金
        user_num:'',
        true_name:'',
        reg_time:''
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
      this.$store.commit('newuseractive',0)
  },
  created(){
      
      
      var that = this
        var uid = sessionStorage.getItem('userid');
        // var phone = sessionStorage.getItem('username');
        // this.$axios.get(`http://first.hdgprj.com/index.php?app=api&mod=user&ac=account` ,qs.stringify({uid:uid,mobile:phone}))
        this.$axios.get(`http://first.hdgprj.com/index.php?app=api&mod=user&ac=account&uid=${uid}`)
            .then(function (response) {
                // console.log(response)
                    var data = response.data.data
                    that.balance = data.balance/100
                    that.asset = data.asset/100
                    that.capital = data.capital/100
                    that.randid = Math.round(data.randid) 
                    // that.user_num = data.user_num
                    // that.true_name=data.true_name
                    // that.reg_time=data.reg_time
                })
                .catch(function (error) {

              });

  },
  methods:{
      
  },
  computed:{
      randid:{
        get: function () {
            return this.balance+(this.asset - this.capital)
        },
        // setter
        set: function (newValue) {
        }
          
      }
  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">

.myinfo{width: 100%;border: 3px solid #eee;border-collapse: collapse;
    th {
        border: 1px solid #eee;
        padding: 10px;
        text-align: left;
        width: 150px;
        font-weight: 300;
        color: #333;
    }
    td {
        border: 1px solid #eee;
        border-left: 0;
        border-right: 0;
        padding: 10px;
        color: #999;
    }
}

.assetsba{
    height: 80px;margin:20px 0;
    h5 {font-size: 14px;font-weight: 300;color: #333;}
    strong {color: #333;font-size: 18px;margin-right: 5px;}
    .jzc{float: left;color: #999;width: 172px;line-height: 28px;background: url(/static/img/bg47.png) right center no-repeat;}
    .zhye{padding-left: 20px;padding-top: 5px;float: left;width: 135px;line-height: 24px;color: #999;background: url(/static/img/bg48.png) right 20px no-repeat;}
    .fh{width: 5px;line-height: 40px;background: none;padding-left: 20px;padding-top: 5px;float: left;color: #999;}
    .hyzc{padding-left: 20px;padding-top: 5px;float: left;width: 135px;line-height: 24px;color: #999;background: url(/static/img/bg48.png) right -170px no-repeat;}
    .pzzj{padding-left: 20px;padding-top: 5px;float: left;width: 135px;line-height: 24px;color: #999;}
}
    .assets{
        padding-top:50px;
        width: 980px;
        padding-bottom: 120px;
    }
    .person-info {
        position: relative;
        height: 100px;
        background-color: #464F63;
        margin-bottom: 22px;
        color: #fff;
        img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
            position: absolute;
            margin: 20px 40px;
            border: 2px solid #fff;
            box-shadow: 0 0 30px rgba(0,0,0,.4);
        }
        .middle-wrap {
            width: 810px;
            height: 65px;
            position: absolute;
            margin-top: 20px;
            margin-left: 130px;
            font-size: 0;
            span {
                position: absolute;
                bottom: 30px;
                top: 50%;
                margin-top: -9px;
                left: 0;
                font-size: 18px;
            }
        }
        .button {
            width: 128px;
            height: 44px;
            text-align: center;
            line-height: 44px;
            border: 1px solid #fff;
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            right: 0;
            color: #fff;
            margin-top: 10px;
        }
        .button1 {
            margin-right: 138px;
            background-color: #FF4D4D;
            border: 1px solid #FF4D4D;
        }
    }
    .account {
        padding: 40px;
        border: 1px solid #DDD;
        table {
            width: 100%;
            td {
                vertical-align: top;
                border-bottom: none;
                font-size: 14px;
                height: 35px;
                vertical-align: middle;
            }
            .line td {
                border-bottom: 1px dotted #ddd;
                padding-bottom: 10px;
                font-weight: bold;
            }
            .jifen {
                color: #666;
                height: 50px;
                td:nth-child(1) span {
                    color: #000;
                    font-weight: bold;
                }
            }
            .chart {
                height: 80px;
                td {
                    position: relative;
                    height: 60px;
                }
                #stockAsset {
                    left: 0;
                    top: 50%;
                    width: 60px;
                    height: 60px;
                    margin-top: -40px;
                }
                .text-wrap {
                    margin-left: 80px;
                    margin-top: -35px;
                }
                .btn {
                    text-align: right;
                    a {
                        width: 70px;
                        text-align: center;
                        display: inline-block;
                        height: 34px;
                        line-height: 34px;
                        background-color: #FF5256;
                        color: #fff;
                        cursor: pointer;
                    }
                    a.out {
                        background-color: inherit;
                        color: #0287FE;
                    }
                }
            }
        }
    }

    #stockAsset,#balance{
        .a1,.a2{
            width: 75px;
            height: 75px;
            border-radius: 50%;
            border: 4px solid #eeeeee;
            text-align: center;
        }
        .a1{
            margin: 10px 0 0;
        }
        .a2{
            width: 60px;
            margin: 4px;
            height: 60px;
            line-height: 60px;
            color: red;
            font-size: 14px;
            border-width: 2px;

        }
    }
</style>
