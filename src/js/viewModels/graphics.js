define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojmenu', 'ojs/ojnavigationlist', 'ojs/ojconveyorbelt'],
        function (oj, ko, $)
        {
            function ChartModel() {
                var self = this;

                /* toggle button variables */
                self.orientationValue = ko.observable('vertical');
                self.lineTypeValue = ko.observable('curved');
                self.selectedMenuItem = function (obj) {};
                self.js_refreshData = function js_refreshData(timeType)
                {

                    //js_getDataFromLocal("Minute","PM25");
                    //console.log("pm25Series:"+localStorage.getItem("pm25Series"));
                    var charType = getUrlParam('chartType');
                    console.log("charType:" + charType + " timeType:" + timeType);

                    ////////////////////////////////////////////////////////////////////------
                    var groups = new Array();
                    var lineItems = new Array();
                    for (var i = 0; i < 10; i++)
                    {
                        var keyItem = "";
                        if (timeType == "Minute") {
                            keyItem = timeStamp2String(new Date().getTime() - 60 * 1000 * (10 - i));
                        }
                        if (timeType == "Hour") {
                            keyItem = timeStamp2String(new Date().getTime() - 60*60 * 1000 * (10 - i));
                        }
                        if (timeType == "Day") {
                            keyItem = timeStamp2String(new Date().getTime() - 24*60*60 * 1000 * (10 - i));
                        }

                        groups.push(keyItem);
                        itemValue = localStorage.getItem(keyItem);
                        console.log("keyItem:" + keyItem + " value:" + itemValue);
                        if (itemValue !== null && itemValue.toString().length > 10)
                        {
                            itemValue = JSON.parse(itemValue).payload.data.pm25.toFixed(2);
                        }
                        lineItems.push(itemValue);
                    }
                    ////////////////////////////////////////////////////////////////////------


                    var lineSeries = [{name: "PM2.5"}];
                    var lineGroups = groups;
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    //var lineGroups = JSON.parse(localStorage.getItem("MinuteGroups"));

                    if (charType == "PM25") {
                        /* chart data */
                        //var lineSeries = [{name : "PM2.5", items : [74, 62, 70, 76, 66,80]} ];
                        lineSeries = [{name: "PM2.5"}];
                        //lineSeries[0].items = JSON.parse(localStorage.getItem("pm25" + timeType + "Series"));
                        lineSeries[0].items = lineItems;
                    }
                    if (charType == "PM10") {
                        /* chart data */

                        lineSeries = [{name: "PM10"}];
                        lineSeries[0].items = JSON.parse(localStorage.getItem("pm10" + timeType + "Series"));
                        //lineSeries[0].items=["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    }
                    if (charType == "hcho") {
                        /* chart data */

                        lineSeries = [{name: "甲醛"}];
                        lineSeries[0].items = JSON.parse(localStorage.getItem("hcho" + timeType + "Series"));

                    }

                    if (charType == "vocs") {
                        /* chart data */

                        lineSeries = [{name: "挥发物"}];
                        lineSeries[0].items = JSON.parse(localStorage.getItem("vocs" + timeType + "Series"));

                    }
                    if (charType == "temperature") {
                        /* chart data */

                        lineSeries = [{name: "温度"}];
                        lineSeries[0].items = JSON.parse(localStorage.getItem("temperature" + timeType + "Series"));

                    }
                    if (charType == "humidity") {
                        /* chart data */

                        lineSeries = [{name: "湿度"}];
                        lineSeries[0].items = JSON.parse(localStorage.getItem("humidity" + timeType + "Series"));


                    }
                    //alert(3);

                    console.log("lineSeries:" + lineSeries[0].items);
                    console.log("lineGroups:" + lineGroups);
                    this.lineSeriesValue(lineSeries);
                    this.lineGroupsValue(lineGroups);

                };
                self.menuItemSelect = function (event, ui) {
                    self.selectedMenuItem(ui.item.children("a").text());
                    //alert(ui.item.children("a").text());
                    if (ui.item.children("a").text() == "仪表盘") {
                        parent.location = "index.html?root=customers";
                    } else if (ui.item.children("a").text() == "PM2.5") {
                        parent.location = "index.html?root=graphics&chartType=PM25";
                    } else if (ui.item.children("a").text() == "PM10") {
                        parent.location = "index.html?root=graphics&chartType=PM10";
                    } else if (ui.item.children("a").text() == "甲醛") {
                        parent.location = "index.html?root=graphics&chartType=hcho";
                    } else if (ui.item.children("a").text() == "挥发物") {
                        parent.location = "index.html?root=graphics&chartType=vocs";
                    } else if (ui.item.children("a").text() == "温度") {
                        parent.location = "index.html?root=graphics&chartType=temperature";
                    } else if (ui.item.children("a").text() == "湿度") {
                        parent.location = "index.html?root=graphics&chartType=humidity";
                    } else {
                        parent.location = "index.html?root=dashboard";
                    }
                };
                var lineSeries = [{name: "PM2.5"}];
                lineSeries[0].items = JSON.parse(localStorage.getItem("pm25MinuteSeries"));
                //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                var lineGroups = JSON.parse(localStorage.getItem("MinuteGroups"));

                this.lineSeriesValue = ko.observable(lineSeries);
                this.lineGroupsValue = ko.observable(lineGroups);





            }

            var chartModel = new ChartModel();
            return chartModel;

        });

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}

function js_getDataByTime(type, untilTime)
{
     var serverURL =js_var_IOTServer+'/iot/api/v2/messages?&device='+localStorage.cur_device+'&limit=30&since=' + (untilTime - 1000 * 60 * 60 * 24) + '&until=' + untilTime;
    console.log("serverURL:"+serverURL)
    var aj = $.ajax({
        url: serverURL,
        headers: {"Authorization": "Basic eXVrdWkuamluQG9yYWNsZS5jb206VGVtcCMxMjM="

        },
        ContentType: "application/javascript;charset=utf-8",
        type: 'get',
        dataType: 'json',
        cache: false,
        // async:false, 
        success: function (data) {
            // alert(self.decryptByDES(data) );
            console.log("data:length:" + data.items.length);
            var pm25 = 0;
            var pm10 = 0;
            var hcho = 0;
            var vocs = 0;
            var temperatue = 0;
            var humidity = 0;
            var js_dataAll;
            if (data.items.length == 30)
            {
                for (var i = 0; i < 30; i++)
                {
                    //console.log("data length:"+data.items[i].payload.data.length)
                    if (data.items[i].type == "DATA")
                    {
                        pm25 = data.items[i].payload.data.pm25.toFixed(2);
                        pm10 = data.items[i].payload.data.pm10.toFixed(2);
                        hcho = data.items[i].payload.data.hcho.toFixed(2);
                        vocs = data.items[i].payload.data.vocs.toFixed(2);
                        temperature = data.items[i].payload.data.temperature.toFixed(2);
                        humidity = data.items[i].payload.data.humidity.toFixed(2);

                        js_dataAll = data.items[i];
                        //console.log("time:" + data.items[i].eventTimeAsString + " pm25:" + pm25 + " humidity：" + humidity);
//                        js_saveIOTData("pm25" + type + "Series", js_dataAll.payload.data.pm25.toFixed(2));
//                        js_saveIOTData("pm10" + type + "Series", js_dataAll.payload.data.pm10.toFixed(2));
//                        js_saveIOTData("hcho" + type + "Series", js_dataAll.payload.data.hcho.toFixed(2));
//                        js_saveIOTData("vocs" + type + "Series", js_dataAll.payload.data.vocs.toFixed(2));
//                        js_saveIOTData("temperature" + type + "Series", js_dataAll.payload.data.temperature.toFixed(2));
//                        js_saveIOTData("humidity" + type + "Series", js_dataAll.payload.data.humidity.toFixed(2));
//                        js_saveIOTData(type + "Groups", timeStamp2String(js_dataAll.eventTime));
                        js_saveTempData(timeStamp2String(js_dataAll.eventTime), js_dataAll);
                        break;
                    }
                }

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

    //alert(2);

}

function js_saveIOTData(keyItem, dataItem)
{
    //data
    var pm25Series = [];
    if (!localStorage.getItem(keyItem))
        localStorage.setItem(keyItem, JSON.stringify(pm25Series));
    var arrayPm25Serires = JSON.parse(localStorage.getItem(keyItem));
    //console.log("array Series data:" + arrayPm25Serires);
    if (arrayPm25Serires.length >= 10)
    {
        for (var i = 0; i <= (arrayPm25Serires.length - 9); i++)
        {
            arrayPm25Serires.shift();
        }
    }

    arrayPm25Serires.push(dataItem);
    localStorage.setItem(keyItem, JSON.stringify(arrayPm25Serires));

    console.log("localData:key:" + keyItem + "  value:" + localStorage.getItem(keyItem));

}

function js_saveTempData(keyItem, dataItem)
{
    //data
    localStorage.setItem(keyItem, JSON.stringify(dataItem));
    console.log("localData:key:" + keyItem + "  value:" + localStorage.getItem(keyItem));

}



function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    //return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;  
    return  month + "-" + date + " " + hour + ":" + minute;
}

function js_getDataFromServer()
{
    
    //////get Data from IOT
    for (var i = 0; i < 10; i++)
    {
        js_getDataByTime("Minute", (new Date().getTime() - 60 * 1000 * (10 - i)));
    }
    //////get Data from IOT
//////get Data from IOT
    for (var i = 0; i < 10; i++)
    {
        js_getDataByTime("Hour", (new Date().getTime() - 60 * 60 * 1000 * (10 - i)));
    }

    //////get Data from IOT
    for (var i = 0; i < 10; i++)
    {
        js_getDataByTime("Day", (new Date().getTime() - 24 * 60 * 60 * 1000 * (10 - i)));
    }
    
}

function js_getDataFromLocal(timeType, chartType)
{
    
    var rObj = new Object();
    var groups = new Array();
    var lineItems = new Array();
    for (var i = 0; i < 10; i++)
    {
        var keyItem = "";
        if (timeType == "Minute") {
            keyItem = timeStamp2String(new Date().getTime() - 60 * 1000 * (10 - i));
        }

        groups.push(keyItem);
        itemValue = localStorage.getItem(keyItem);
        console.log("keyItem:" + keyItem + " value:" + itemValue);
        if (itemValue !== null && itemValue.toString().length > 10)
        {
            itemValue = JSON.parse(itemValue).payload.data.pm25.toFixed(2);
        }
        lineItems.push(itemValue);
    }
    rObj.groups = groups;
    rObj.lineItems = lineItems;
    return rObj;
}

