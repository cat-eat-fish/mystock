<template>
    <div class="overlay">
        <div class="addtelephone addzid">
            <div class="telephone modal-body">
                <div class="content-wrap content-box3">
                    <a @click="close" class="box-close">x</a>
                    <h3>修改登录密码</h3>
                    <form>
                        <label class="tlabel" >
                            <i  class="iconfont icon-tubiao211"></i>
                            <div class="isflex">
                                <input type="text" v-model="changedata.name"  placeholder="请输入新昵称">
                            </div>
                        </label>
                        <label class="tlabel" >
                            <i  class="iconfont icon-tubiao211"></i>
                            <div class="isflex">
                                <input type="text" v-model="changedata.zid"  placeholder="请输入身份证号">
                            </div>
                        </label>
                        <button type="button" class="JSbtnsubmit" @click="setZid">确认</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            changedata:{
                name:'',
                zid:'',
            },
            err:''
        }
    },
    created(){

    },
    methods:{
        setZid(){
            var patname=/[\u4e00-\u9fa5a-zA-Z]{2,10}/;
            var patid=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        },
        close(){
            document.querySelector('#changezid').style.cssText="display:none"
            this.error = '';
        },
    },
    computed:{
        telephone(){
            return sessionStorage.getItem('username')
        }
    },

}
</script>
<style lang="scss" scoped>

</style>

