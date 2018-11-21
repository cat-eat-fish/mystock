<template>
  <div class="addbank">
        <Me></Me>
        <ul class="tab_public clearfix">
            <li>添加银行卡</li>
        </ul>
        <div class="waringtop">（因第三方支付政策要求）请选择常用的银行卡，绑定成功后 充值提现只能在该银行卡上进行！</div>
        <div class="card_admin">
                    <div class="cont-box">
                        <div class="cont-left open-name">开户名</div>
                        <div class="cont-right"><span class="color-black6 font-size-16 font-bold">交霸霸</span></div>
                    </div>
                    <div class="cont-box">
                        <div class="cont-left open-bank">开户银行</div>
                        <div class="cont-right">
                            <div class="add_rno1">
                                <select class="recharge_input JScityName" id="BankCode" name="BankCode">
                                    <option value="-1">请选择银行</option>
                        <option value="1">中国农业银行
                        </option>
                        <option value="2">交通银行
                        </option>
                        <option value="3">中国工商银行
                        </option>
                        <option value="4">中国邮储银行
                        </option>
                        <option value="5">浦发银行
                        </option>
                        <option value="6">广发银行
                        </option>
                        <option value="7">平安银行
                        </option>
                        <option value="8">招商银行
                        </option>
                        <option value="9">民生银行
                        </option>
                        <option value="10">中国银行
                        </option>
                        <option value="11">建设银行
                        </option>
                        <option value="12">光大银行
                        </option>
                        <option value="13">兴业银行
                        </option>
                        <option value="14">中信银行
                        </option>
                         <option value="15">杭州银行
                        </option>
                         <option value="16">北京银行
                        </option>
                         <option value="17">浙商银行
                        </option>
                         <option value="18">上海银行
                        </option>
                         <option value="19">江苏银行
                        </option>
                         <option value="20">包商银行
                        </option>
                         <option value="21">渤海银行
                        </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="cont-box">
                        <div class="cont-left">开户行所在地</div>
                        <div class="cont-right">
                            <div class="add_rno2 clearfix">
                                <div class="fl">
                                    <select class="recharge_input JSproName" id="provincecode" name="provincecode" onchange="javascript:selectchange(province,city)">
                                        <option value="-1">请选择省</option>

                                    <option value="0">安徽</option><option value="1">北京</option><option value="2">重庆</option><option value="3">福建</option><option value="4">甘肃</option><option value="5">广东</option><option value="6">广西</option><option value="7">贵州</option><option value="8">海南</option><option value="9">河北</option><option value="10">河南</option><option value="11">黑龙江</option><option value="12">湖北</option><option value="13">湖南</option><option value="14">江苏</option><option value="15">江西</option><option value="16">吉林</option><option value="17">辽宁</option><option value="18">内蒙古</option><option value="19">宁夏</option><option value="20">青海</option><option value="21">上海</option><option value="22">山东</option><option value="23">山西</option><option value="24">陕西</option><option value="25">四川</option><option value="26">天津</option><option value="27">新疆</option><option value="28">西藏</option><option value="29">云南</option><option value="30">浙江</option><option value="31">香港</option><option value="32">澳门</option><option value="33">台湾</option><option value="34">请选择省</option></select>
                                </div>
                                <div class="fl">
                                    <select class="recharge_input JScityName" id="citycode">
                                        
                                    <option value="1100">哈尔滨</option><option value="1101">大庆</option><option value="1102">大兴安岭</option><option value="1103">鸡西</option><option value="1104">佳木斯</option><option value="1105">牡丹江</option><option value="1106">齐齐哈尔</option><option value="1107">七台河</option><option value="1108">双鸭山</option><option value="1109">绥化</option><option value="1110">伊春</option><option value="1111">鹤岗</option><option value="1112">黑河</option></select>
                                </div>
                                <div class="fl">
                                    <input name="upbankname" id="upbankname" type="text" placeholder="请输入分行" class="recharge_text">
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="hprovince" name="hprovince" value="黑龙江">
                        <input type="hidden" id="hcity" name="hcity" value="哈尔滨">
                        <input type="hidden" id="BankName" name="BankName" value="广发银行
                        ">

                        <div class="cont-box">
                            <div class="cont-left">银行卡号</div>
                            <div class="cont-right">
                                <div class="add_rno">
                                    <input name="changbankno" id="changbankno" type="text" placeholder="银行卡号" class="recharge_text"></div>
                            </div>
                        </div>
                        <div class="cont-box">
                            <div class="cont-left">确认卡号</div>
                            <div class="cont-right">
                                <div class="add_rno">
                                    <input name="changbankno2" id="changbankno2" type="text" placeholder="确认银行卡号" class="recharge_text"></div>
                                <div class="add-box">
                                    <button type="button" class="btn-standard btn-blue JSaddBanksubmit" >确认添加</button></div>
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
  name: 'addbank',
  data () {
    return {

    }
  },
  methods:{
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
    .addbank{
         padding-top: 50px;
        width: 980px;
        padding-bottom: 120px;
    }
    .tab_public {
        height: 32px;
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
    }
    .card_admin {
        margin-top: 40px;
    }
    .addbank-wrap {
        height: 78px;
        line-height: 76px;
        padding-bottom: 0;
        margin-bottom: 40px;
        overflow: initial;
        zoom: 0;
    }   
    .waringtop {
        padding: 20px;
        margin: 10px 20px 0;
        border: 1px solid #FF8C19;
        background-color: #FFE599;
        font-size: 16px;
        color: #FF8C19;
    }
    .cont-left {
        float: left;
        width: 135px;
        font-size: 14px;
        color: #666;
        font-weight: 700;
        text-align: right;
        padding-right: 40px;
        padding-top: 25px;
    }
    .cont-box {
        clear: both;
    }
    .cont-box {
        padding-bottom: 10px;
    }
    .open-name {
        padding-top: 0;
    }
    .recharge_input {
        width: 300px;
        height: 56px;
        line-height: 56px;
        border: 1px solid #DDD;
        padding-left: 10px;
    }
    .recharge_text {
        width: 300px;
        height: 52px;
        line-height: 52px;
        border: 1px solid #DDD;
        padding-left: 10px;
    }
    #upbankname{
        margin-left: 135px;
        margin-bottom: 30px;
    }
    .add_rno2 {
        margin-bottom: 30px;
    }
    .add-box {
        border-top: 1px solid #DDD;
        padding-top: 60px;
        margin-top: 50px;
        button{
            width: 220px;
            height: 58px;
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
            background: #3182AC;
            margin: 0 auto;
            display: block;
        }
    }
</style>
