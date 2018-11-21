<template>
  <div class="no404">
    <MyHead/>
        <div class="num">
            <span>抱歉！页面走丢了...</span>
          <div class="more">
            <router-link to="/">返回首页</router-link>
            <a href="javascript:;" @click="goback">返回上一页</a>
          </div>
        </div>
    <MyFoot/>
  </div>
</template>
<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import LoginR from "@/components/login/login"
export default {
  name: 'login',
  components: {MyHead,MyFoot,LoginR},
  name: 'no404',
  data () {
    return {
      
    }
  },
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>
