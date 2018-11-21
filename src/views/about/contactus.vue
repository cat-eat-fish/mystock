<template>
  <div class="contactus">
        <div class="wrap">
            <div class="about-sec">
                <h1 class="market-title">
                    联系我们
                    <span class="line"></span>
                </h1>
                <div class="contact-form">
                    <p>您好，欢迎来到创盈中心如果您在使用创盈中心操盘的过程中有任何疑问请在下方留言。</p>
                    <div class="contact-inp-group clearfix">
                        <div class="contact-inp fl">
                            <label>电话：</label>
                            <input type="text" class="inp" v-model="telephone">
                        </div>
                        <div class="contact-inp fr">
                            <label>姓名：</label>
                            <input type="text" class="inp" v-model="name">
                        </div>
                    </div>
                    <div class="contact-inp-group clearfix">
                        <div class="contact-inp fl">
                            <label>邮箱：</label>
                            <input type="text" class="inp" v-model="email">
                        </div>
                        <div class="contact-inp fr">
                            <label>地址：</label>
                            <input type="text" class="inp" v-model="address">
                        </div>
                    </div>
                    <div class="contact-inp-group clearfix">
                        <div class="contact-inp fl">
                            <label>内容：</label>
                            <textarea class="textarea" v-model="content"></textarea>
                        </div>
                    </div>
                    <a href="javascript:;" @click="submit" class="contact-submit">提交</a>
                    <div style="display:none" class="error-msg"><i class="icon-jinggao"></i><span>{{error}}</span></div>
                </div>                
            </div> 
        </div>
        <Map :CityInfo="this.CityInfo"></Map>
  </div>
</template>

<script>
import Map from "../../components/about/map.vue"
export default {
    components:{
        Map
    },
  name: 'contactus',
  data () {
    return {
        CityInfo: {
            longitude: 114.31,  //经度
            latitude:30.52,      //维度
            tit:'创盈中心',
            con:'位置信息................'
        },
        // data
        telephone:'',
        name:'',
        email:'',
        address:'',
        content:'',
        
        error:'',
    }
  },
  beforeCreate(){
      this.$store.commit('newheadactive',1)
      this.$store.commit('newaboutactive',1)
  },
  methods:{
      submit(){
          if(this.telephone == ""){
              this.error = "手机号码不能为空";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattphone.test(this.telephone)){
              this.error = "手机号码格式不正确";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.name == ""){
              this.error = "请输入姓名";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.email == ""){
              this.error = "请输入电子邮箱";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(!this.pattemail.test(this.email)){
              this.error = "请输入正确格式的电子邮箱";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.address == ""){
              this.error = "请输入地址";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else if(this.content == ""){
              this.error = "请输入一些内容";
              document.querySelector('.error-msg').style.cssText="display:block";
              return false;
          }else{
              let that = this;
          } 
      }
  },
  computed:{
    pattphone(){
        return  this.$store.state.pattphone;
    },
    pattemail(){
        return  this.$store.state.pattemail;
    },
  },
}
</script>
