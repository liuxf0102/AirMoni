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
            function dialGaugeData() {

                var self = this;
                this.gaugeValue = ko.observable(50);
                this.isReadOnly =ko.observable(false);
                 self.buttonClick = function(data, event) 
                {
                    
                    //alert("clickIt1");
                    console.log(parent.location);
                    parent.location="index.html?root=graphics";
                    return true;


                };

            }
            ;




            return new dialGaugeData();

        }


);



