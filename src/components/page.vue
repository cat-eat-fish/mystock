<template>
    <div class="page">
        <div class="page-bar">
            <ul>
                <li v-if="cur>1"><a v-on:click="cur--,pageClick()">
                    <i class="iconfont icon-sanjiaoleft">《</i>    
                </a></li>
                <li v-if="cur==1"><a class="banclick">
                    <i class="">《</i> 
                </a></li>
                <li v-for="(index,ind) in indexs" :key="ind" :class="{ 'active': cur == index}">
                    <a v-on:click="btnClick(index)">{{ index }}</a>
                </li>
                <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">
                    <i class="iconfont icon-sanjiaoright">》</i>    
                </a></li>
                <li v-if="cur == all"><a class="banclick">
                    <i class="iconfont icon-sanjiaoright">》</i>      
                </a></li>
                <!-- <li><a>共<i>{{all}}</i>页</a></li> -->
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'page',
        props: ['alldate','onedate'],
        data(){
            return {
                // all: 6, //总页数
                // alldate:6, //总页数
                // onedate:5, //每页条数
                cur: 1,//当前页码
            }
        },
        computed: {
            all:function(){
                return Math.ceil(this.alldate);
            },
            indexs: function(){
            var left = 1;
            var right = this.all;
            var ar = [];
            if(this.all>= 5){
            if(this.cur > 3 && this.cur < this.all-2){
                left = this.cur - 2
                right = this.cur + 2
            }else{
                if(this.cur<=3){
                left = 1
                right = 5
                }else{
                right = this.all
                left = this.all -4
                }
            }
            }
            while (left <= right){
            ar.push(left)
            left ++
            }
            return ar
            }
        },
        methods: {
            btnClick: function(data){//页码点击事件
                if(data != this.cur){
                    this.cur = data 
                    this.$emit('ievent',this.cur);
                }
            },
            pageClick: function(){
                this.$emit('pageprev',this.cur);
            }
        },
        watch: {
            // cur: function(oldValue , newValue){
            //     console.log(arguments);
            // }
        }
    };
</script>
<style scoped lang='scss'>
    .page-bar{
  margin:40px;
}
ul,li{
  margin: 0px;
  padding: 0px;
}
ul{
    display: inline-block;
    zoom: 1;
    margin-left: 9px;
}
li{
    color: #000;
    border-color: #ffe100;
    line-height: 28px;
    position: relative;
    display: inline-block;
    zoom: 1;
    width: 28px;
    height: 28px;
    margin-right: 18px;
    text-align: center;
    vertical-align: middle;
    color: #909090;
    border: 1px solid #e0e0e0;
}
.page-bar li i{
    color: #333;
}
.page-bar a{
    text-decoration: none;
    color:#909090;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: block;
}
.page-bar a:hover{
//   background-color: #eee;
}
.page-bar a.banclick{
  cursor:not-allowed;
}
.page-bar .active a{
  cursor: default;
  color: #000;
  border-color: #ffe100;
  background: #ffe100;
}
.page-bar i{
  font-style:normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}
</style>