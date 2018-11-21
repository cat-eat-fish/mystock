<template>
  <div class="trade">
      <!-- 头部 -->
      <MyHead></MyHead>
      
            <div class="inner-page-nav-wrap">
                <ul class="inner-page-nav clearfix">
                    <li id="JS-apply-operate" class="JS-dotrade JS-dotrade nav active">
                        <router-link to="/trade/daytrade">申请操盘资金</router-link>
                    </li>
                    <li v-if="islog" id="JS-my-trade" class="JS-mytrade nav">
                        <router-link to="/member/mytrade">我的交易</router-link>
                    </li>
                </ul>
            </div>
            <div class="inner-content-wrap-trade">
                <div class="trade-nav-warp clearfix">
                    <a :id="item.thisid" @click="jump(item)" class="t-navtext" :class="{selected:active==index}" href="javascript:;" v-for="(item,index) in nav" :key="index">
                        {{item.text}}
                    </a>
                    <div id="JS-limit-stock" class="t-daylimit" @click="open">今日限买股</div>
                </div>
                <router-view></router-view>
            </div>
            <!-- 弹出框 -->
            <div id="easyDialogBox" >
                <div id="dayLimitDialog" class="modal-body">
                    <div class="content-wrap content-box4">
                        <a @click="close" class="box-close">x</a>
                        <h3>今日限买股</h3>
                        <div class="limit-wrap">
                            <div class="limit-each" v-for="(item,index) in nobuy" :key="index">
                                <div class="stock-name">{{item.name}}</div>
                                <div class="stock-code">{{item.code}}</div>
                            </div>
                        </div>
                        <div class="tip">
                            <i class="icon-jinggao"></i>
                            <span>平台不可交易基金、S、ST、*ST、S*ST及SST类股票。</span>
                        </div>
                        <button type="button" class="JSbtnsubmit" @click="close" id="dialogcancel">确认</button>
                    </div>
                </div>
            </div>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
export default {
  components: {
    MyHead,MyFoot,Sidebar,
  },
  name: 'trade',
  data () {
    return {


        navtop:[
            {id:0,text:'申请操盘资金',href:'/trade/daytrade'},
            {id:1,text:'我的交易',href:'/trade/mytrade'},
        ],
        active:0,
        nav:[
            {id:0,thisid:'JS-day',text:'按天操盘',href:'/trade/daytrade'},
            {id:1,thisid:'JS-month',text:'按月操盘',href:'/trade/monthtrade'},
        ],
        nobuy:[
            {id:0,name:'神雾节能',code:'000820'},{id:1,name:'中科新材',code:'002290'},{id:2,name:'勤上股份',code:'002638'},{id:3,name:'鹏起科技',code:'600614'},{id:4,name:'庞大集团',code:'601258'},
            {id:5,name:'华电重工',code:'601226'},{id:6,name:'洲际油气',code:'600759'},{id:7,name:'实达集团',code:'600734'},{id:8,name:'奥瑞德',code:'600666'},{id:9,name:'中源协和',code:'600645'},
            {id:10,name:'神雾节能',code:'000820'},{id:11,name:'中科新材',code:'002290'},{id:12,name:'勤上股份',code:'002638'},{id:13,name:'鹏起科技',code:'600614'},{id:14,name:'庞大集团',code:'601258'},
            {id:15,name:'华电重工',code:'601226'},{id:16,name:'洲际油气',code:'600759'},{id:17,name:'实达集团',code:'600734'},{id:18,name:'奥瑞德',code:'600666'},{id:19,name:'中源协和',code:'600645'},
            
        ]
    }
  },
  methods:{
      jump(item){
          this.$router.push(item.href);
          this.active=item.id;
      },
      open(){
          document.querySelector('#easyDialogBox').style.cssText="display:block"
      },
      close(){
          document.querySelector('#easyDialogBox').style.cssText="display:none"
      } 
  },
  created(){
      
  },
  computed:{
      islog(){
          return sessionStorage.getItem('isLogin');
      }
  },
  mounted(){
      document.querySelector('#easyDialogBox').style.cssText="display:none"
  }
}
</script>

<style scoped lang="scss">
    .inner-page-nav-wrap {
        border-bottom: 1px solid #3182AC;
        width: 1180px;
        height: 54px;
        margin: 0px auto 0;
        text-align: center;
        .inner-page-nav {
            width: 1180px;
            margin: 0 auto;
            height: 100%;
            .nav {
                font-size: 16px;
                color: #333;
                line-height: 50px;
                float: left;
                width: 120px;
                height: 100%;
                text-align: center;
                a{
                    color: #333;
                }
            }
            .active {
                color: #3182AC;
                font-weight: 700;
                border-bottom: 3px solid #3182AC;
            }
        }
    }
    .trade-nav-warp {
        font-size: 0;
        border-bottom: 1px solid #DDD;
        width: 100%;
        height: 31px;
    }
    .inner-content-wrap-trade {
        width: 1180px;
        margin: 20px auto 80px;
        text-align: left;
        border: 1px solid #ddd;
        padding: 40px 20px 60px;
        .t-navtext {
            float: left;
            height: 31px;
            width: 120px;
            text-align: center;
            font-size: 16px;
            padding-bottom: 15px;
            cursor: pointer;
            color: #666;
            font-weight: 700;
        }
        .selected {
            color: #3CA4D9;
            border-bottom: 2px solid #3CA4D9;
        }
        .t-daylimit {
            font-size: 14px;
            color: #3CA4D9;
            float: right;
            cursor: pointer;
        }
    }



    // 弹出框
    #easyDialogBox{
        margin-top: -192.5px;
        margin-left: -270px;
        padding: 0px;
        border: none;
        z-index: 10000;
        position: fixed;
        top: 50%;
        left: 50%;
        display: block;
        box-shadow: 0px 0px 30px rgba(0,0,0,1);
        .modal-body {
            font-size: 12px;
            background: #fff;
            .content-box4 {
                margin: 0 30px;
                padding: 30px 0;
                text-align: left;
                position: relative;
                width: 480px;
                .box-close {
                    position: absolute;
                    top: 20px;
                    right: 0;
                    font-size: 18px;
                    height: 30px;
                    width: 30px;
                    text-align: center;
                    display: block;
                    cursor: pointer;
                    line-height: 30px;
                }
                    h3 {
                        color: #556B96;
                        border: none;
                        margin-bottom: 10px;
                        text-align: left;
                        padding-bottom: 20px;
                        font-size: 16px;
                        font-weight: 700;
                    }
                .limit-wrap {
                    max-height: 180px;
                    overflow: auto;
                    text-align: left;
                    .limit-each {
                        display: inline-block;
                        margin-bottom: 20px;
                        margin-right: 16px;
                        font-size: 14px;
                        color: #fff;
                        width: 98px;
                        text-align: center;
                        border: 1px solid #566B96;
                        .stock-name {
                            background-color: #566B96;
                            padding: 10px 0;
                        }
                        .stock-code {
                            color: #566B96;
                            padding: 10px 0;
                        }
                    }
                }
                .tip {
                    font-size: 12px;
                    color: #FF2C3B;
                    text-align: left;
                }
                button {
                    border: 0;
                    background-color: #566B96;
                    color: #FFF;
                    text-align: center;
                    font-size: 14px;
                    height: 46px;
                    width: 170px;
                    padding: 0;
                    margin: 25px auto 0;
                    display: block;
                }
            }
        }
    }
</style>
