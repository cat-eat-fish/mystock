<template>
  <div class="protocoltrade">
      <MyHead/>
      <ProtocolTrade/>
      <Sidebar/>
      <MyFoot/>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import ProtocolTrade from '@/components/protocol/protocoltrade'
export default {
  components: {
    MyHead,MyFoot,Sidebar,ProtocolTrade 
  },
  name: 'protocoltrade',
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
}
</script>