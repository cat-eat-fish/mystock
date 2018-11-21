<template>
  <div class="forgetpassword">
      <!-- 头部 -->
      <MyHead/>
      <ForGet/>
      <Sidebar/>
      <MyFoot/>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import ForGet from '@/components/forget'

export default {
  components: {
    MyHead,MyFoot,Sidebar,ForGet
  },
  name: 'forgetpassword',
  
}
</script>

<style scoped lang="scss">
</style>
