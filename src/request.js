/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/21
 * Time: 0:08
 * To change this template use File | Settings | File Templates.
 */
tddjs.noop = function(){};

(function(){
    var ajax = tddjs.namespace("ajax");

    function requestComplete(transpot, options){
        var status = transpot.status;

        if(status == 200 || (tddjs.isLocal() && !status)){
            if(typeof options.success == "function"){
                options.success(transpot);
            }
        }
    }

    // It's error on WebStorm
//    if(!ajax.create){
//        return;
//    }

    function get(url, options){
        if(typeof url != "string"){
            throw new TypeError("URL should be string");
        }

        options = options || {};
        var transport = tddjs.ajax.create();
        transport.open("GET", url, true);
        transport.onreadystatechange = function(){
            if(transport.readyState == 4){
                requestComplete(transport, options);
                transport.onreadystatechange = tddjs.noop;
            }
        };
        transport.send(null);
    }

    ajax.get = get;
}());
