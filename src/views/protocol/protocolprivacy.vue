<template>
  <div class="protocolprivacy">
      <MyHead/>
      <ProtocolprivacyCon/>
      <Sidebar/>
      <MyFoot/>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import ProtocolprivacyCon from '@/components/protocol/protocolprivacy'


export default {
  components: {
    MyHead,MyFoot,Sidebar,ProtocolprivacyCon
  },
  name: 'protocolprivacy',
  beforeCreate(){
    this.$store.commit('newheadactive',-1)
  }
}
</script>