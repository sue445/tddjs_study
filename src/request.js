/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/21
 * Time: 0:08
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var ajax = tddjs.namespace("ajax");

    // It's error on WebStorm
//    if(!ajax.create){
//        return;
//    }

    function get(url){
        if(typeof url != "string"){
            throw new TypeError("URL should be string");
        }

        var transport = tddjs.ajax.create();
        transport.open("GET", url, true);
        transport.onreadystatechange = function(){};
    }

    ajax.get = get;
}());
