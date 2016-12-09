/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojnavigationlist', 'ojs/ojswitch', 'ojs/ojradioset','ojs/ojmenu', 'ojs/ojnavigationlist'],
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
                    //js_getDevices();
                    //setTimeout(function(){  }, 5000)
                    /*高为屏幕的高*/
                    $("#map").css({
                        height: function () {
                            return $(document).height() - 120;
                        },
                        width: "100%"

                    });

               js_getDevices();
               // js_showCheckPoint();
                   
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
                 self.selectedMenuItem = function (obj) {};
                 self.menuItemSelect = function (event, ui) {
                    self.selectedMenuItem(ui.item.children("a").text());
                    //alert(ui.item.children("a").text());
                    if (ui.item.children("a").text() == "软件升级") {
                        parent.location = "index.html?root=performance";
                    } else if (ui.item.children("a").text() == "刷新数据") {
                        parent.location = "index.html?root=dashboard&refreshData=true";
                    }else {
                        parent.location = "index.html?root=dashboard";
                    }
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
