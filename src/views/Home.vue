<template>
  <div class="home">
      <MyHead />
      <MyMain />
      <MyFoot />
  </div>
</template>
<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
import MyMain from "@/components/home/mymain"
export default {
  name: 'home',
  components: {
    MyHead,MyFoot,MyMain
  },
  beforeCreate(){
    this.$store.commit('newheadactive',0)
  }
}
</script>
