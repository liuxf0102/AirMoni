/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojnavigationlist', 'ojs/ojswitch', 'ojs/ojradioset'],
        function (oj, ko, $) {

            function DashboardViewModel() {
                var self = this;

                //this.navigationLevel = ko.observable('page');
                //this.isChecked = ko.observable();
                //this.isChecked.subscribe(function(newValue){
                var navlistInstances = $('#navlistdemo').find(':oj-navigationlist');
//               if(newValue){
//                   navlistInstances.addClass('oj-sm-condense');
//               }else{
//                   navlistInstances.removeClass('oj-sm-condense');
//               }
                //  });
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
                    //alert('handleActivated');
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
                    //alert('handleAttached');
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
                    //alert('handleBindingsApplied');


                    /*高为屏幕的高*/
                    $("#map").css({
                        height: function () {
                            return $(document).height() - 120;
                        },
                        width: "100%"

                    });

                    /* 坐标 */
//  var map = new BMap.Map('map',{minZoom:11,maxZoom:15});    // 创建Map实例  
//  map.centerAndZoom(new BMap.Point(118.82, 32.06), 13);  // 初始化地图,设置中心点坐标和地图级别  
//  map.addControl(new BMap.MapTypeControl());   //添加地图类型控件  
//  map.setCurrentCity('南京');          // 设置地图显示的城市 此项是必须设置的  
//  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放  

                    /* 城市名 */
//  var map = new BMap.Map('map', {enableMapClick:false});//构造底图时，关闭底图可点功能  
//  map.centerAndZoom('南京',8);  

                    /* 异步加载 */
//  function loadJScript() {  
//      var script = document.createElement("script");  
//      script.type = "text/javascript";  
//      script.src = "http://api.map.baidu.com/api?v=2.0&ak=C17de36331be78b32a19cb854e9a2f30&callback=init";  
//      document.body.appendChild(script);  
//  }  
//  function init() {  
//      var map = new BMap.Map("map");  
//      map.centerAndZoom('南京',11);  
//  }  
//  window.onload = loadJScript;  //异步加载地图  

                    /* 自动移动 */
//  var map = new BMap.Map('map');  
//  map.centerAndZoom('南京',8);  
//  setTimeout(function(){  // 2秒后移动到广州  
//      map.panTo(new BMap.Point(113.262232,23.154345));  
//  }, 2000);  

                    /* 自动缩放 */
//  var map = new BMap.Map('map');  
//  map.centerAndZoom('南京',8);  
//  setTimeout(function(){  // 2秒后放大到14级  
//      map.setZoom(14);  
//  }, 2000);  
//  map.enableScrollWheelZoom(true);  

                    /* 弹跳动画 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  var marker = new BMap.Marker(point);    // 创建标注  
//  map.addOverlay(marker);                 // 将标注添加到地图中  
//  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画  

                    /* 自定义图标 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300,157));  
//  var marker = new BMap.Marker(point,{icon:myIcon});  
//  map.addOverlay(marker);  
//  marker.enableDragging();  

                    /* 画线、面、圆 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  // 创建折线  
//  var polyline = new BMap.Polyline([  
//      new BMap.Point(118.81, 32.05),  
//      new BMap.Point(118.82, 32.06),  
//      new BMap.Point(118.83, 32.05)  
//  ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  
//  map.addOverlay(polyline);  
//  polyline.enableEditing();  
//  // 创建多边形  
//  var polygon = new BMap.Polygon([  
//      new BMap.Point(118.815, 32.07),  
//      new BMap.Point(118.81, 32.065),  
//      new BMap.Point(118.82, 32.06),  
//      new BMap.Point(118.83, 32.065),  
//      new BMap.Point(118.825, 32.07)  
//  ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  
//  map.addOverlay(polygon);  
//  // 创建圆  
//  var circle = new BMap.Circle(point,500);  
//  map.addOverlay(circle);  
//  circle.hide();  

                    /* 文字备注 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  var marker = new BMap.Marker(point);  
//  map.addOverlay(marker);  
//  var opts = {  
//      position : point,                   // 指定文本标注所在的地理位置  
//      offset   : new BMap.Size(10, -30)   // 设置文本偏移量  
//  }  
//  var label = new BMap.Label("测试百度地图", opts); // 创建文本标注对象  
//  label.setStyle({  
//      color : "red",  
//      fontSize : "12px",  
//      height : "20px",  
//      lineHeight : "20px",  
//      fontFamily:"微软雅黑"  
//  });  
//  map.addOverlay(label);  

                    /* 图标备注 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  var marker = new BMap.Marker(point);  
//  map.addOverlay(marker);  
//  var label = new BMap.Label("备注一下",{offset:new BMap.Size(20,-10)});  
//  marker.setLabel(label);  

                    /* 获取图标信息 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  var marker = new BMap.Marker(point);  
//  map.addOverlay(marker);  
//  marker.addEventListener('click',getAttr);  
//  function getAttr(){  
//      var p = marker.getPosition();   // 获取marker的位置  
//      alert('marker的位置是' + p.lng + "," + p.lat);  
//  }  

                    /* 弧线 */
//  var map = new BMap.Map('map');  
//  var point = new BMap.Point(118.82, 32.06);  
//  map.centerAndZoom(point, 15);  
//  var point1 = new BMap.Point(118.83, 32.05);  
//  var points = [point,point1];  
//  var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});  
//  map.addOverlay(curve);  
//  curve.enableEditing();  

                    /* 信息窗口 */
                    var map = new BMap.Map('map');
                    var point = new BMap.Point(116.404, 39.915);
                    map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);     // 初始化地图,设置中心点坐标和地图级别
                    map.enableScrollWheelZoom();
                    //map.centerAndZoom(point, 15);  
                    // var marker = new BMap.Marker(point);

                    var json_data = [[116.334, 39.985], [116.383752, 39.91334], [116.4502, 39.932241], [116.4602, 39.84241]];
                    var pointArray = new Array();
                    for (var i = 0; i < json_data.length; i++) {
                        
                       var pt = new BMap.Point(json_data[i][0], json_data[i][1]);
                      var myIcon = new BMap.Icon("css/images/led.gif", new BMap.Size(40,40));
//                    
                      var marker = new BMap.Marker(pt,{icon:myIcon});
                       //var marker = new BMap.Marker(pt); // 创建点
                        
                        var label = new window.BMap.Label("检测点:"+(i+1), { offset: new window.BMap.Size(20, -10) });  
                        marker.setLabel(label);
                        marker.setTitle("检测点:"+(i+1));
                        //marker.device="device"+i;
                        //marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
                        
                        map.addOverlay(marker);    //增加点
                        pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
                        //pointArray[i].a="dddd";
                        marker.addEventListener("click", attribute);
                    }
                    //让所有点在视野范围内
                    map.setViewport(pointArray);
                    //获取覆盖物位置
                    function attribute(e) {
                        var p = e.target;
                        //alert(p.getTitle());
                        if(p.getTitle()=="检测点:1")
                        {
                            js_var_cur_device='AAAAAAR1RL0A-AE';
                            localStorage.cur_device=js_var_cur_device;
                            //alert(1);
                        }
                        if(p.getTitle()=="检测点:2")
                        {
                            js_var_cur_device='AAAAAAR1RL0A-BE';
                            localStorage.cur_device=js_var_cur_device;
                           //alert(2);
                        }
                        if(p.getTitle()=="检测点:3")
                        {
                            js_var_cur_device='AAAAAAR1RL0A-CE';
                            localStorage.cur_device=js_var_cur_device;
                        }
                         if(p.getTitle()=="检测点:4")
                        {
                            js_var_cur_device='AAAAAAR1RL0A-DE';
                            localStorage.cur_device=js_var_cur_device;
                        }
                        //alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat+"p："+p.getTitle());
                        
                        parent.location = "index.html?root=customers";
                    }

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
                    //alert('handleDetached');
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new DashboardViewModel();
        }
);
