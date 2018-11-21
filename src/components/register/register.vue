<template>
    <div class="login-right">
                <div class="login-title clearfix">
                    <div class="title-name">注册创盈中心</div>
                    <div class="title-link"> <router-link to="/login">立即登录</router-link></div>
                </div>
                <div class="login-cont">
                    <div style="display:none" class="error-msg error-msg1"><i class="icon-jinggao"></i><span>{{error}}</span></div>
                    <label><i class="icon-shouji1"></i><input id="phoneno1" type="text" name="telephone" v-model="telephone" placeholder="11位手机号码"></label>
                    <label class="dxyz">
                        <i class="icon-duanxinyanzheng"></i><input id="code1" type="text" name="code" placeholder="验证码" v-model="code" >
                        <span class="imgcode2 ivc" @click="getcode" >
                            <SIdentify :identifyCode="identifyCode"></SIdentify>
                        </span>
                    </label>
                   <label class="dxyz"><i class="icon-duanxinyanzheng"></i><input type="text" name="telephonecode" placeholder="手机验证码" class="form-input" id="code_mobile1" v-model="telephonecode"></label>
                  <span class="getcode2" @click="gettelephonecode" id="mobilebid1">获取短信验证码</span><span id="mobileid1" class="getcode2" style="display:none;"></span>
                    
                    <input id="refid" type="hidden" value="0">
                    <!-- <label><i class="icon-mima1"></i><input type="text" name="nickname" id="nickname" placeholder="设置昵称" class="form-input"></label> -->
                    <label><i class="icon-mima1"></i><input type="password" name="pwd1" id="pwd1" placeholder="设置登录密码" class="form-input"></label>

                    
                     <label><i class="icon-tuijian"></i><input type="text" name="" id="newRfeence" placeholder="请填写推荐码(必填)" class="form-input"></label>
                    <div class="login-menu">
                        <button type="button" class="btn-red JSregister"  id="regbutton" @click="myregister">注册</button>
                    </div>
                    <div class="login-info">
                        注册即代表<br>我同意<router-link to="/zcxy">《注册协议》</router-link>、<router-link to="/hgtzrsm">《合格投资人申明》</router-link>、<router-link to="/fxjss">《风险揭示书》</router-link>
                    </div>
                </div>
            </div>
</template>
<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import SIdentify from '@/components/sidentify'
import qs from 'qs';
export default {
  components: {
    MyHead,MyFoot,SIdentify
  },
  inject:['reload'],
  name: 'register',
  data () {
    return {
        identifyCodes: "1234567890",
        identifyCode: "",
        // data
        telephone:'',
        code:'',
        telephonecode:'',
        nickname:'',
        password:'',
        recomcode:'',
        error:'',
    }
  },
  mounted(){
      this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  computed:{
      pattphone(){
          return  this.$store.state.pattphone;
      },
      pattcode(){
          return  this.$store.state.pattcode;
      },
  },
  methods:{
      randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
      
    //   获取图形 验证码
    getcode(){
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    //   获取短信验证码
    gettelephonecode(){
        if(this.telephone == ""){
              this.error = "手机号码不能为空";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattphone.test(this.telephone)){
              this.error = "手机号码格式不正确";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.code == ""){
              this.error = "请输入验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.identifyCode != this.code){
              this.error = "请输入正确的验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else{
              let that = this;
              this.$axios.post('http://first.hdgprj.com/index.php?app=api&mod=member&ac=doregister',qs.stringify({telephone:that.telephone}))
                .then(function (response) {
                        console.log(response)
                    if(response.data.code != 1){
                        this.error = response.data.msg;
                        document.querySelector('.error-msg').style.cssText="display:block";
                        return false;
                    }else if(response.code == 1){
                        
                    }
                })
                .catch(function (error) {
                    console.log(err)
              });
          }
    },
    //  点击注册验证
      myregister(){
          if(this.telephone == ""){
              this.error = "手机号码不能为空";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattphone.test(this.telephone)){
              this.error = "手机号码格式不正确";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.code == ""){
              this.error = "请输入验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattcode.test(this.code)){
              this.error = "请输入正确格式的验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.telephonecode == ""){
              this.error = "请输入短信验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattcode.test(this.telephonecode)){
              this.error = "请输入正确格式的短信验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.nickname == ""){
              this.error = "请输入昵称";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.password == ""){
              this.error = "请输入登录密码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.password.length < 6 || this.password.length > 20){
              this.error = "请输入6-20位的登录密码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.recomcode == ""){
              this.error = "请输入推荐码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.recomcode.length != 6){
              this.error = "请输入6位的推荐码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else{
              let that = this;
          } 
      },
  },
}
</script>