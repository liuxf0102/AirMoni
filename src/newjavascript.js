document.addEventListener("deviceready", function () {
    //alert("123689");
    var u = navigator.userAgent;
    if (localStorage.getItem("baiduPushReg") != "true")
    {
        //alert("u____" + u)
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {

            window.baidupush.startWork("MdZC4s0eZedaupfd13pSYEwi", function (info) {
                //alert('success__' + info);
            });


        } else if (u.indexOf('iPhone') > -1) {
            window.baidupush.startWork("IOS app key ", function (info) {
                //                               alert('success__'+info);
            });
        }
        //Set tags
        window.baidupush.setTags(["air"], function (info) {
            //your code here
        });
        localStorage.setItem("baiduPushReg", "true");
    }

}, true);