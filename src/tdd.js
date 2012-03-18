/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/18
 * Time: 22:06
 * To change this template use File | Settings | File Templates.
 */

var tddjs = (function(){
    function namespace(string){
        var object = this;
        var levels = string.split(".");

        for(var i = 0, l = levels.length; i < l; i++){
            if(typeof object[levels[i]] == "undefined"){
                object[levels[i]] = {};
            }

            object = object[levels[i]];
        }

        return object;
    }

    return {
        namespace : namespace
    };
}());