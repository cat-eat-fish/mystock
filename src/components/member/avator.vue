<template>
  <div class="avator">
        <Me></Me>
        <div class="account" style="min-height: 200px;">
            <div class="right">
                <div class="title">
                    <div class="tit">更换头像</div>
                </div>
                <div class="usein1" style="margin: 0 auto;width: 338px;margin-top: 26px;">
                    <form id="form2" method="post" onsubmit="return false;">
                        <ul>
                            <li>
                                <div class="jbzlcright">
                                    <img id="avatar" src="/static/img/mrt.jpg">
                                    <label class="fileupload" onclick="upd_file(this,'avatar_file',7290);">
                                        <input type="file" style="cursor: pointer;margin-top: 18px;" class="zfle" name="avatar_file" id="avatar_file">
                                    </label>
                                    <label class="fileuploading hide"></label>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Me from "./me.vue"
export default {
    components:{
        Me
    },
  name: 'avator',
  data () {
    return {
        
    }
  },
}
</script>

<style scoped lang="scss">
    .avator{
        padding-top: 170px;
        width: 980px;
        padding-bottom: 120px;
    }
    .account {
        padding: 40px;
        border: 1px solid #DDD;
    }
    .right{
        float: none;
    }
    .jbzlcright img {
        display: block;
        width: 130px;
        height: 130px;
        border-radius: 75px;
    }
</style>
