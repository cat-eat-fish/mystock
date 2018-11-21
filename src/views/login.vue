<template>
    <div class="login">
        <MyHead/>
        <div class="inner-page-content-wrap clearfix">
            <div class="reg-left"></div>
            <LoginR/>
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
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
}
</script>