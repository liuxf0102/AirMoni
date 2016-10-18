define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart'],
        function (oj, ko, $)
        {
            function ChartModel() {
                var self = this;

                /* toggle button variables */
                self.orientationValue = ko.observable('vertical');
                self.lineTypeValue = ko.observable('curved');

                //console.log("pm25Series:"+localStorage.getItem("pm25Series"));
                var charType = getUrlParam('chartType');
                console.log("charType:" + charType);

                if (charType == "PM25") {
                    /* chart data */
                    //var lineSeries = [{name : "PM2.5", items : [74, 62, 70, 76, 66,80]} ];
                    var lineSeries = [{name: "PM2.5"}];
                    lineSeries[0].items = JSON.parse(localStorage.getItem("pm25Series"));
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    var lineGroups = JSON.parse(localStorage.getItem("pm25Groups"));
                    console.log(lineSeries[0].items);
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                }
                if (charType == "PM10") {
                    /* chart data */

                    var lineSeries = [{name: "PM10"}];
                    lineSeries[0].items = JSON.parse(localStorage.getItem("pm10Series"));
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    var lineGroups = JSON.parse(localStorage.getItem("pm10Groups"));
                    console.log(lineSeries[0].items);
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                }
                 if (charType == "hcho") {
                    /* chart data */

                    var lineSeries = [{name: "甲醛"}];
                    lineSeries[0].items = JSON.parse(localStorage.getItem("hchoSeries"));
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    var lineGroups = JSON.parse(localStorage.getItem("hchoGroups"));
                    console.log(lineSeries[0].items);
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                }
                
                if (charType == "vocs") {
                    /* chart data */

                    var lineSeries = [{name: "挥发物"}];
                    lineSeries[0].items = JSON.parse(localStorage.getItem("vocsSeries"));
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    var lineGroups = JSON.parse(localStorage.getItem("vocsGroups"));
                    console.log(lineSeries[0].items);
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                }
                if (charType == "temperature") {
                    /* chart data */

                    var lineSeries = [{name: "温度"}];
                    lineSeries[0].items = JSON.parse(localStorage.getItem("temperatureSeries"));
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    var lineGroups = JSON.parse(localStorage.getItem("temperatureGroups"));
                    console.log(lineSeries[0].items);
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                }
                if (charType == "humidity") {
                    /* chart data */

                    var lineSeries = [{name: "湿度"}];
                    lineSeries[0].items = JSON.parse(localStorage.getItem("humiditySeries"));
                    //var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
                    var lineGroups = JSON.parse(localStorage.getItem("humidityGroups"));
                    console.log(lineSeries[0].items);
                    this.lineSeriesValue = ko.observableArray(lineSeries);
                    this.lineGroupsValue = ko.observableArray(lineGroups);
                }

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