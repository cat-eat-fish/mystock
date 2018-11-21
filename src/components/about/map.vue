<template>
    <div class="map">
            <!--百度地图容器-->
            <div id="baiduMap"></div>
    </div>
</template>
<script>
export default {
  name: 'mymap',
  props:
      {
          CityInfo:{
              type:Object,
              default: function(){
                  return {longitude:116.38,latitude:39.90,tit:'天安门',con:"天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门..."}
              }
          }
      },
  data() {
    return {

    }
  },
  created(){
      
  },
   mounted(){
      this.initBaiduMap()
  },
  methods: {
    initBaiduMap() {
      let that = this
      let script = document.createElement("script")
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=zishHhU993mnCRDS3zncmazHuZkIRfti&callback=createMap"
      document.head.appendChild(script)
      window.createMap = () => {
        //创建Map实例
        var sContent = `<h4 style='margin:0 0 5px 0;padding:0.2em 0'></h4><img style='float:right;margin:4px' id='imgDemo' src='../img/tianAnMen.jpg' width='139' height='104' title='${this.CityInfo.tit}'/><p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>${this.CityInfo.con}</p></div>`;
        var map = new BMap.Map("baiduMap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude), 11); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
        var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
        var point = new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        marker.addEventListener("click", function(){          
        this.openInfoWindow(infoWindow);
        //图片加载完毕重绘infowindow
        document.getElementById('imgDemo').onload = function (){
            infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        }
        });
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function(e){
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError",function(e){
            // 定位失败事件
            alert(e.message);
        });
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableInertialDragging(); //两秒后开启惯性拖拽
        map.addControl(geolocationControl);
      }
    },
  },
}
</script>
<style scoped lang="scss">
    #baiduMap{
        width: 66%;
        height: 500px;
        margin: 20px auto;
    }
</style>
