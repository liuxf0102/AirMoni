/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */

var data = [];
var js_var_chart;
var js_var_chart_option;
define(['ojs/ojcore', 'knockout', 'jquery'],
        function (oj, ko, $) {

            function IncidentsViewModel() {
                var self = this;
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additionaly available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };


                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View. 
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed

                    var myheight = $(document).height() - 190;
                    /*高为屏幕的高*/
                    $("#main").css({
                        height: function () {
                            return myheight;
                        },
                        width: "80%"
                    });
                    js_var_chart = echarts.init(document.getElementById('main'));

                    js_var_chart_option = option = {
                        title: {
                            text: '历史数据',
                            subtext: 'oracle IoT'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                     
                        toolbox: {
                            show: true,
                            feature: {
                                mark: {show: true},
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar']},
                                restore: {show: false},
                                saveAsImage: {show: true}
                            }
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                axisTick:{interval:0},
                                data: []
                                
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    formatter: '{value}'
                                }
                            }
                        ],
                        series: [
                            {
                                name: 'Value',
                                type: 'line',
                                markPoint: {
                                    data: [
                                        {type: 'max', name: '最大值'},
                                        {type: 'min', name: '最小值'}
                                    ]
                                },
                                markLine: {
                                    data: [
                                        {type: 'average', name: '平均值'}
                                    ]
                                }
                            }]
                    };
                    js_var_chart.setOption(js_var_chart_option);
                    
                    js_refreshDataFromServer();
                     setInterval(function () {
                     
                     
                     }, 1000);
                     js_refreshDataFromLocal("Minute");
                     
                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
                self.selectedMenuItem = function (obj) {};
                self.menuItemSelect = function (event, ui) {
                    self.selectedMenuItem(ui.item.children("a").text());
                    //alert(ui.item.children("a").text());
                    if (ui.item.children("a").text() == "仪表盘") {
                        parent.location = "index.html?root=customers";
                    } else if (ui.item.children("a").text() == "PM2.5") {
                        parent.location = "index.html?root=incidents&chartType=PM25";
                    } else if (ui.item.children("a").text() == "PM10") {
                        parent.location = "index.html?root=incidents&chartType=PM10";
                    } else if (ui.item.children("a").text() == "甲醛") {
                        parent.location = "index.html?root=incidents&chartType=hcho";
                    } else if (ui.item.children("a").text() == "挥发物") {
                        parent.location = "index.html?root=incidents&chartType=vocs";
                    } else if (ui.item.children("a").text() == "温度") {
                        parent.location = "index.html?root=incidents&chartType=temperature";
                    } else if (ui.item.children("a").text() == "湿度") {
                        parent.location = "index.html?root=incidents&chartType=humidity";
                    } else if (ui.item.children("a").text() == "刷新数据") {
                       // parent.location = "index.html?root=incidents&chartType=humidity";
                       js_refreshDataFromServer();
                    } else {
                        parent.location = "index.html?root=dashboard";
                    }
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new IncidentsViewModel();
        }
);

function js_refreshDataFromLocal(timeType)
{
var charType = getUrlParam('chartType');
    console.log("charType:" + charType + " timeType:" + timeType);
var lastEventTime=parseInt(localStorage.getItem("storageLastEventTime"));

    var groups = new Array();
    var lineItems = new Array();
    for (var i = 0; i < 10; i++)
    {
        var keyItem = "";
        if (timeType == "Minute") {
            keyItem = timeStamp2String("Minute",lastEventTime - 60 * 1000 * (10 - i));
        }
        if (timeType == "Hour") {
            keyItem = timeStamp2String("Hour",lastEventTime - 60 * 60 * 1000 * (10 - i));
        }
        if (timeType == "Day") {
            keyItem = timeStamp2String("Day",lastEventTime- 24 * 60 * 60 * 1000 * (10 - i));
        }

        groups.push(keyItem);
        itemValue = localStorage.getItem(keyItem);
        console.log("keyItem:" + keyItem + " value:" + itemValue);
        if (itemValue !== null && itemValue.toString().length > 10)
        {
            if(charType=="PM25"){
               itemValue = JSON.parse(itemValue).payload.data.pm25.toFixed(2);
               js_var_chart_option.title.text="PM2.5 历史数据";
            }
            if(charType=="PM10"){
               itemValue = JSON.parse(itemValue).payload.data.pm10.toFixed(2);
               js_var_chart_option.title.text="PM10 历史数据";
               js_var_chart_option.series.name="PM10";
            }
            if(charType=="hcho"){
               itemValue = JSON.parse(itemValue).payload.data.hcho.toFixed(2);
               js_var_chart_option.title.text="甲醛 历史数据";
            }
            if(charType=="vocs"){
               itemValue = JSON.parse(itemValue).payload.data.vocs.toFixed(2);
               js_var_chart_option.title.text="挥发物 历史数据";
            }
            if(charType=="temperature"){
               itemValue = JSON.parse(itemValue).payload.data.temperature.toFixed(2);
               js_var_chart_option.title.text="温度 历史数据";
            }
            if(charType=="humidity"){
               itemValue = JSON.parse(itemValue).payload.data.humidity.toFixed(2);
               js_var_chart_option.title.text="湿度 历史数据";
            }
            
            
        }
        lineItems.push(itemValue);
    }
    console.log("lineItems:" + lineItems);
    js_var_chart_option.series[0].data = lineItems;
    js_var_chart_option.xAxis[0].data = groups;
    //js_var_chart_option.xAxis[0](category).axisTick.interval=0;
    js_var_chart.setOption(js_var_chart_option);
}

function timeStamp2String(timeType, time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    //return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;  
    if (timeType == 'Minute') {
        retValue=  month + "-" + date + " " + hour + ":" + minute;
    } else if (timeType == 'Hour')
    {
        retValue=  month + "-" + date + " " + hour + ":" + "00";
    } else {
        retValue=  month + "-" + date;
    }
    
    //localStorage.cur_device.indexOf("AE");
    
    return retValue;
}

function js_getDataByTime(timeType, untilTime)
{
    var serverURL =js_var_IOTServer+'/iot/api/v2/messages?&device='+localStorage.cur_device+'&limit=30&since=' + (untilTime - 1000 * 60 * 60 * 24) + '&until=' + untilTime;
    console.log(timeStamp2String(timeType,untilTime)+":serverURL:"+serverURL)
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
                        js_saveTempData(timeStamp2String(timeType, untilTime), js_dataAll);
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


function js_saveTempData(keyItem, dataItem)
{
    //data
    localStorage.setItem(keyItem, JSON.stringify(dataItem));
    console.log("localData:key:" + keyItem + "  value:" + localStorage.getItem(keyItem));

}
function js_refreshDataFromServer()
{
    console.log("localStorage.storageLastEventTime:",localStorage.storageLastEventTime);
    var lastEventTime=parseInt(localStorage.getItem("storageLastEventTime"));
    //////get Data from IOT
    for (var i = 0; i < 10; i++)
    {
        js_getDataByTime("Minute", (lastEventTime - 60 * 1000 * (10 - i)));
    }
    //////get Data from IOT
//////get Data from IOT
    for (var i = 0; i < 10; i++)
    {
        js_getDataByTime("Hour", (lastEventTime - 60 * 60 * 1000 * (10 - i)));
    }

    //////get Data from IOT
    for (var i = 0; i < 10; i++)
    {
        js_getDataByTime("Day", (lastEventTime - 24 * 60 * 60 * 1000 * (10 - i)));
    }

}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}