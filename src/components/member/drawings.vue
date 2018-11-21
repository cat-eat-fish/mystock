<template>
  <div class="drawings">
        <Me></Me>
        <div class="recharge_title">账户余额：<span class="color-orange">￥ 0.00</span>元</div>
        <ul class="tab_public clearfix">
            <li @click="change(item)" :class="{selected:active==index}" v-for="(item,index) in navtop" :key="index">{{item.text}}</li>
        </ul>
        <!-- 提款 -->
        <div class="drawing_box ul">
                    <div class="drawings_left">
                        <span class="draw_no1">账户余额</span>
                        <span class="draw_no2">提款金额</span>
                        <span class="draw_no3">提款银行卡号</span>
                        <span class="draw_no3">提款密码</span>
                    </div>
                    <div class="drawings_right">
                        <div class="drawings_word">首次提款，请先实名认证、设置提款密码，添加提款银行卡。</div>
                        <span class="color-black3 font-bold font-size-14">您的实名认证名为<span class="color-red font-size-16">交霸霸</span>，请务必用此名字的银行卡提款！</span>
                        <div class="draw_r_no1"> <span>￥ 0.00</span>&nbsp;元</div>
                        <form id="form2" name="drawForm">
                            <input type="text" name="" style="visibility: hidden">
                            <input type="password" name="" style="visibility: hidden">
                            <div class="draw_r_no2">
                                <input type="text" maxvalue="0.00" id="cash_money" name="cash_money" class="recharge_text JSdrawAmount">&nbsp;&nbsp;元
                                <div class="draw-info"><i class="icon-jinggao color-orange"></i>&nbsp;工作时间（即工作日的09:00-18:00）提现的，T+1到账非工作时间提现的，T+2到账。提现手续费单笔最少2元，2000以上每笔手续费率为0.1%</div>
                            </div>
                            <div class="draw_r_no3">
                                <select class="recharge_input JSdrawCard" id="tkyhk" name="tkyhk">
                                    <option>请选择银行卡</option>
                                    
                                </select>

                                 <router-link class="blue JSforgetDrawPwd" to="/member/setting">立即绑定</router-link>
                            </div>
                            <div class="draw_r_no4">
                                <input type="password" id="trade_pass" name="trade_pass" class="recharge_text JSdrawPassword">
                              <a class="blue JSforgetDrawPwd showFindPwd">忘记提款密码</a>
                            </div>
                            <div class="recharge_btn"><button type="button" class="btn-standard btn-red JSdraw-btn" >提交</button></div>
                        </form>
                        <div class="recharge_tips">
                            <h1 style="    text-align: center;color: #ff2626;">温馨提示</h1>
                            <div class="drawing_explain">
                                <ul>
                                    <li><h1 style="color: #ff2626;">最迟4小时到账</h1></li>
                                    <li>工作日<b style="color: #ff2626;">9:00-16:00</b>提款<span style="color: #ff2626;"> 当日结算;</span></li>
                                    <li><b style="color: #ff2626;">16:00</b><span style="color: #ff2626;"> 以后</span> 提款<b style="color: #ff2626;"></b><span style="color: #ff2626;">下个工作日结算</span></li>
                                    <li>具体到账时间以银行为准</li>
                                </ul>
                                <label></label>
                                <ul>
                                    <li><h1 style="color: #ff2626;">提款0手续费</h1></li>
                                    <li>提款产生的银行手续费全免</li>
                                </ul>
                                <label></label>
                                <ul>
                                    <li><h1 style="color: #ff2626;">支持10多家银行</h1></li>
                                    <li>推荐您使用</li>
                                    <li>工商银行&nbsp;农业银行&nbsp;建设银行&nbsp;交通银行</li>
                                    <li>提款到账最快</li>
                                </ul>
                                <ul></ul>
                            </div>
                            <div></div>
                            <p>禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。  </p>
                        </div>
                    </div>
        </div>
        <!-- 提款记录 -->
        <div style="display: block;" class="drawings_record ul">
                    <table cellpadding="0" cellspacing="0" width="100%" class="list-table">
                        <tbody><tr>
                            <th class="first-column">时间</th>
                            <th>提款银行卡</th>
                            <th>金额</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </tbody><tbody id="drawing_list"><tr><td colspan="5" style="text-align: center">暂无记录</td></tr></tbody>

                    </table>
                    <input type="hidden" value="0" id="user_cash_count">

                  <span class="clear_f"></span>
                            <div class="page-middel clearfix pageDiv" style="float: right;">
                                <div class="query">
                                    <div class="fl" style="position: absolute; margin-top: 24px;margin-right: 115px;right: 126px;"></div>
                                    <div class="page" id="pagination-drawing" style="display: none; width: auto; padding-top: 5px; padding-left: 30px;margin-right: 11px;"><span class="disabled">上一页</span><a href="javascript:" class="disabled">下一页</a></div>
                                </div>
                            </div>
                <span class="clear_f"></span>
        </div>
  </div>
</template>

<script>
import Me from "./me.vue"
export default {
    components:{
        Me
    },
  name: 'drawings',
  data () {
    return {
        active:0,
        navtop:[
            {id:0,text:'我要提款'},
            {id:1,text:'提款记录'},
        ]
    }
  },
  methods:{
      change(e){
          this.active=e.id;
          var lis=document.querySelectorAll('.ul');
          lis.forEach(element => {
              element.style.cssText="display:none"
          });
        lis[e.id].style.cssText="display:block"
      }
  },
  computed:{
      
  },
  created(){
      
  },
  mounted(){
      document.querySelector('.drawings_record').style.cssText="display:none"
  }
}
</script>

<style scoped lang="scss">
    // 提款记录
    .list-table td.first-column, .list-table th.first-column {
        padding-left: 30px;
    }
    .drawings_record {
        margin-top: 30px;
        min-height: 320px;
        .list-table {
            width: 100%;
            font-size: 14px;
            color: #666;
            border: 1px solid #DDD;
            th.first-column {
                padding-left: 30px;
            }
            th {
                background: #3182AC;
                color: #fff;
                padding: 20px 0;
                border-bottom: 1px solid #DDD;
                text-align: left;
            }
            td {
                border-bottom: 1px solid #F2F2F2;
                padding: 15px 0;
            }
        }
    }
    .drawings{
         padding-top: 50px;
        width: 980px;
        padding-bottom: 120px;
    }
    .recharge_title {
        height: 75px;
        line-height: 75px;
        font-size: 16px;
        padding: 0 30px;
        font-weight: 700;
        background:  #FAF3EA;
        margin-bottom: 50px;
    }
    .color-orange {
        color: #FF7F00;
    }
    .draw_r_no3 {
        margin-bottom: 40px;
        margin-top: 40px;
    }
    .tab_public {
        font-size: 0;
        border-bottom: 1px solid #DDD;
        clear: both;
        height: 40px;
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
    .drawings_card_list:hover .gray_delete, .drawings_left span {
        display: block;
    }
    .draw_r_no1, .drawings_word {
        font-size: 14px;
        padding-bottom: 20px;
    }
    .drawing_box {
        margin-top: 40px;
        .drawings_left {
            float: left;
            background: #f3f3f3;
            text-align: center;
            width: 175px;
            height: 828px;
            font-size: 14px;
            color: #666;
            font-weight: 700;
            margin-top: 0;
            span.draw_no1 {
                padding-top: 167px;
                padding-bottom: 40px;
            }
            span.draw_no2 {
                padding-top: 48px;
                padding-bottom: 20px;
            }
            span.draw_no3 {
                padding-top: 75px;
                padding-bottom: 5px;
            }
            span.draw_no3 {
                padding-top: 75px;
                padding-bottom: 5px;
            }
        }
        .drawings_right, .drawings_right_admin, .recharge_right {
            float: right;
            width: 785px;
            font-size: 12px;
            color: #999;
            padding-top: 0;
            margin-top: 0;
        }
        .drawings_word {
            color: #999;
            line-height: 35px;
            border-bottom: 1px dashed #DDD;
            margin-bottom: 30px;
        }
        .color-red {
            color: #FF2626;
        }
        .font-bold {
            font-weight: 700;
            font-size: 14px;
            color: #333;
        }
    }
    .draw_r_no2, .draw_r_no3, .draw_r_no4 {
        font-size: 14px;
        color: #333;
        margin-bottom: 42px;
    }
    .draw_r_no1 {
        color: #333;
        margin-top: 62px;
        margin-bottom: 20px;
        span {
            font-size: 18px;
            font-weight: 700;
            color: #FF7F00;
        }
    }
    .recharge_text {
        width: 283px;
        height: 52px;
        line-height: 52px;
        border: 1px solid #DDD;
        padding-left: 10px;
    }
    .recharge_input {
        width: 300px;
        height: 56px;
        line-height: 56px;
    }
    .draw-info {
        padding-top: 10px;
        font-size: 12px;
        color: #999;
    }
    .recharge_btn {
        border-top: 1px solid #DDD;
        padding-top: 55px;
        margin-top: 55px;
        button{
            width: 220px;
            background: #FF2626;
            height: 58px;
            text-align: center;
            line-height: 58px;
            font-weight: 700;
            padding-left: 0;
            padding-right: 0;
            font-size: 16px;
            color: #FFF;
            text-align: center;
            display: block;
            cursor: pointer;
            border: 0;
             margin: 0 auto;
        }
    }
    .recharge_tips {
        margin-top: 115px;
        font-size: 14px;
        border-top: 1px dashed #DDD;
        padding-top: 20px;
        color: #999;
        line-height: 22px;
        h1 {
            font-weight: 700;
        }
    }
    .drawing_explain {
        background: #F3F3F3;
        border-top: 1px solid #DDD;
        margin-top: 20px;
        margin-bottom: 5px;
        height: 128px;
        ul {
            float: left;
            width: 260px;
            text-align: center;
            h1 {
                margin-top: 12px;
                font-size: 14px;
                padding-bottom: 10px;
                color: #666;
                font-weight: 700;
            }
        }
        label {
            width: 1px;
            height: 60px;
            border-right: 1px solid #DDD;
            float: left;
            margin-top: 30px;
        }
    }
</style>
