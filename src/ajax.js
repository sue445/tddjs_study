/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/20
 * Time: 22:52
 * To change this template use File | Settings | File Templates.
 */
//(function(){
//    var xhr;
//    var ajax = tddjs.namespace("ajax");
//
//    var options = [
//        function(){
//            return new ActiveXObject("Microsoft.XMLHTTP");
//        },
//
//        function(){
//            return new XMLHttpRequest();
//        }
//    ];
//
//    for(var i = 0, l = options.length; i < l; i++){
//        try{
//            xhr = options[i]();
//
//            if(typeof xhr.readyState == "number" &&
//                tddjs.isHostMethod(xhr, "open") &&
//                tddjs.isHostMethod(xhr, "send") &&
//                tddjs.isHostMethod(xhr, "setRequestHeader") ){
//
//                ajax.create = options[i];
//                break;
//            }
//        } catch(e){}
//    }
//}());

//tddjs.namespace("ajax").create = function(){
//    var options = [
//        function(){
//            return new ActiveXObject("Microsoft.XMLHTTP");
//        },
//
//        function(){
//            return new XMLHttpRequest();
//        }
//    ];
//
//    for(var i = 0, l = options.length; i < l; i++){
//        try{
//            return options[i]();
//        } catch(e){}
//    }
//
//    return null;
//};
