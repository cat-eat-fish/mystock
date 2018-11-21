<template>
    <div class="overlay">
        <div class="addtelephone addpass">
            <div class="telephone modal-body">
                <div class="content-wrap content-box3">
                    <a @click="close" class="box-close">x</a>
                    <h3>修改登录密码</h3>
                    <form>
                        <label class="tlabel" >
                            <i  class="iconfont icon-tubiao211"></i>
                            <div class="isflex">
                                <input type="text" disabled="disabled" v-model="telephone"  placeholder="请输入图形验证码">
                            </div>
                        </label>
                        <label class="tlabel">
                            <i  class="iconfont icon-tubiao211"></i>
                            <div class="isflex">
                                <input id="txcode" v-model="changedata.code" type="text"  placeholder="请输入图形验证码">
                                <span class="imgcode2" @click="getcode">
                                    <SIdentify class="ivc"  :identifyCode="identifyCode"></SIdentify>
                                </span>
                            </div>
                        </label>
                        <label class="tlabel" >
                            <i  class="iconfont icon-tubiao211"></i>
                            <div class="isflex">
                                <input  v-model="changedata.telephonecode" type="text"  placeholder="请输入手机验证码">
                                <span  class="getcode2" @click="gettelephonecode">获取短信验证码</span>
                            </div>
                        </label>
                        <label class="tlabel" >
                            <i  class="iconfont icon-tubiao211"></i>
                            <div class="isflex">
                                <input  v-model="changedata.newpass" type="text"  placeholder="新登录密码">
                            </div>
                        </label>
                        <div class="error-msg">{{error}}</div>
                        <button type="button" class="JSbtnsubmit" @click="setPhone">确定</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SIdentify from '../sidentify'
export default {
    components:{
        SIdentify
    },
    data(){
        return {
            changedata:{
                nickname:'',
                telephone:'18434367522',
                name:'',
                tid:'',
                code:'',
                telephonecode:'',
                pass:'',
                newpass:''
            },
            identifyCodes: "1234567890",
            identifyCode: "",
            error:'',
        }
    },
    created(){

    },
    mounted(){
        this.refreshCode()
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
            if(this.changedata.code == ""){
                this.error = "请输入验证码";
                document.querySelector('.error-msg').style.cssText="display:block";
                return false;
            }else if(!this.pattcode.test(this.changedata.code)){
                this.error = "请输入正确的验证码";
                document.querySelector('.error-msg').style.cssText="display:block";
                return false;
            }else{
                let that = this;
                this.$axios.post('http://first.hdgprj.com/index.php?app=api&mod=member&ac=doregister',qs.stringify({telephone:that.mydata.telephone}))
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
        //   手机 验证
        setPhone(){
            if(!this.pattcode.test(this.changedata.code)){
                this.error = "请输入正确格式的验证码";
                document.querySelector('.error-msg').style.cssText="display:block";
                return false;
            }else if(!this.pattcode.test(this.changedata.telephonecode)){
                this.error = "请输入正确格式的手机验证码";
                document.querySelector('.error-msg').style.cssText="display:block";
                return false;
            }else{
                let that = this;
            }
        },
        close(){
            document.querySelector('#changepass').style.cssText="display:none"
            this.error = '';
        },
    },
    computed:{
        pattphone(){
            return  this.$store.state.pattphone;
        },
        pattcode(){
            return  this.$store.state.pattcode;
        },
        telephone(){
            return sessionStorage.getItem('username')
        }
    },

}
</script>
<style lang="scss" scoped>
    .addtelephone{
        .table{
            display: flex;
        }
    }
</style>

