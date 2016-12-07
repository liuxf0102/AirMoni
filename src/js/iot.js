/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var js_var_devices = [];

var js_device_count=0;
 
var js_var_IOTServer = "https://apac-a419718.iot.europe.oraclecloud.com";
//var js_var_IOTServer = "https://iotpmjapac1641-seoracletrial13180.iot.us.oraclecloud.com";

function js_getDevices()
{
    
    js_var_devices=[];
    
    js_device_count=1;
    var iotServiceURL = js_var_IOTServer + "/iot/api/v2/apps/AAAAAAR1RL0A-AI/devices";

    var aj = $.ajax({
        url: iotServiceURL,
        headers: {"Authorization": "Basic eXVrdWkuamluQG9yYWNsZS5jb206VGVtcCMxMjM="},
        ContentType: "application/javascript;charset=utf-8",
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (data) {
            // alert(self.decryptByDES(data) );
            console.log("data:length:" + data.items);

            if (data.items.length > 0)
            {
                for (var i = 0; i < data.items.length; i++)
                {
                    console.log("data id:" + data.items[i].id);
                    var js_device = new Object();
                    js_device.id = data.items[i].id;
                    js_device.description = data.items[i].description;
                    js_device.latitude='';
                    js_var_devices.push(js_device);
                }
            }

        js_getDevicesLocation();



            //js_saveIOTData(js_dataAll);


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

function js_getDevicesLocation()
{
    for (var i = 0; i < js_var_devices.length; i++) {

        var iotLocationURL = js_var_IOTServer + "/iot/api/v2/devices/" + js_var_devices[i].id + "/location";
        console.log("iotLocationURL:" + iotLocationURL);
        var aj = $.ajax({
            url: iotLocationURL,
            headers: {"Authorization": "Basic eXVrdWkuamluQG9yYWNsZS5jb206VGVtcCMxMjM="},
            ContentType: "application/javascript;charset=utf-8",
            type: 'get',
            dataType: 'json',
            cache: false,
            username:'yukui.jin@oracle.com',
            password:'Temp#123',
            success: function (data) {
                // alert(self.decryptByDES(data) );
                console.log("data:" + JSON.stringify(data));
                //console.log("data id:" + JSON.stringify(js_var_devices[0]));
                js_setDevicesLocation(data);
                //js_var_devices[i].latitude = data.latitude;
                //js_var_devices[i].longitude = data.longitude;
                //js_saveIOTData(js_dataAll);
                localStorage.setItem("storageLocalDevices",JSON.stringify(js_var_devices));
                js_device_count++;
                console.log("js_device_count:" + js_device_count);
                if(js_device_count>js_var_devices.length)
                {
                    parent.location = "index.html?root=dashboard";
                }
                
            
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
    
      
    
}


function js_setDevicesLocation(data)
{
    console.log("data:"+data.links[0].href);
    for(var i=0;i<js_var_devices.length;i++)
    {
        if(data.links[0].href.indexOf(js_var_devices[i].id)>0)
        {
            js_var_devices[i].latitude=data.latitude;
            js_var_devices[i].longitude=data.longitude;
            break;
        }
    }
    console.log("js_var_devices:"+ JSON.stringify(js_var_devices));
}

function js_getLocalDevices()
{
    var localDevices = [];
    if(getUrlParam('refreshData')=='true')
    {
        localStorage.storageLocalDevices="";
        js_getDevices();
        
        
    }
    console.log("js_var_devices:"+ JSON.stringify(localStorage.getItem("storageLocalDevices")));
    if (localStorage.storageLocalDevices&&localStorage.getItem("storageLocalDevices").length>0)
    {
           console.log("js_var_devices from storage:");
           localDevices=JSON.parse(localStorage.getItem("storageLocalDevices"));
           js_var_devices =localDevices;
    }else{
        if(getUrlParam('refreshData')!='true'){
            localStorage.storageLocalDevices="";
            js_getDevices();
        }
    }
    
    return localDevices;
    
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


function js_showCheckPoint()
{
        /* 信息窗口 */
                    var map = new BMap.Map('map');
                    var point = new BMap.Point(116.404, 39.915);
                    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);     // 初始化地图,设置中心点坐标和地图级别
                    map.enableScrollWheelZoom();
                    //map.centerAndZoom(point, 15);  
                    // var marker = new BMap.Marker(point);
                    var localDevices=js_getLocalDevices();
                    //var json_data = [[116.45505, 39.985], [116.383752, 39.91334], [116.4502, 39.932241]];
                    var pointArray = new Array();
                    for (var i = 0; i < localDevices.length; i++) {
                        
                       var pt = new BMap.Point(localDevices[i].longitude, localDevices[i].latitude);
                      var myIcon = new BMap.Icon("css/images/led.gif", new BMap.Size(40,40));
//                    
                      var marker = new BMap.Marker(pt,{icon:myIcon});
                       //var marker = new BMap.Marker(pt); // 创建点
                        
                        var label = new window.BMap.Label(" "+localDevices[i].description, { offset: new window.BMap.Size(-15, -25) });  
                        marker.setLabel(label);
                        marker.setTitle(" "+localDevices[i].description);
                        //marker.device="device"+i;
                        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
                        
                        map.addOverlay(marker);    //增加点
                        pointArray[i] = new BMap.Point(localDevices[i].longitude, localDevices[i].latitude);
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