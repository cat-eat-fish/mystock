<template>
    <div class="myfeeder">
        <MyHead/>
        <Freeder/>
        <MyFoot/>
        <Sidebar/>
    </div>
</template>
<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Sidebar from '@/components/sidebar'
import Freeder from '@/components/trade/feedertrade'
export default {
    components:{
        MyHead,MyFoot,Sidebar,Freeder
    },
    name:'feedertrade',
    beforeCreate(){
        this.$store.commit('newheadactive',2)
    }
}
</script>

