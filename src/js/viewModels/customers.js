/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
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
                    var myheight = $(document).height() - 380;
                    /*高为屏幕的高*/
                    $("#main1").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    var chart1 = echarts.init(document.getElementById('main1'));
                    chart1.setOption({
                        tooltip: {formatter: "{a}: {c}℃"},
                        series: [
                            {
                                name: '当前温度',
                                silent:false,
                                type: 'gauge',
                                min: -20,
                                max: 50,
                                radius: '88%',
                                detail: {formatter: '{value}℃', textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 12,
                                    }
                                },
                                data: [{value: 31, textStyle: {
                                            color: 'blue',
                                            fontSize: 14
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
                    });
                    chart1.on('click', function (params) {
                        // 控制台打印数据的名称
                        parent.location = "index.html?root=incidents";
                    });

                 $("#main2").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    var chart2 = echarts.init(document.getElementById('main2'));
                    chart2.setOption({
                        series: [
                            {
                                type: 'gauge',
                                min: 20,
                                max: 50,
                                radius: '98%',
                                detail: {formatter: '{value}℃', textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 12,
                                    }
                                },
                                data: [{value: 21, name: '气温', textStyle: {
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
                    });
                    chart2.on('click', function (params) {
                        // 控制台打印数据的名称
                        parent.location = "index.html?root=incidents";
                    });


                    $("#main3").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    var chart3 = echarts.init(document.getElementById('main3'));
                    chart3.setOption({
                        series: [
                            {
                                type: 'gauge',
                                min: -20,
                                max: 50,
                                radius: '98%',
                                detail: {formatter: '{value}℃', textStyle: {
                                        color: 'red',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 12,
                                    }
                                },
                                data: [{value: 21, name: '气温', textStyle: {
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
                    });
                    chart3.on('click', function (params) {
                        // 控制台打印数据的名称
                        parent.location = "index.html?root=incidents";
                    });

                    $("#main4").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    var chart4 = echarts.init(document.getElementById('main4'));
                    chart4.setOption({
                        series: [
                            {
                                type: 'gauge',
                                min: -20,
                                max: 50,
                                radius: '98%',
                                detail: {formatter: '{value}℃', textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 12,
                                    }
                                },
                                data: [{value: 21, name: '气温', textStyle: {
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
                    });
                    chart4.on('click', function (params) {
                        // 控制台打印数据的名称
                        parent.location = "index.html?root=incidents";
                    });

                    $("#main5").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    var chart5 = echarts.init(document.getElementById('main5'));
                    chart5.setOption({
                        series: [
                            {
                                type: 'gauge',
                                min: -20,
                                max: 50,
                                radius: '98%',
                                detail: {formatter: '{value}℃', textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 12,
                                    }
                                },
                                data: [{value: 21, name: '气温', textStyle: {
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
                    });
                    chart5.on('click', function (params) {
                        // 控制台打印数据的名称
                        parent.location = "index.html?root=incidents";
                    });

                    $("#main6").css({
                        height: function () {
                            return myheight;
                        },
                        width: "50%",
                        float: 'left'
                    });
                    var chart6 = echarts.init(document.getElementById('main6'));
                    chart6.setOption({
                        series: [
                            {
                                type: 'gauge',
                                min: -20,
                                max: 50,
                                radius: '98%',
                                detail: {formatter: '{value}℃', textStyle: {
                                        color: 'auto',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontFamily: 'sans-serif',
                                        fontSize: 12,
                                    }
                                },
                                data: [{value: 21, name: '气温', textStyle: {
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
                    });
                    chart6.on('click', function (params) {
                        // 控制台打印数据的名称
                        parent.location = "index.html?root=incidents";
                    });
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
                
                
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new CustomerViewModel();
        }
);
