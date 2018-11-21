<template>
  <div class="mytrade">
        <MyHead></MyHead>

          <div class="inner-page-nav-wrap">
              <ul class="inner-page-nav clearfix">
                  <li id="JS-apply-operate" class="JS-dotrade JS-dotrade nav">
                    <router-link to="/trade/daytrade">申请操盘资金</router-link>
                  </li>
                  <li  id="JS-my-trade" class="JS-mytrade nav active">我的交易</li>
              </ul>
          </div>
          <div class="inner-page-content-wrap">
            <div id="borrow_content_list">
                <div class="my-trade-nodata"><router-link to="/trade/daytrade">申请操盘&gt;&gt;</router-link></div>
            </div>
            <div class="pageDiv" style="float: right;">
                <div class="query">
                      <div class="page" id="pager_borrow" style="display: none; width: auto; padding-top: 5px; padding-left: 30px; margin-right: 11px;"><span class="disabled">上一页</span><a href="javascript:" class="disabled">下一页</a></div>
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
    MyHead,MyFoot,Sidebar
  },
  name: 'mytrade',
  data () {
    return {

    }
  },
  methods:{

  },
  watch:{

  },
  computed:{
      islog(){
          return this.$store.state.islogo;
      }
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
    .inner-page-nav-wrap{
      width: 1180px;
      margin: 0 auto;
      padding-top: 120px;
      ul{
        height: 50px;
        line-height: 50px;
        border-bottom:1px solid #3182AC; 
        .active{
          color: #3182AC;
          font-weight: 700;
          border-bottom: 3px solid #3182AC;
        }
        li{
          float: left;
          width: 120px;
          height: 50px;
          text-align: center;
          a{
            color: #000;
          }
        }
      }
    }

    .inner-page-content-wrap {
        width: 1180px;
        margin: 0 auto;
        padding-top: 55px;
        padding-bottom: 120px;
        text-align: left;
        .my-trade-nodata {
            background: url(/static/img/mytrade_nodata.fw.png) center top no-repeat;
            margin: 90px 0;
            height: 200px;
            font-size: 16px;
            position: relative;
            a {
                cursor: pointer;
                position: absolute;
                color: #FF7F00;
                left: 640px;
                top: 86px;
                font-weight: 700;
            }
        }
    }
</style>
