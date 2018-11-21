<template>
  <div class="recharge">
      <div class="person-content">
            <Me></Me>
            <div class="recharge_title">账户余额：<span class="color-orange">¥  0.00</span>元</div>
            <ul class="tab_public clearfix">
                <li @click="change(item)" v-for="(item,index) in lis" :key="index" :id="item.tid" :class="{selected:active==index}">{{item.text}}</li>
            </ul>

            <!-- 支付宝 -->
            <div class="transfer_box ul" id="con_rechar_8">
                <div class="clearfix" data-title="支付宝" id="Div1" style="display: block;">
                    <form id="form7" method="post" onsubmit="return false;">
                        <div class="zfb_step_7">
                            <table class="cz_two" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <th>支付宝扫码</th>
                                        <td>
                                            <div style="width:288px;float:left;">
                                                <div class="mf">
                                                    <a href="javascript:;"  @click="getqr(item,item.num)" v-for="(item,index) in zfb" :key="index">
                                                        <div class="jiugongge">
                                                            {{item.text}}
                                                        </div>
                                                    </a>
                                                </div>
                                                <div style="height:30px;line-height:30px;padding-left:10px;color:#ff7814;font-size:16px;background-color:#fff;text-align:left;">支付宝充值，<span style="color:red;font-weight:bold;">秒到！0 手续费</span></div>
                                                <div style="clear:both;"></div>
                                            </div>
                                            <!-- 右侧返回数据 -->
                                            <div class="rightdata" style="float:left;display:none;">
                                                <div style="margin-top:5px;margin-left:20px;">
                                                    <div id="qrHtml" style="height: 420px;"><div style="clear:both;width:200px;font-size:14px;border-radius:3px;color:#808080;" id="qrpay_all"><div style="width:200px;height:200px;text-align:center;"> <img style="width:200px;height:200px;border:1px solid #ddd;" id="qr_img">
                                                    <div style="margin-top:15px;">
                                                        <div style="float:left;">
                                                            <span style="background-color: #03a9f4;font-size:12px;border-radius:3px;padding:.2em .6em .3em;color: #fff;text-align: center;white-space: nowrap;vertical-align: baseline;">
                                                                支付宝
                                                            </span>
                                                        </div>
                                                        <div style="float:right;">
                                                            <span style="color:#1ab394;">
                                                                {{send.money}} 元
                                                            </span>
                                                        </div>
                                                        <div style="clear:both;">
                                                        </div>
                                                    </div>
                                                    <div style="margin-top:10px;font-size:12px;text-align:left;">
                                                        订单号 2971_180809142805705
                                                    </div>
                                                    <div style="margin-top:10px;font-size:12px;text-align:left;" id="timeout">
                                                        <span style="font-size:12px;">
                                                            剩余有效支付时间：
                                                            <span style="color:#1ab394;font-size:16px;">
                                                                 {{count}} 秒
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div style="margin-top:10px;font-size:12px;text-align:left;" id="out_trade_no_success">
                                                    </div>
                                                    <div style="margin-top:20px;font-size:12px;text-align:left;">
                                                        <span style="color:red;">注意</span>
                                                        ：请勿超时完成支付，请勿保存二维码，
                                                        <a target="_blank" style="color:#03a9f4;" href="https://cloud.ziniusoft.com/Assist/Home/QRPayHelp">
                                                            遇到问题?
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                
                                        </div>
                                        <div id="qrpayTimeout"></div>
                                    </div>
                                </div>
                            </div>
                            <div style="clear:both;"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <div class="cz_three">
                        <div class="top">关于转账到款时间说明：</div>
                        <div class="bottom">
                            5、如未能及时充值，请联系客服：<strong>0755-28896306</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 连连支付 -->
            <div class="transfer_box ul" id="con_rechar_6">
                <div class="clearfix" data-title="连连支付" style="display: block;">
                    <form id="form6" method="post" onsubmit="return false;">
                        <table class="cz_two" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <th>充值方式</th>
                                    <td>
                                        <select id="lianlianPayType">
                                            <option value="1">网银支付</option>
                                            <option value="2">认证支付</option>
                                          
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>选择银行</th>
                                    <td>
                                        <select id="user_bank_card">
                                            
                                        </select>

                                        

                                        <select>
                                        </select><router-link to="/member/addbank">立即绑定</router-link>

                                        
                                    </td>
                                </tr>
                                <tr style="display:none">
                                    <th>银行卡预留手机号</th>
                                    <td>
                                        <input id="user_phone" type="text" placeholder="176****8075" class="recharge_text">&nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <th>充值金额</th>
                                    <td>
                                        <input id="identify_state" type="hidden" value="0">
                                        <input id="user_id" type="hidden" value="2971">
                                        <input id="user_name" type="hidden" value="">
                                        <input id="idcard" type="hidden" value="">
                                        <input type="text" class="txt" style="width: 300px" name="zfb_total" id="lianlian_total" placeholder="至少充值100元">元<strong>*</strong><br>
                                        <i>温馨提示：确保所填充值金额与实际充值金额相同；如需马上到账，或长时间未到账，<br>
                                            可拨打客服电话：0755-28896306！</i>
                                    </td>
                                </tr>

                                <tr>
                                    <th>&nbsp;</th>
                                    <td>
                                        <input type="button" class="a_blue" value="前往支付" ></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            <!-- 银行转账 -->
            <div class="transfer_box ul" id="con_rechar_2">
                <div class="clearfix" data-title="线下充值" id="symdc1 " style="display: block;">
                    <form id="form3" method="post" onsubmit="return false;">
                        <div class="bank_step_2 ">
                            <h2 class="cz_h2">第一步：通过网上银行、银行柜台或ATM机等向创盈中心转账<i>（请先手动转账成功后再进行第二步）</i></h2>
                            <table class="cz_two" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td width="202">
                                            <img src="/static/img/hxb.jpg"></td>
                                        <td>银行帐号：6230200095086851
                                        <br>
                                            账户名称：许炯创
                                            <br>
                                            开户银行：华夏银行坂田支行
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"><span class="STYLE2">请使用创盈中心实名认证对应姓名的银卡进行转账、汇款</span></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="bank_step_1">
                            <h2 class="cz_h2">第二步：填写银行转账确认单<i>（转账确认单是用于财务核对具体转账单，便于及时入到您的个人中心）</i></h2>
                            <table class="cz_two" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <th>转账方式</th>
                                        <td id="off_bank_name">
                                            <label>
                                                <input name="pzzh" value="ATM" type="radio" checked="checked">
                                                ATM</label>
                                            <label>
                                                <input name="pzzh" value="柜台转账" type="radio">
                                                柜台转账</label>
                                            <label>
                                                <input name="pzzh" value="网上银行" type="radio">
                                                网上银行</label>
                                            <label>
                                                <input name="pzzh" value="手机银行" type="radio">
                                                手机银行</label>
                                            <label>
                                                <input name="pzzh" value="支付宝" type="radio">
                                                支付宝</label>
                                            <label>
                                                <input name="pzzh" value="其它" type="radio">
                                                其它</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style="color: red; width: 190px;">选择您转入的银行</th>
                                        <td>
                                            <select name="yh" id="yh">
                                                <option value="6214 9204 0091 5482">账号：华夏银行 6230200095086851</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>转账金额</th>
                                        <td>
                                            <input type="text" name="total" placeholder="至少充值100元" id="total" class="txt" style="width: 170px" autocomplete="off">元<strong>*</strong></td>
                                    </tr>


                                    <tr>
                                        <th>备 注</th>
                                        <td>
                                            <textarea class="txt" style="width: 600px; height: 40px; line-height: 20px;" name="remark" id="remark"></textarea><br>
                                            <i>
                                                <br>
                                                提示：网上银行填写支付平台名称和交易号，其它填写转账银行及卡号</i>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>&nbsp;</th>
                                        <td>
                                            <input type="button" class="a_blue"  value="转账确认" id="Button2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <div class="cz_three">
                        <div class="top">温馨提示</div>
                        <div class="bottom">
                            关于转账到款时间说明：<br>
                            1、工作日17点30分前转账的，承诺在资金到账后的半小时内完成充值<br>
                            2、工作日17点30分以后转账的，承诺在第二个工作日的早上9点完成充值<br>
                            3、非工作日转账的，承诺在下一工作日的早上9点完成充值<br>
                            4、请使用实名认证后对应姓名的银卡进行转账<br>
                            5、如未能及时充值，请联系客服：<strong>0755-28896306</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Me from "./me.vue"
export default {
    components:{
        Me
    },
  name: 'recharge',
  data () {
    return {
        active:0,
        count:300,
        send:{
            money:1,
        },
        lis:[
            {id:0,text:'支付宝扫码',tid:'rechar7'},
            {id:1,text:'连连扫码',tid:'rechar6'},
            {id:2,text:'银行转账',tid:'rechar2'},
        ],
        zfb:[
            {id:0,text:'1元',num:1},
            {id:1,text:'200元',num:200},
            {id:2,text:'1000元',num:1000},
            {id:3,text:'3000元',num:3000},
            {id:4,text:'5000元',num:5000},
            {id:5,text:'10000元',num:10000},
            {id:6,text:'20000元',num:20000},
            {id:7,text:'30000元',num:30000},
            {id:8,text:'50000元',num:50000},
        ]
    }
  },
  methods:{
      getqr(item,e){
          this.count=300;
          document.querySelectorAll('.mf a').forEach((element,index) => {
              element.firstChild.classList.remove('geziShow')
          });
          document.querySelectorAll('.mf a')[item.id].firstChild.classList.add('geziShow')
          this.send.money=e;
          document.querySelector('.rightdata').style.cssText="float:left;display:block";
          var that=this;
          var a=setInterval(function(){that.count--},1000)
      },
      change(e){
          document.querySelectorAll('.transfer_box').forEach((ele,ind)=>{
              ele.style.cssText="display:none;"
          })
          document.querySelectorAll('.transfer_box')[e.id].style.cssText="display:block;"
          this.active=e.id;

      }
  },
  computed:{
      
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .recharge{
        padding-top: 50px;
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
    .recharge_title {
        height: 75px;
        line-height: 75px;
        font-size: 16px;
        padding: 0 30px;
        font-weight: 700;
        background:  bottom no-repeat #FAF3EA;
        margin-bottom: 50px;
        .color-orange {
            color: #FF7F00;
        }
    }
    .tab_public {
        height: 40px;
        font-size: 0;
        border-bottom: 1px solid #DDD;
        clear: both;
        li {
            float: left;
            font-size: 16px;
            padding-bottom: 15px;
            width: 175px;
            color: #333;
            font-weight: 700;
            cursor: pointer;
            text-align: center;
        }
        li.selected {
            border-bottom: 4px solid #66799F;
            color: #66799F;
        }
    }

    // 支付
    .transfer_box {
        font-size: 14px;
        margin-top: 30px;
        display: block;
    }
    // 支付宝
    .cz_two {
        float: left;
        width: 978px;
        border: 1px solid #EEE;
        margin-bottom: 20px;
        .jiugongge {
            width: 80px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            font-size: 14px;
            color: #808080;
            border: 1px solid #ddd;
            margin-left: 10px;
            margin-bottom: 5px;
            margin-top: 5px;
            float: left;
            border-radius: 4px;
            font-weight: 400;
        }
        .mf {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
            align-content: space-between;
        }
        .geziShow {
            background-color: #03a9f4;
            color: #fff;
            font-weight: bold;
        }
        td,th {
            border: 1px solid #EEE;
        }
        th {
            width: 141px;
            padding: 15px 0;
            padding-right: 35px;
            text-align: right;
            color: #333;
            font-size: 14px;
            line-height: 20px;
            vertical-align: top;
            font-weight: 400;
        }
        td {
            padding: 12px 0;
            padding-left: 25px;
            line-height: 25px;
            color: #333;
            font-size: 14px;
            vertical-align: middle;
        }
    }
    .cz_three {
        float: left;
        width: 938px;
        background: #F9F9F9;
        padding: 20px;
        border: 1px solid #EEE;
        .top {
            float: left;
            width: 100%;
            padding-bottom: 10px;
            color: #333;
            font-size: 16px;
            font-weight: 700;
        }
        .bottom {
            float: left;
            width: 710px;
            padding-left: 20px;
            color: #333;
            font-size: 14px;
            line-height: 32px;
            strong {
                font-weight: 700;
            }
        }
    }
    // 连连支付
    #con_rechar_6,#con_rechar_2{
        display: none;
    }
    // 银行
    .cz_h2 {
        float: left;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: #333;
        font-size: 16px;
    }
    strong {
        color: #FF3F13;
        font-size: 16px;
        font-weight: 700;
    }
    i {
        color: #FF3F13;
        font-size: 12px;
    }
    td select {
        border: 1px solid #999;
        border-radius: 4px;
        padding: 5px;
        font-size: 14px;
        border: 1px solid #999;
        background-color: #fff;
    }
    .txt {
        width: 100px;
        height: 30px;
        line-height: 30px;
        line-height: 30px;
        border: 1px solid #999;
        border-radius: 4px;
        margin-right: 10px;
        padding-left: 5px;
    }
    input[type=button]{
        padding: 5px;
        border: none;border-radius: 5px;background: #FF3F13;color: #fff;
    }
</style>
