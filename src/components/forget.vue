<template>
    <div class="forget">
        <div class="inner-page-content-wrap clearfix">
                <div class="center">
                    <div class="forget-title">找回登录密码</div>
                    <div class="forget-cont">
                        <div class="login-cont">
                            <div style="display:none" class="error-msg"><i class="icon-jinggao"></i><span>{{error}}</span></div>
                            <label>
                                <i class="icon-shouji1"></i>
                                <input id="_phoneno2" type="text" name="telephone" v-model="telephone" placeholder="11位手机号码">
                            </label>
                        
                            <label class="dxyz">
                                <i class="icon-duanxinyanzheng"></i>
                                <input id="_code2" type="text" name="code" v-model="code" placeholder="验证码" >
                                <span class="forgetcode" @click="getcode">
                                    <SIdentify :identifyCode="identifyCode"></SIdentify>
                                </span>
                            </label>

                            <label class="dxyz">
                                <i class="icon-duanxinyanzheng"></i>
                                <input type="text" name="telephonecode" v-model="telephonecode" placeholder="手机验证码" class="form-input" id="_code_mobile2" >
                            </label>
                            <span class="getcode2" @click="gettelephonecode" id="mobilebidss">获取短信验证码</span><span id="mobileidss" class="getcode" style="display:none;"></span>
                    
                            <label>
                                <i class="icon-mima1"></i>
                                <input type="password" name="pwd" id="_findpwd1" v-model="password" placeholder="请输入新密码" class="form-input">
                            </label>
                            <label>
                                <i class="icon-mima1"></i>
                                <input type="password" name="pwd2" id="_findpwd2" v-model="password2" placeholder="确认新密码" class="form-input">
                            </label>
                            <div class="login-menu"><button type="button" class="btn-red JSsubmit" @click="btn" id="btfindpwd" >确认</button></div>
                            <div class="forget-info">如您无法收到短信，请联系客服：<span class="color-black6 font-bold">0755-28896306</span></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import SIdentify from '@/components/sidentify'
export default {
  components: {
    SIdentify
  },
    data () {
    return {
        identifyCodes: "1234567890",
        identifyCode: "",
        // data
        telephone:'',
        code:'',
        telephonecode:'',
        password:'',
        password2:'',
        // 
        error:'',
    }
  },
    computed:{
        pattphone(){
            return  this.$store.state.pattphone;
        },
        pattcode(){
            return  this.$store.state.pattcode;
        },
    },
    created(){
    },
    mounted(){
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
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
          }else if(!this.pattphone.test(this.username)){
              this.error = "手机号码格式不正确";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.code == ""){
              this.error = "请输入验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattcode.test(this.code)){
              this.error = "请输入正确的验证码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else{
              let that = this;
          }
    },
    // 找回密码验证
      btn(){
          if(this.telephone == ""){
              this.error = "手机号码不能为空";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattphone.test(this.username)){
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
          }else if(this.password == ""){
              this.error = "请输入新密码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.password.length < 6 || this.password.length > 20){
              this.error = "请输入6-20位的密码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.password2 == ""){
              this.error = "请输入确认密码";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.password !== this.password2){
              this.error = "两次密码不一致";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else{
              let that = this;
          } 
      },
  },
}
</script>
