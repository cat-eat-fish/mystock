import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



function storeLocalStore (state) {
    window.localStorage.setItem("userMsg",JSON.stringify(state));
}


export default new Vuex.Store({
  getters: {
    isLogo (state) {
        if (!state.isLogo) {    
            state.isLogo=sessionStorage.getItem('isLogin');   //从sessionStorage中读取状态
            state.username=sessionStorage.getItem('username');
            state.userid=sessionStorage.getItem('userid');
        }
        return {username:state.username,userid:state.userid}
    }
  },
  state: {
    headactive:0,
    pagecur:1,
    // 是否登录
    isLogo : true,
    username:'',
    userid:'',
    // islogo: false,          //保存时长 ： 60*60*24*3
    username:'',


    mystate:{
        nowactive:1,
        headactive:0,
        aboutactive:0,
        useractive:0,
        newsactive:0,
    },


    // 手机号做验证
    pattphone:/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
    // 验证码做验证
    pattcode:/^[A-Za-z0-9]{4}$/,
    // email做验证
    pattemail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    // 移除所有html标签
    matchReg(str){
        let reg=/<\/?.+?\/?>/g;
        return str.replace(reg,'');
    },

    // 正则输出格式化货币
    fmoney:function(s, n) {
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
    },
    format:function(shijianchuo){
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(shijianchuo * 1000);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        m = m>=10? m : "0"+m;
        var d = time.getDate();
        d = d>=10? d : "0"+d;
        var h = time.getHours();
        h = h>=10? h : "0"+h;
        var mm = time.getMinutes();
        mm = mm>=10? mm : "0"+mm;
        var s = time.getSeconds();
        s = s>=10? s : "0"+s;
        return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
    },




    // 封装ajax
    ajax: function(options){
        var xhr = null;
        var params = formsParams(options.data);
        //创建对象
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // 连接
        if(options.type == "GET"){
            xhr.open(options.type,options.url + "?"+ params,options.async);
            xhr.send(null)
        } else if(options.type == "POST"){
            xhr.open(options.type,options.url,options.async);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(params);
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                options.success(xhr.responseText);
            }
        }
        function formsParams(data){
            var arr = [];
            for(var prop in data){
                arr.push(prop + "=" + data[prop]);
            }
            return arr.join("&");
        }
    },

    // Cookie 相关   设置 获取 删除
    //设置cookie<存>
    setCookie: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    //获取cookie
    getCookie: function (cname) {
        var arr, reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    //删除cookie
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    // 指定时间格式化
    formatDate(time){
      var date = new Date(time);
      var year = date.getFullYear(),
          month = date.getMonth() + 1,//月份是从0开始的
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
          month=month<10 ? '0'+month : month;
          day=day<10 ? '0'+day : day;
          hour=hour<10 ? '0'+hour : hour;
          min = min < 10 ? '0' + min : min;
          sec = sec < 10 ? '0' + sec : sec;
          var newTime = year + '-' +month + '-' +day + ' ' +hour + ':' +min + ':' +sec;
          return newTime;         
      },
  },
  mutations: {
    changeLogin(state,data){
        sessionStorage.setItem("username", data.data);  //添加到sessionStorage
        sessionStorage.setItem("userid", data.data1);  //添加到
        sessionStorage.setItem("isLogin",true);
        state.username=data.data,             //同步的改变store中的状态
        state.userid=data.data1,
        state.isLogo=true
    },
    SIGN_OUT (state) {   //退出，删除状态
        sessionStorage.removeItem("username");  //移除sessionStorage
        sessionStorage.removeItem("userid");  //移除sessionStorage
        sessionStorage.removeItem("isLogin");
        state.username=''                //同步的改变story中的状态
        state.userid=''                //同步的改变story中的状态
        state.isLogo=false
    },

    // 头部点击
    newheadactive(state,msg){
        state.mystate.headactive=msg;
        storeLocalStore (state.mystate)
    },
    //关于我们点击
    newaboutactive(state,msg){
        state.mystate.aboutactive=msg;
        storeLocalStore (state.mystate)
    },
    //用户中心左侧点击
    newuseractive(state,msg){
        state.mystate.useractive=msg;
        storeLocalStore (state.mystate)
    },
    //新闻分类点击
    newnewsactive(state,msg){
        state.mystate.newsactive=msg;
        storeLocalStore (state.mystate)
    },
  },
  actions: {

  },
})
