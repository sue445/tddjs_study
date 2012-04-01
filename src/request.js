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

    function isSuccess(transpot){
        var status = transpot.status;

        return (status >= 200 && status < 300) ||
            status == 304 ||
            (tddjs.isLocal() && !status);
    }

    function requestComplete(transpot, options){
        if(isSuccess(transpot)){
            if(typeof options.success == "function"){
                options.success(transpot);
            }
        } else{
            if(typeof options.success == "function"){
                options.failure(transpot);
            }
        }
    }

    // It's error on WebStorm
//    if(!ajax.create){
//        return;
//    }

    function get(url, options){
        options = options || {};
        options.method = "GET";
        ajax.request(url, options);
    }

    ajax.get = get;

    function request(url, options){
        if(typeof url != "string"){
            throw new TypeError("URL should be string");
        }

        options = options || {};
        var transport = tddjs.ajax.create();
        transport.open(options.method ||  "GET", url, true);
        transport.onreadystatechange = function(){
            if(transport.readyState == 4){
                requestComplete(transport, options);
                transport.onreadystatechange = tddjs.noop;
            }
        };
        transport.send(null);
    }

    ajax.request = request;

    function post(url, options){
        options = tddjs.extend({}, options);
        options.method = "POST";
        ajax.request(url, options);
    }

    ajax.post = post;
}());
