/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/* 
 * Your viewModel code goes here
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojgauge'],
        function (oj, ko, $)
        {
            function ViewModel() {

                var self = this;
                 //self.info= "当前版本"+js_currentVersion+"最新版本"+js_latestVersion+"，请更新应用后再使用";
                 //self.info= "当前版本"+js_currentVersion+"最新版本"+js_latestVersion+"，请更新应用后再使用";
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
                    //self.info= "当前版本"+js_currentVersion+"最新版本"+js_latestVersion+"，请更新应用后再使用";
                  // info="dd";
                };
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
                   // alert('handleActivated');
                    // Implement if needed
                };
                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                    //alert('handleBindingsApplied');
                   
                  
                }
               
            
            }
            ;
            return new ViewModel();

        }


);





