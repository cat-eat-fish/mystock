<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import "./assets/css/base.css"          //基本css
import "./assets/css/style.css"         //其他css
export default {
  name: 'App',
  provide(){
      return {
          reload :this.reload
      }
  },
  data(){
      return {
          isRouterAlive:true
      }
  },
  created(){
        if(!localStorage.getItem("userMsg")){
            localStorage.setItem("userMsg",JSON.stringify(this.$store.state.mystate))
        }else{
            this.$store.state.mystate = JSON.parse(localStorage.getItem("userMsg"))
        }
        window.addEventListener("beforeunload",()=>{
            localStorage.setItem("userMsg",JSON.stringify(this.$store.state.mystate))
        })
        

        // localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
        // window.addEventListener("beforeunload",()=>{
        //     localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
        // })
  },
  methods:{
      reload(){
          this.isRouterAlive = false
          this.$nextTick(()=>{
              this.isRouterAlive = true;
          })
      }
  }
}
</script>

<style >
</style>
