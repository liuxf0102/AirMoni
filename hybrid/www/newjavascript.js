document.addEventListener("deviceready", function () {
    //alert("123689");
    var u = navigator.userAgent;
    //alert("u____" + u)
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        if (localStorage.getItem("baiduPushReg") != "true")
        {
            window.baidupush.startWork("MdZC4s0eZedaupfd13pSYEwi", function (info) {
                //alert('success__' + info);
            });

            //Set tags
            window.baidupush.setTags(["air"], function (info) {
                //your code here
            });
            localStorage.setItem("baiduPushReg", "true");
        }
    } else if (u.indexOf('iPhone') > -1) {
//            window.baidupush.startWork("IOS app key ", function(info){
//            // alert('success__'+info);
//            });
    }


}, true);