<template>
  <div class="zcxy">
      <!-- 头部 -->
      <MyHead></MyHead>
      <FxjssCon/>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import FxjssCon from "@/components/protocol/fxjss"

export default {
  components: {
    MyHead,MyFoot,Sidebar,FxjssCon
  },
  name: 'fxjss',
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
}
</script>

