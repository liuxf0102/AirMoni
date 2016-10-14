define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart'],
function(oj, ko, $)
{   
    function ChartModel() {
        var self = this;
        
        /* toggle button variables */
        self.orientationValue = ko.observable('vertical');      
        self.lineTypeValue = ko.observable('curved');
        
        
  
        
        
        
        console.log("pm25Series:"+localStorage.getItem("pm25Series"));
        
        /* chart data */
        //var lineSeries = [{name : "温度", items : [74, 62, 70, 76, 66,80]} ];
        var lineSeries = [{name : "温度"} ];
        lineSeries[0].items=JSON.parse("["+localStorage.getItem("pm25Series")+"]");
        var lineGroups = ["9.21", "9.22", "9.23", "9.24", "9.25","9.26"];
   
        console.log(lineSeries[0].items);
        this.lineSeriesValue = ko.observableArray(lineSeries);
        this.lineGroupsValue = ko.observableArray(lineGroups);
        
       
    }
    
    var chartModel = new ChartModel();
    return chartModel;
    
});	
