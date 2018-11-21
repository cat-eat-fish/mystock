<template>
  <div class="zcxy">
      <!-- 头部 -->
      <MyHead></MyHead>
      <Hgtzrsm/>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import Hgtzrsm from "@/components/protocol/hgtzrsm"
export default {
  components: {
    MyHead,MyFoot,Sidebar,Hgtzrsm
  },
  name: 'hgtzrsm',
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
}
</script>
