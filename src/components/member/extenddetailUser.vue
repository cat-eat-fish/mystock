<template>
  <div class="extenddetailUser">
        <Me></Me>
        <div class="setting">
                        <div class="extend-title clearfix">
                            <div class="extend-word">邀请好友
                                
                            </div>
                        </div>

                        <div class="detail-table">
                            <ul class="detail-tab clearfix">
                                <li class="selected"><a href="javascript:">推广用户<span id="JS-trackCount">0</span></a></li>
                                
                            </ul>
                            <table id="juc-users-data" class="table-gray" width="100%"><tbody>   <tr><th>用户名</th><th>手机号</th><th>注册时间</th></tr><tr><td colspan="3" style="text-align: center">暂无记录</td></tr></tbody></table>
                        </div>
                        <div class="pageDiv" style="float: right;display:none;">
                                <div class="page" id="pager_user_reference" style="display: none;margin-right: 11px;"><span class="disabled">上一页</span><span class="current">1</span><span class="disabled">下一页</span></div>
                                <span class="clear_f"></span>
                         </div>
                         <span class="clear_f"></span>
               

                <div class="extend-back"> <router-link to="/member/extend">返回</router-link></div></div>
  </div>
</template>

<script>
import Me from "./me.vue"
export default {
    components:{
        Me
    },
  name: 'extenddetailUser',
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
    .extenddetailUser{
         padding-top: 170px;
        width: 980px;
        padding-bottom: 120px;
    }
    .setting {
        background-color: #FFF;
        border: 1px solid #DDD;
        padding: 40px;
    }
    .extend-title {
        border-bottom: 1px solid #DDD;
        padding-bottom: 20px;
        .extend-word {
            float: left;
            color: #333;
            font-weight: 700;
            font-size: 16px;
        }
    }
    .detail-table {
        margin-top: 20px;
        min-height: 350px;
        .detail-tab {
            margin-bottom: 20px;
            li {
                width: 100%;
                float: left;
                box-sizing: border-box;
                height: 97px;
                background: #F5F4F9;
                text-align: center;
                list-style: none;
                color: #666;
                font-size: 14px;
                padding-top: 20px;
                border-bottom: 1px solid #DDD;
                cursor: pointer;
            }
            li.selected {
                background: #FFF;
                border: 1px solid #DDD;
                color: #333;
                cursor: default;
                a{
                    color: #000;
                }
                span {
                    color: #FF2626;
                    display: block;
                    font-size: 28px;
                    font-weight: 700;
                    padding-top: 15px;
                }
            }
        }
        .table-gray {
            border-collapse: collapse;
            color: #999;
            th ,td{
                height: 53px;
                background: #F2F2F2;
                text-align: center;
                border-bottom: 1px solid #DDD;
            }
            td{
                background: #fff;
            }
        }
    }
    .extend-back {
        margin-top: 35px;
        text-align: center;
        margin-bottom: 20px;
        a {
            display: block;
            margin: 0 auto;
            width: 220px;
            height: 58px;
            background: #566B96;
            color: #FFF;
            line-height: 58px;
        }
    }
</style>
