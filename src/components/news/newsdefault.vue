<template>
  <div class="news">
      <!-- 头部 -->
      <MyHead></MyHead>
      
            <div class="ui-view-wrap">
                <div class="inner-page-content-wrap">
                    <div class="crumbs">
                        <router-link to="/">首页<i>&gt;</i></router-link>
                        <h1 style="display: inline-block;"><router-link to="/news">资讯中心</router-link></h1>
                    </div>
                    <ul class="news-contentItem-wrap clearfix">
                        <li  v-for="(item,index) in nav" :key="index">
                            <a href="javascript:;" :class="{active:newsactive==index}" @click="jump(item)">
                                {{item.text}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
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
  name: 'newsdefault',
  data () {
    return {
        active:0,
        nav:[
            {id:0,text:'财经早餐',href:'/news/newscj'},
            {id:1,text:'牛散实操',href:'/news/exercises'},
            {id:2,text:'新闻动态',href:'/news/dynamic'},
            {id:3,text:'创赢中心咨询',href:'/news/consultation'},
            {id:4,text:'常见问题',href:'/news/problem'},
        ]
    }
  },
  methods:{
      jump(e){
          this.$router.push(e.href);
          this.$store.commit('newnewsactive',e.id)
      }
  },
  created(){

  },
  computed:{
      newsactive(){
          return  this.$store.state.mystate.newsactive;
      },
  },
  mounted(){

  }
}
</script>
