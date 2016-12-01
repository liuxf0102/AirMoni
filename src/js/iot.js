/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var js_var_devices = [];

 
//var js_var_IOTServer = "https://apac-a419718.iot.europe.oraclecloud.com";
var js_var_IOTServer = "https://iotpmjapac1641-seoracletrial13180.iot.us.oraclecloud.com";

function js_getDevices()
{
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
            success: function (data) {
                // alert(self.decryptByDES(data) );
                console.log("data:" + data);
                js_var_devices[i].latitude = data.latitude;
                js_var_devices[i].longitude = data.longitude;
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
}
