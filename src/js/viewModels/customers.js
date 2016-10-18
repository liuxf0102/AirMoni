/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
var js_var_chart1;
var js_var_chart1_option;
var js_var_chart1_value = 0;

var js_var_chart2;
var js_var_chart2_option;
var js_var_chart2_value = 0;

var js_var_chart3;
var js_var_chart3_option;
var js_var_chart3_value = 0;

var js_var_chart4;
var js_var_chart4_option;
var js_var_chart4_value = 0;

var js_var_chart5;
var js_var_chart5_option;
var js_var_chart5_value = 0;

var js_var_chart6;
var js_var_chart6_option;
var js_var_chart6_value = 0;


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset'],
        function (oj, ko, $) {

            function CustomerViewModel() {
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
                    var myheight = ($(document).height()-120) /3;
                    /*高为屏幕的高*/
                    $("#main1").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    js_var_chart1 = echarts.init(document.getElementById('main1'));
                    js_var_chart1_option = {
                        tooltip: {formatter: "{a}: {c}℃"},
                        series: [
                            {
                                name: '当前温度',
                                silent: false,
                                type: 'gauge',
                                min: -30,
                                max: 50,
                                radius: '98%',
                                precision: 0, // 小数精度，默认为0，无小数点

                                axisLine: {// 坐标轴线
                                    show: true, // 默认显示，属性show控制显示与否
                                    lineStyle: {// 属性lineStyle控制线条样式
                                        color: [[0.55, 'skyblue'], [0.75, 'green'], [1, '#ff4500']],
                                        width: 30
                                    }
                                },
                                detail: {formatter: '温度:{value}℃',
                                    offsetCenter: [0, '80%'],
                                    textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 22,
                                    }
                                },
                                data: [{value: js_var_chart1_value, name: '', textStyle: {
                                            color: 'blue',
                                            fontSize: 14
                                        }}],
                                axisLabel: {
                                    show: true,
                                    distance: 0,
                                    textStyle: {
                                        color: '#333'
                                    }

                                }
                            }
                        ]
                    };
                    js_var_chart1.setOption(js_var_chart1_option, true);
                    
  
//                    chart1.on('click', function (params) {
//                        // 控制台打印数据的名称
//                        parent.location = "index.html?root=incidents";
//                    });

                    $("#main2").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    js_var_chart2 = echarts.init(document.getElementById('main2'));
                    js_var_chart2_option = {
                        series: [
                            {
                                name: '当前湿度',
                                type: 'gauge',
                                min: 0,
                                max: 100,
                                radius: '98%',
                                axisLine: {// 坐标轴线
                                    show: true, // 默认显示，属性show控制显示与否
                                    lineStyle: {// 属性lineStyle控制线条样式
                                        color: [[0.25, 'skyblue'], [0.7, 'green'], [1, '#ff4500']],
                                        width: 30
                                    }
                                },
                                detail: {formatter: '湿度:{value}%',
                                    offsetCenter: [0, '80%'],
                                    textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 22,
                                    }
                                },
                                data: [{value: js_var_chart2_value, name: '', textStyle: {
                                            color: 'red',
                                            fontSize: 10
                                        }}],
                                axisLabel: {
                                    show: true,
                                    distance: 0,
                                    textStyle: {
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 4,
                                    },
                                    color: 'auto'
                                }
                            }
                        ]
                    };
                    js_var_chart2.setOption(js_var_chart2_option, true);
//                    js_var_chart2.on('click', function (params) {
//                        // 控制台打印数据的名称
//                        parent.location = "index.html?root=incidents";
//                    });


                    $("#main3").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    js_var_chart3 = echarts.init(document.getElementById('main3'));

                    js_var_chart3_option =
                            {
                                series: [
                                    {
                                        type: 'gauge',
                                        min: 0,
                                        max: 500,
                                        radius: '98%',
                                        axisLine: {// 坐标轴线
                                            show: true, // 默认显示，属性show控制显示与否
                                            lineStyle: {// 属性lineStyle控制线条样式
                                                color: [[0.35, 'green'], [0.5, 'yellow'], [0.7, 'orange'], [1, 'red']],
                                                width: 30
                                            }
                                        },
                                        detail: {formatter: 'PM2.5:{value}',
                                            offsetCenter: [0, '80%'],
                                            textStyle: {
                                                color: 'auto',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontFamily: 'sans-serif',
                                                fontSize: 22,
                                            }
                                        },
                                        data: [{value: js_var_chart3_value, name: '', textStyle: {
                                                    color: 'red',
                                                    fontSize: 10
                                                }}],
                                        axisLabel: {
                                            show: true,
                                            distance: 0,
                                            textStyle: {
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontFamily: 'sans-serif',
                                                fontSize: 4,
                                            },
                                            color: 'auto'
                                        }
                                    }
                                ]
                            };
                    js_var_chart3.setOption(js_var_chart3_option, true);
//                    chart3.on('click', function (params) {
//                        // 控制台打印数据的名称
//                        parent.location = "index.html?root=incidents";
//                    });

                    $("#main4").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    js_var_chart4 = echarts.init(document.getElementById('main4'));
                    js_var_chart4_option = {
                        series: [
                            {
                                type: 'gauge',
                                min: 0,
                                max: 500,
                                radius: '98%',
                                axisLine: {// 坐标轴线
                                    show: true, // 默认显示，属性show控制显示与否
                                    lineStyle: {// 属性lineStyle控制线条样式
                                        color: [[0.35, 'green'], [0.5, 'yellow'], [0.7, 'orange'], [1, 'red']],
                                        width: 30
                                    }
                                },
                                detail: {formatter: 'PM10:{value}',
                                    offsetCenter: [0, '80%'],
                                    textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 22,
                                    }
                                },
                                data: [{value: js_var_chart4_value, name: '', textStyle: {
                                            color: 'red',
                                            fontSize: 10
                                        }}],
                                axisLabel: {
                                    show: true,
                                    distance: 0,
                                    textStyle: {
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 4,
                                    },
                                    color: 'auto'
                                }
                            }
                        ]
                    };
                    js_var_chart4.setOption(js_var_chart4_option, true);
//                    js_var_chart4.on('click', function (params) {
//                        // 控制台打印数据的名称
//                        parent.location = "index.html?root=incidents";
//                    });

                    $("#main5").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    js_var_chart5 = echarts.init(document.getElementById('main5'));
                    js_var_chart5_option = {
                        series: [
                            {
                                type: 'gauge',
                                min: 0,
                                max: 3,
                                radius: '98%',
                                axisLine: {// 坐标轴线
                                    show: true, // 默认显示，属性show控制显示与否
                                    lineStyle: {// 属性lineStyle控制线条样式
                                        color: [[0.35, 'green'], [0.5, 'yellow'], [0.7, 'orange'], [1, 'red']],
                                        width: 30
                                    }
                                },
                                detail: {formatter: '甲醛:{value}',
                                    offsetCenter: [0, '80%'],
                                    textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 22,
                                    }
                                },
                                data: [{value: js_var_chart5_value, name: '', textStyle: {
                                            color: 'red',
                                            fontSize: 10
                                        }}],
                                axisLabel: {
                                    show: true,
                                    distance: 0,
                                    textStyle: {
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 4,
                                    },
                                    color: 'auto'
                                }
                            }
                        ]
                    };
                    js_var_chart5.setOption(js_var_chart5_option, true);
//                    js_var_chart5.on('click', function (params) {
//                        // 控制台打印数据的名称
//                        parent.location = "index.html?root=incidents";
//                    });

                    $("#main6").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    js_var_chart6 = echarts.init(document.getElementById('main6'));
                    js_var_chart6_option = {
                        series: [
                            {
                                type: 'gauge',
                                min: 0,
                                max: 3,
                                radius: '98%',
                                axisLine: {// 坐标轴线
                                    show: true, // 默认显示，属性show控制显示与否
                                    lineStyle: {// 属性lineStyle控制线条样式
                                        color: [[0.35, 'green'], [0.5, 'yellow'], [0.7, 'orange'], [1, 'red']],
                                        width: 30
                                    }
                                },
                                detail: {formatter: '挥发物:{value}',
                                    offsetCenter: [0, '80%'],
                                    textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 22,
                                    }
                                },
                                data: [{value: js_var_chart6_value, name: '', textStyle: {
                                            color: 'red',
                                            fontSize: 10
                                        }}],
                                axisLabel: {
                                    show: true,
                                    distance: 0,
                                    textStyle: {
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 4,
                                    },
                                    color: 'auto'
                                }
                            }
                        ]
                    };
                    js_var_chart6.setOption(js_var_chart6_option, true);
//                    js_var_chart6.on('click', function (params) {
//                        // 控制台打印数据的名称
//                        parent.location = "index.html?root=incidents";
//                    });
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

                js_getIOTData();
                setInterval("js_getIOTData()", 5000);
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new CustomerViewModel();
        }
);
function gaugeClicked(chartType)
{
    parent.location = "index.html?root=graphics&chartType="+chartType;
}

function js_getIOTData()
{
//    $.ajaxSettings("dataType","jsonp");
//    $.post('https://iotpmjapac1641-seoracletrial13180.iot.us.oraclecloud.com/iot/api/v2/messages?type=data&limit=1',{"Authorization": "Basic eXVrdWkuamluQG9yYWNsZS5jb206VGVtcCMxMjM=",
//            "X-Content-Type-Options":"nosniff"
//        },function(data){
//            alert(1);
//        });
//    return;
    var aj = $.ajax({
        url: 'https://iotpmjapac1641-seoracletrial13180.iot.us.oraclecloud.com/iot/api/v2/messages?type=data&limit=1',
        headers: {"Authorization": "Basic eXVrdWkuamluQG9yYWNsZS5jb206VGVtcCMxMjM="

        },
        ContentType: "application/javascript;charset=utf-8",
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (data) {
            // alert(self.decryptByDES(data) );
            console.log(data);
            js_var_chart3_option.series[0].data[0].value = data.items[0].payload.data.pm25.toFixed(2);
            js_var_chart3.setOption(js_var_chart3_option, true);

            js_var_chart4_option.series[0].data[0].value = data.items[0].payload.data.pm10.toFixed(2);
            js_var_chart4.setOption(js_var_chart4_option, true);

            js_var_chart5_option.series[0].data[0].value = data.items[0].payload.data.hcho.toFixed(2);
            js_var_chart5.setOption(js_var_chart5_option, true);


            js_var_chart6_option.series[0].data[0].value = data.items[0].payload.data.vocs.toFixed(2);
            js_var_chart6.setOption(js_var_chart6_option, true);
            
            js_var_chart1_option.series[0].data[0].value = data.items[0].payload.data.temperature.toFixed(2);
            js_var_chart1.setOption(js_var_chart1_option, true);

            js_var_chart2_option.series[0].data[0].value = data.items[0].payload.data.humidity.toFixed(2);
            js_var_chart2.setOption(js_var_chart2_option, true);

            
           js_saveIOTData(data);
            
          
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

function js_saveIOTData(data)
{
    //get data from localStorage
    //localStorage.setItem("pm25Series",data.items[0].payload.data.pm25.toFixed(2));    
    js_saveIOTDataPM25(data);
    js_saveIOTDataPM10(data);
    js_saveIOTDataHcho(data);
    js_saveIOTDataVocs(data);
    js_saveIOTDataTemperature(data);
    js_saveIOTDataHumidity(data);
    
}

function js_saveIOTDataPM25(data)
{
    //data
    var pm25Series = [];
    if (!localStorage.pm25Series) localStorage.pm25Series = JSON.stringify(pm25Series);
    var arrayPm25Serires=JSON.parse(localStorage.getItem("pm25Series"));
    console.log("array Series Size:"+arrayPm25Serires);
    if(arrayPm25Serires.length>=10)
    { 
        for(var i=0;i<=(arrayPm25Serires.length-9);i++)
        {
            arrayPm25Serires.shift();
        }
    }
    
    arrayPm25Serires.push(data.items[0].payload.data.pm25.toFixed(2));
    localStorage.setItem("pm25Series",JSON.stringify(arrayPm25Serires));
    
    //group
    //
    var pm25Groups = [];
    //window.localStorage.setItem("pm25Groups",JSON.stringify(pm25Groups));
    if (!localStorage.pm25Groups) localStorage.pm25Groups = JSON.stringify(pm25Groups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayPm25Groups=JSON.parse(localStorage.pm25Groups);
    console.log("array Group Size:"+arrayPm25Groups.length);
    if(arrayPm25Groups.length>=10)
    { 
        for(var i=0;i<=(arrayPm25Groups.length-9);i++)
        {
            arrayPm25Groups.shift();
        }
    }
    
    arrayPm25Groups.push(dateStr);
    localStorage.setItem("pm25Groups",JSON.stringify(arrayPm25Groups));
    
    
}
function js_saveIOTDataPM10(data)
{
    //data
    var pm10Series = [];
    if (!localStorage.pm10Series) localStorage.pm10Series = JSON.stringify(pm10Series);
    var arrayPm10Serires=JSON.parse(localStorage.getItem("pm10Series"));
    console.log("array Series Size:"+arrayPm10Serires);
    if(arrayPm10Serires.length>=10)
    { 
        for(var i=0;i<=(arrayPm10Serires.length-9);i++)
        {
            arrayPm10Serires.shift();
        }
    }
    
    arrayPm10Serires.push(data.items[0].payload.data.pm10.toFixed(2));
    localStorage.setItem("pm10Series",JSON.stringify(arrayPm10Serires));
    
    //group
    //
    var pm10Groups = [];
    
    if (!localStorage.pm10Groups) localStorage.pm10Groups = JSON.stringify(pm10Groups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayPm10Groups=JSON.parse(localStorage.pm10Groups);
    console.log("array Group Size:"+arrayPm10Groups.length);
    if(arrayPm10Groups.length>=10)
    { 
        for(var i=0;i<=(arrayPm10Groups.length-9);i++)
        {
            arrayPm10Groups.shift();
        }
    }
    
    arrayPm10Groups.push(dateStr);
    localStorage.setItem("pm10Groups",JSON.stringify(arrayPm10Groups));
    
    
}

function js_saveIOTDataPM10(data)
{
    //data
    var pm10Series = [];
    if (!localStorage.pm10Series) localStorage.pm10Series = JSON.stringify(pm10Series);
    var arrayPm10Serires=JSON.parse(localStorage.getItem("pm10Series"));
    console.log("array Series Size:"+arrayPm10Serires);
    if(arrayPm10Serires.length>=10)
    { 
        for(var i=0;i<=(arrayPm10Serires.length-9);i++)
        {
            arrayPm10Serires.shift();
        }
    }
    
    arrayPm10Serires.push(data.items[0].payload.data.pm10.toFixed(2));
    localStorage.setItem("pm10Series",JSON.stringify(arrayPm10Serires));
    
    //group
    //
    var pm10Groups = [];
    
    if (!localStorage.pm10Groups) localStorage.pm10Groups = JSON.stringify(pm10Groups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayPm10Groups=JSON.parse(localStorage.pm10Groups);
    console.log("array Group Size:"+arrayPm10Groups.length);
    if(arrayPm10Groups.length>=10)
    { 
        for(var i=0;i<=(arrayPm10Groups.length-9);i++)
        {
            arrayPm10Groups.shift();
        }
    }
    
    arrayPm10Groups.push(dateStr);
    localStorage.setItem("pm10Groups",JSON.stringify(arrayPm10Groups));
    
    
}

function js_saveIOTDataHcho(data)
{
    //data
    var hchoSeries = [];
    if (!localStorage.hchoSeries) localStorage.hchoSeries = JSON.stringify(hchoSeries);
    var arrayHchoSerires=JSON.parse(localStorage.getItem("hchoSeries"));
    console.log("array Series Size:"+arrayHchoSerires);
    if(arrayHchoSerires.length>=10)
    { 
        for(var i=0;i<=(arrayHchoSerires.length-9);i++)
        {
            arrayHchoSerires.shift();
        }
    }
    
    arrayHchoSerires.push(data.items[0].payload.data.hcho.toFixed(2));
    localStorage.setItem("hchoSeries",JSON.stringify(arrayHchoSerires));
    
    //group
    //
    var hchoGroups = [];
    
    if (!localStorage.hchoGroups) localStorage.hchoGroups = JSON.stringify(hchoGroups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayHchoGroups=JSON.parse(localStorage.hchoGroups);
    console.log("array Group Size:"+arrayHchoGroups.length);
    if(arrayHchoGroups.length>=10)
    { 
        for(var i=0;i<=(arrayHchoGroups.length-9);i++)
        {
            arrayHchoGroups.shift();
        }
    }
    
    arrayHchoGroups.push(dateStr);
    localStorage.setItem("hchoGroups",JSON.stringify(arrayHchoGroups));
    
    
}
function js_saveIOTDataVocs(data)
{
    //data
    var vocsSeries = [];
    if (!localStorage.vocsSeries) localStorage.vocsSeries = JSON.stringify(vocsSeries);
    var arrayVocsSerires=JSON.parse(localStorage.getItem("vocsSeries"));
    console.log("array Series Size:"+arrayVocsSerires);
    if(arrayVocsSerires.length>=10)
    { 
        for(var i=0;i<=(arrayVocsSerires.length-9);i++)
        {
            arrayVocsSerires.shift();
        }
    }
    
    arrayVocsSerires.push(data.items[0].payload.data.vocs.toFixed(2));
    localStorage.setItem("vocsSeries",JSON.stringify(arrayVocsSerires));
    
    //group
    //
    var vocsGroups = [];
    
    if (!localStorage.vocsGroups) localStorage.vocsGroups = JSON.stringify(vocsGroups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayVocsGroups=JSON.parse(localStorage.vocsGroups);
    console.log("array Group Size:"+arrayVocsGroups.length);
    if(arrayVocsGroups.length>=10)
    { 
        for(var i=0;i<=(arrayVocsGroups.length-9);i++)
        {
            arrayVocsGroups.shift();
        }
    }
    
    arrayVocsGroups.push(dateStr);
    localStorage.setItem("vocsGroups",JSON.stringify(arrayVocsGroups));
    
    
}

function js_saveIOTDataTemperature(data)
{
    //data
    var temperatureSeries = [];
    if (!localStorage.temperatureSeries) localStorage.temperatureSeries = JSON.stringify(temperatureSeries);
    var arrayTemperatureSerires=JSON.parse(localStorage.getItem("temperatureSeries"));
    console.log("array Series Size:"+arrayTemperatureSerires);
    if(arrayTemperatureSerires.length>=10)
    { 
        for(var i=0;i<=(arrayTemperatureSerires.length-9);i++)
        {
            arrayTemperatureSerires.shift();
        }
    }
    
    arrayTemperatureSerires.push(data.items[0].payload.data.temperature.toFixed(2));
    localStorage.setItem("temperatureSeries",JSON.stringify(arrayTemperatureSerires));
    
    //group
    //
    var temperatureGroups = [];
    
    if (!localStorage.temperatureGroups) localStorage.temperatureGroups = JSON.stringify(temperatureGroups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayTemperatureGroups=JSON.parse(localStorage.temperatureGroups);
    console.log("array Group Size:"+arrayTemperatureGroups.length);
    if(arrayTemperatureGroups.length>=10)
    { 
        for(var i=0;i<=(arrayTemperatureGroups.length-9);i++)
        {
            arrayTemperatureGroups.shift();
        }
    }
    
    arrayTemperatureGroups.push(dateStr);
    localStorage.setItem("temperatureGroups",JSON.stringify(arrayTemperatureGroups));
    
    
}

function js_saveIOTDataHumidity(data)
{
    //data
    var humiditySeries = [];
    if (!localStorage.humiditySeries) localStorage.humiditySeries = JSON.stringify(humiditySeries);
    var arrayHumiditySerires=JSON.parse(localStorage.getItem("humiditySeries"));
    console.log("array Series Size:"+arrayHumiditySerires);
    if(arrayHumiditySerires.length>=10)
    { 
        for(var i=0;i<=(arrayHumiditySerires.length-9);i++)
        {
            arrayHumiditySerires.shift();
        }
    }
    
    arrayHumiditySerires.push(data.items[0].payload.data.humidity.toFixed(2));
    localStorage.setItem("humiditySeries",JSON.stringify(arrayHumiditySerires));
    
    //group
    //
    var humidityGroups = [];
    
    if (!localStorage.humidityGroups) localStorage.humidityGroups = JSON.stringify(humidityGroups);
   //localStorage.setItem("pm25Groups",{"ddd""dd"});
    var dateStr=timeStamp2String(data.items[0].eventTime);
    console.log("dateStr:"+dateStr);
    var arrayHumidityGroups=JSON.parse(localStorage.humidityGroups);
    console.log("array Group Size:"+arrayHumidityGroups.length);
    if(arrayHumidityGroups.length>=10)
    { 
        for(var i=0;i<=(arrayHumidityGroups.length-9);i++)
        {
            arrayHumidityGroups.shift();
        }
    }
    
    arrayHumidityGroups.push(dateStr);
    localStorage.setItem("humidityGroups",JSON.stringify(arrayHumidityGroups));
    
    
}

function timeStamp2String(time){  
    var datetime = new Date();  
    datetime.setTime(time);  
    var year = datetime.getFullYear();  
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;  
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();  
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();  
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();  
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();  
   //return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;  
   return  month + "-" + date+ " " + hour+":"+ minute ;
}  