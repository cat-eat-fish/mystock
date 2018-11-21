<template>
  <div class="register">
      <MyHead></MyHead>
        <div class="inner-page-content-wrap clearfix">
            <div class="reg-left"></div>
            <RegisterR/>
        </div>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>
<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import RegisterR from '@/components/register/register'
export default {
  components: {
    MyHead,MyFoot,RegisterR,Sidebar
  },
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
  
}
</script>
