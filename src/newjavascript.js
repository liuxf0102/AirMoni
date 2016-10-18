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