<template>
  <div class="newguide">
      <!-- 头部 -->
      <MyHead></MyHead>
        <NewguideCon/>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import NewguideCon from '@/components/newguide'

export default {
  components: {
    MyHead,MyFoot,Sidebar,NewguideCon
  },
  name: 'newguide',
  data () {
    return {    
        
    }
  },
}
</script>
