<template>
  <div class="daytrade">
      <div class="trade-content-wrap clearfix">
            <div class="trade-form clearfix">
                <div class="select-btn-label">投入资金</div>
                <div class="select-btn-group-wrap">
                    <button ref="inItem" v-for="(item,index) in daytrade.InvestedFunds"  :data-value="item.val"  @click="changein(item,index)" :key="index" class="JS-trade-applyAmount select-btn">
                      {{item.text}}
                    </button>
                    <input id="JS-input-amount" type="text" v-model="now" placeholder="最少2百，最多500万，百的整数倍" style="width: 447px; display: none;" class="JS-other-input" ref="inp" >
                    <span id="errInputTip" style="display: none" class="select-input-error"><i class="icon-jinggao"></i><i id="errow_title">最少2百，最多500万，百的整数倍</i></span>

                    <input type="hidden" id="moneymin" value="200">
                    <input type="hidden" id="moneymax" value="5000000">
                    <input type="hidden" id="available_balance_money" value="0">
                    <input type="hidden" id="productid" value="71">
                </div>
                <div class="select-btn-label">申请操盘资金</div>

                <div class="select-btn-group-wrap last-child"> 
                  <div v-for="(item,index) in daytrade.Application" ref="apItem" @click="changeap(item,index)" :key="index" class="JS-trade-investAmount tehui-btn select-btn">
                    <div :data-mutiple="item.val">{{item.text}}</div>
                    <div class="monthinterest"></div>
                    <div class="JS-invest-val">{{trzj*item.val}} 元</div>
                  </div> 
                </div>

            </div>
            <div class="JS-result trade-result">
                <div class="trade-res">
                    <table>
                        <tbody><tr>
                            <td class="first-column">总操盘资金</td>
                            <td><span class="font-color-dark font-bold" id="totalMoney">{{zcpzj}}</span>&nbsp;&nbsp;元<span class="tips">（申请资金&nbsp;+&nbsp;投资本金）</span></td>
                        </tr>
                        <tr>
                            <td class="first-column">单票持仓</td>
                            <td><span>主板100%创业板100%单客户单票持仓上限110万</span></td>
                        </tr>
                        <tr class="line">
                            <td class="first-column">持仓时间</td>
                            <td id="monthtimetip">自动延期，最短2个交易日,最长20个交易日</td>
                        </tr>
                        <tr>
                            <td class="first-column">警戒线</td>
                            <td><span class="font-color-orangr" id="rateWarn">{{jjx}}</span>&nbsp;&nbsp;元<span class="tips">（冻结委托买入）</span></td>
                        </tr>
                        <tr>
                            <td class="first-column">止损线</td>
                            <td><span class="font-color-green" id="rateOpenLine">{{zsx}}</span>&nbsp;&nbsp;元</td>
                        </tr>
                        <tr>
                            <td class="first-column">投资本金</td>
                            <td><span class="JS-capitalAmount" id="benjin">{{trzj}}</span>&nbsp;&nbsp;元</td>
                        </tr>
                        <tr>
                            <td class="first-column">管理费</td>
                            <td style="position: relative;" class="clearfix">
                                <span class="JS-trade-mgamt" id="fee">{{glf}}</span>&nbsp;元 <span>x 1天</span><span>（非交易日不收取）</span>
                                
                            </td>
                        </tr>
                        <tr class="line">
                            <td class="first-column">利益分配</td>
                            <td><span class="font-color-red font-bold" id="profit_distribution">盈利全归您</span></td>
                        </tr>
                        <tr>
                            <td class="font-bold first-column">共计应支付</td>
                            <td><span class="JS-payall font-color-red font-bold font-size-16" id="paymoney">{{zj}}</span>&nbsp;&nbsp;元<span class="tips">（准备资金 = 投资本金 + 日管理费 x 天数） </span></td>
                        </tr>
                        
                    </tbody></table>
                </div>
            </div>
        </div>
  
        <div class="form-submit-btn">
            <p>
                <span class="tips">申请即表示已阅读并同意</span><a id="JS-tradeProtocol" href="javascript:;" @click="goxy" >《创盈中心操盘协议》</a>
                <button  id="JS-instant-apply" @click="application" class="JS-trade-deal btn-standard btn-blue" >立即申请</button>
            </p>

        </div>
  </div>  
</template>

<script>
// 弹框
// import Insufficient from '@/components/insufficient.vue'
export default {
    components: {
        
    },
  name: 'daytrade',
  data () {
    return {
        now:'',
        daytrade:{
          // 投入资金列表
          InvestedFunds:[
            {id:0,text:'200',val:200},
            {id:1,text:'500',val:500},
            {id:2,text:'1000',val:1000},
            {id:3,text:'5000',val:5000},
            {id:4,text:'1万',val:10000},
            {id:5,text:'5万',val:50000},
            {id:6,text:'10万',val:100000},
            {id:6,text:'其他金额',val:''},
          ],
          // 申请操盘资金列表
          Application:[
            {id:0,text:'3倍',val:3,jjxbs:0.875025,zsxbs:0.825,glfbs:0.0054},
            {id:1,text:'4倍',val:4,jjxbs:0.9,zsxbs:0.86,glfbs:0.008},
            {id:2,text:'5倍',val:5,jjxbs:0.9167,zsxbs:0.8833,glfbs:0.01},
            {id:3,text:'6倍',val:6,jjxbs:0.9285,zsxbs:0.90,glfbs:0.0132},
            {id:4,text:'7倍',val:7,jjxbs:0.9375,zsxbs:0.9125,glfbs:0.0154},
            {id:5,text:'8倍',val:8,jjxbs:0.9444,zsxbs:0.9222,glfbs:0.02},
            {id:6,text:'9倍',val:9,jjxbs:0.9500,zsxbs:0.9300,glfbs:0.0225},
            {id:7,text:'10倍',val:10,jjxbs:0.9545,zsxbs:0.9364,glfbs:0.027},
          ],
        },
        trzj:200,
        sqcpbs:3,
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',3)
  },
  created(){

  },    
  methods:{

      goxy(){
          this.$router.push({path:'/protocoltrade',query:{zzinfo: JSON.stringify({benjin:'',borrowmoney:'',days:'',feemoney:'',type:''})}})
      },
    //   
    application(){
        if(!this.islog){
            this.$router.push('/login')

        }else {
            
        }   
    },





    changein(item,index){
      if(index==7){
        document.querySelector('#JS-input-amount').style.cssText='display:block';
        document.querySelector('.select-btn-group-wrap').style.cssText="height:270px;"
        document.querySelector('.last-child').style.cssText="display:none"
      }else{
        document.querySelector('.select-btn-group-wrap').style.cssText="height:auto;"
        document.querySelector('#JS-input-amount').style.cssText='display:none';
        document.querySelector('.last-child').style.cssText="display:flex"
      }
      this.$refs.inItem.forEach((element,index)=>{
        element.classList.remove('active')
      })
      this.trzj=item.val
      this.$refs.inItem[index].classList.add('active');
      
    },
    changeap(item,index){
      this.$refs.apItem.forEach((element,index)=>{
        element.classList.remove('active')
      })
      this.sqcpbs=item.val
      this.$refs.apItem[index].classList.add('active');
    }
  },
  watch:{
    now:function(val,oldval){
      var val=parseInt(val)
      if(val%100==0 && val!='' && val>=200 && val<=5000000){
        this.now=val;
      }
      if(val!='' && val>=200 && val<=5000000 && val%100==0){
          this.trzj=val
          document.querySelector('.last-child').style.cssText="display:flex";
          document.querySelector('.trade-content-wrap').style.cssText="height:570px";
          document.querySelector('.select-input-error').style.cssText='display:none';
      }else{
          document.querySelector('.select-input-error').style.cssText='display:block';
          document.querySelector('.last-child').style.cssText="display:none";
          document.querySelector('.trade-content-wrap').style.cssText="height:537px";
      }
    }
  },
  computed:{
      islog(){
          return this.$store.state.islogo;
      },



    zcpzj:function(){
      return Math.floor(((this.trzj * this.sqcpbs) + this.trzj)*100)/100;
    },
    jjx:function(){
      return Math.floor(this.daytrade.Application[this.sqcpbs-3].jjxbs * ((this.trzj * this.sqcpbs) + this.trzj)*100)/ 100;
    },
    zsx:function(){
      return Math.floor(this.daytrade.Application[this.sqcpbs-3].zsxbs * ((this.trzj * this.sqcpbs) + this.trzj)*100)/ 100;
    },
    glf:function(){
      return Math.floor(this.daytrade.Application[this.sqcpbs-3].glfbs * this.trzj*100)/ 100;
    },
    zj:function(){
      return Math.floor( (this.trzj+this.glf) *100)/100
    }
  },
  created(){

  },
  mounted(){
    document.querySelectorAll('.select-btn-group-wrap .select-btn:nth-of-type(1)').forEach(element => {
        element.classList.add('active');
    });
  }
}
</script>
