<template>
  <div class="settings">
        <Me></Me>
        <div class="setting">
                <div class="set-title">安全设置</div>
                <table class="set-table">
                    <tbody>
                        <tr>
                            <td class="set-name">昵称</td>
                            <td class="set-value">{{mydata.nickname}}</td>
                            <td class="set-update"><a href="JavaScript:void(0)" @click="ShowChangeN" id="editname">修改</a> </td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-shimingrenzheng"></i>实名认证</td>
                            <td class="set-value">{{mydata.idstate}}</td>
                            <td class="set update" id="name_rz"><a href="javascript:;" @click="ShowChangeZid">立即认证</a></td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-yinxingleizhifu"></i>银行卡绑定</td>
                            <td class="set-value">未绑定</td>
                            <td class="set-update"><router-link class="bindcard" id="A1" to="/member/addbank">立即绑定</router-link></td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-shouji1"></i>手机绑定</td>
                            <td class="set-value">{{telephone }}</td>
                            <td class="set-update"><a href="JavaScript:void(0)" class="JSmodifyTel"  @click="ShowChangePhone" id="editphone">修改</a></td>
                        </tr>
                        <tr>
                            <td class="set-name"><i class="icon-mima1"></i>登录密码</td>
                            <td class="set-value">已设置</td>
                            <td class="set-update"><a href="JavaScript:void(0)" class="JSmodifyPwd" @click="ShowChangePass" id="editpwd">修改</a></td>
                        </tr>
                        
                        <tr>
                            <td class="set-name"><i class="icon-zhifumima"></i>提款密码</td>
                            <td class="set-value">未设置</td>
                            <td class="set-update"><a href="JavaScript:void(0)" class="JSmodifyDrawPwd" id="setpasspwd">立即设置</a></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <!-- 实名认证 -->
            <SetName class="overlay" id="changezid"/>
            <!-- 修改昵称 -->
            <SetNick class="overlay" id="changenick"/>
            <!-- 修改绑定手机 -->
            <SetPhone class="overlay" id="changephone" />
            <!-- 修改登录密码 -->
            <SetPass class="overlay" id="changepass"/>
            
  </div>
</template>

<script>
import Me from "./me"
import SetNick from "@/components/myset/setnick"
import SetName from "@/components/myset/setname"
import SetPhone from "@/components/myset/setphone"
import SetPass from "@/components/myset/setpass"
import SIdentify from '../sidentify'
export default {
    components:{
        Me,SIdentify,SetPhone,SetPass,SetNick,SetName
    },
  name: 'setting',
  data () {
    return {
        mydata:{
            nickname:'昵称',
            idstate:'',
        },
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',-1)
      this.$store.commit('newuseractive',3)
  },
  computed:{
      telephone(){
          var str=sessionStorage.getItem('username');
            var str2 = str.substr(0,3)+"****"+str.substr(7);
          return str2;
      }
  },
  methods:{
    //   显示修改昵称
      ShowChangeN(){
          document.querySelector('#changenick').style.cssText="display:block"
      },
      //   显示实名认证
      ShowChangeZid(){
          document.querySelector('#changezid').style.cssText="display:block"
      },
      //   显示修改手机
      ShowChangePhone(){
          document.querySelector('#changephone').style.cssText="display:block"
      },
      ShowChangePass(){
          document.querySelector('#changepass').style.cssText="display:block"
      },

  },
  mounted(){
      if(this.mydata.idstate==''){
          this.mydata.idstate='未认证'
      }
  }
}
</script>

