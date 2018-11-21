<template>
  <div class="other">
      <!-- 头部 -->
      <MyHead></MyHead>
        <div class="ui-view-wrap">
            <div class="about-banner"></div>
            <div class="about-nav">
                <a href="javascript:;" :class="{curr:aboutactive==index}"  @click="jump(item)" v-for="(item,index) in nav" :key="index">{{item.text}}</a>
            </div>
            <router-view></router-view>
        </div>
      <Sidebar></Sidebar>
      <MyFoot></MyFoot>
  </div>
</template>
<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
export default {
  components: {
    MyHead,MyFoot,Sidebar
  },
  name: 'other',
  data () {
    return {
        nav:[
            {id:0,text:'公司介绍',href:'/other/about'},
            {id:1,text:'联系我们',href:'/other/contactus'},
            {id:2,text:'招商加盟',href:'/other/market'},
            {id:3,text:'APP下载',href:'/other/appdown'},
        ]
    }
  },
  computed:{
      aboutactive(){
          return  this.$store.state.mystate.aboutactive;
      },
  },
  methods:{

      jump(e){
          this.$router.push(e.href);
          this.$store.commit('newaboutactive',e.id)
      }
  },
}
</script>