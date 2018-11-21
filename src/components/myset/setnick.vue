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
                                <input type="text" v-model="changedata.nickname"  placeholder="请输入新昵称">
                            </div>
                        </label>
                        <button type="button" class="JSbtnsubmit" @click="setNick">确认</button>
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
                nickname:'',
            },
            err:''
        }
    },
    created(){

    },
    methods:{
        setNick(){

        },
        close(){
            document.querySelector('#changenick').style.cssText="display:none"
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

