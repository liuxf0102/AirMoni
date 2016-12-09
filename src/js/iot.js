/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var js_var_devices = [];
var js_var_currentVersion ="1.0.3";
var js_var_latestVersion ="1.0.1";

var js_var_IOTServer = "https://apac-a419718.iot.europe.oraclecloud.com";
//var js_var_IOTServer = "https://iotpmjapac1641-seoracletrial13180.iot.us.oraclecloud.com";

function js_getDevices()
{
    var iotServiceURL = js_var_IOTServer + "/iot/api/v2/apps/AAAAAAR1RL0A-AI/devices";

    console.log("devices list:" + iotServiceURL);
    var aj = $.ajax({
        url: iotServiceURL,
        headers: {"Authorization": "Basic eXVrdWkuamluQG9yYWNsZS5jb206VGVtcCMxMjM="},
        ContentType: "application/javascript;charset=utf-8",
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (data) {
            // alert(self.decryptByDES(data) );
            console.log("data:length:" +JSON.stringify(data.items));

            if (data.items.length > 0)
            {
                for (var i = 0; i < data.items.length; i++)
                {
                    
                    var js_device = new Object();
                    js_device.id = data.items[i].id;
                    var deviceProperties=JSON.parse(data.items[i].description);
                    js_device.description=deviceProperties.label;
                    js_device.latitude=deviceProperties.latitude;
                    js_device.longitude=deviceProperties.longitude;
                    js_device.version=deviceProperties.version;
                    console.log("js_device:" + JSON.stringify(js_device));
                    js_var_devices.push(js_device);
                }
            }

          //js_saveIOTData(js_dataAll);
          js_showCheckPoint();
          
          js_checkVersion();

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // view("异常！");  
            //alert("error");
            console.log(XMLHttpRequest);
            console.log(textStatus);
            console.log("errorThrown=" + errorThrown);

        }
    });
}



function js_setSelectedDevices(data)
{
    console.log("data:"+data +"length:"+js_var_devices.length);
    
    for(var i=0;i<js_var_devices.length;i++)
    {
        console.log("data indexOf:"+data.indexOf(js_var_devices[i].description));
        if(data.indexOf(js_var_devices[i].description)>=0)
        {
              js_var_cur_device=js_var_devices[i].id;
              localStorage.cur_device=js_var_cur_device;
              //alert(1);
            break;
        }
    }
   
}

function js_checkVersion()

{
    js_var_latestVersion=js_var_devices[0].version;
    if(js_var_currentVersion<js_var_latestVersion)
    {
        parent.location = "index.html?root=performance&upgrade=true";
    }
    
}



function js_showCheckPoint()
{
    
            console.log("js_showCheckPoint:" + JSON.stringify(js_var_devices));
        /* 信息窗口 */
                    var map = new BMap.Map('map');
                    var point = new BMap.Point(116.404, 39.915);
                    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);     // 初始化地图,设置中心点坐标和地图级别
                    map.enableScrollWheelZoom();
                    //map.centerAndZoom(point, 15);  
                    // var marker = new BMap.Marker(point);
                   
                    //var json_data = [[116.45505, 39.985], [116.383752, 39.91334], [116.4502, 39.932241]];
                    var pointArray = new Array();
                    for (var i = 0; i < js_var_devices.length; i++) {
                        
                       var pt = new BMap.Point(js_var_devices[i].longitude, js_var_devices[i].latitude);
                      var myIcon = new BMap.Icon("css/images/led.gif", new BMap.Size(40,40));
//                    
                      var marker = new BMap.Marker(pt,{icon:myIcon});
                       //var marker = new BMap.Marker(pt); // 创建点
                        
                        var label = new window.BMap.Label(" "+js_var_devices[i].description, { offset: new window.BMap.Size(-15, -25) });  
                        marker.setLabel(label);
                        marker.setTitle(" "+js_var_devices[i].description);
                        //marker.device="device"+i;
                        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
                        
                        map.addOverlay(marker);    //增加点
                        pointArray[i] = new BMap.Point(js_var_devices[i].longitude, js_var_devices[i].latitude);
                        //pointArray[i].a="dddd";
                        marker.addEventListener("click", attribute);
                    }
                    //add some point in the view;
                    //pointArray.push(new BMap.Point(116.5502, 39.932241));
                   // pointArray[4]= new BMap.Point(116.1502, 39.98);
                    
                    
                    //让所有点在视野范围内
                   //map.setViewport(pointArray);
                    
                     //获取覆盖物位置
                    function attribute(e) {
                        var p = e.target;
                        //alert(p.getTitle());
//                        if(p.getTitle()=="检测点:1")
//                        {
//                            js_var_cur_device='AAAAAAR1RL0A-FA';
//                            localStorage.cur_device=js_var_cur_device;
//                            //alert(1);
//                        }
                       
                       js_setSelectedDevices(p.getTitle());
                        //alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat+"p："+p.getTitle());
                        
                       parent.location = "index.html?root=customers";
                    }

                
    
}




function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}
