<template>
    <div class="login-right">
        <div class="login-title clearfix">
            <div class="title-name">登录创盈中心</div>
                <div class="title-link"> <router-link to="/register">免费注册</router-link></div>
            </div>
            <div class="login-cont">
                <label><i class="icon-shouji1"></i><input id="mobile1" type="text" name="mobile1" placeholder="11位手机号码" v-model="username"></label>
                <label><i class="icon-duanxinyanzheng"></i><input id="password1" type="password" name="password1" placeholder="登录密码" v-model="passworld"></label>
                <div class="forget-code"> <router-link to="forgetpassword">忘记密码</router-link></div>
                <div class="login-menu"><button type="button" @click="mylogin" id="btlogin" class="btn-red JSlogin" >登录</button></div>
                <div class="third-part-login-wrap">
            </div>
        </div>
        <dialog-bar v-model="sendVal" type="confirm" title="信息" :content="dialog_content" confirmText="确定"></dialog-bar>
    </div>  
</template>
<script>
// 弹框
import qs from 'qs';
import dialogBar from '@/components/dialog.vue'
export default {
    components:{
        'dialog-bar': dialogBar,
    },
    data () {
    return {
        sendVal: false,
        dialog_title:'信息',
        dialog_content:'我是内容',
        username:'',
        passworld:'',
    }
  },
  computed:{
      pattphone(){
          return  this.$store.state.pattphone;
      },
  },
  methods:{
      mylogin(){
          if(this.username == ""){
              this.dialog_content="请输入11位手机号组成的用户名"
              this.sendVal = true;
              return false;
          }else if(!this.pattphone.test(this.username)){
              this.dialog_content="用户名/手机号码 格式不正确"
              this.sendVal = true;
              return false;
          }else if(this.passworld == ""){
              this.dialog_content="请输入密码"
              this.sendVal = true;
              return false;
          }else if(this.passworld.length < 6 || this.passworld.length > 20 ){
              this.dialog_content="密码格式错误"
              this.sendVal = true;
              return false;
          }else{
              let that = this;
              this.$axios.post(`http://first.hdgprj.com/index.php?app=api&mod=api&ac=login`,qs.stringify({mobile:this.username,pwd:this.passworld}))
                .then(function (response) {
                    // JSON.parse(response.data)
                    if(response.data.code != 1){
                        that.dialog_content=response.data.msg;
                        that.sendVal = true;
                        return false;
                    }else if(response.data.code == 1){
                        that.$store.commit('changeLogin',{data:that.username,data1:response.data.data.uid})  
                        that.$router.push('/member/assets')
                    }
                })
                .catch(function (error) {
                    // console.log(err)
              });
          } 
      },
  },
}
</script>

