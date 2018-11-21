<template>
  <div class="zcxy">
      <MyHead></MyHead>
      <Zcxy/>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import Zcxy from "@/components/protocol/zcxy"
export default {
  components: {
    MyHead,MyFoot,Sidebar,Zcxy
  },
  name: 'zcxy',
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
}
</script>