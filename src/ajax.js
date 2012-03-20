/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/20
 * Time: 22:52
 * To change this template use File | Settings | File Templates.
 */
tddjs.namespace("ajax").create = function(){
    var options = [
        function(){
            return new ActiveXObject("Microsoft.XMLHTTP");
        },

        function(){
            return new XMLHttpRequest();
        }
    ];

    for(var i = 0, l = options.length; i < l; i++){
        try{
            return options[i]();
        } catch(e){}
    }

    return null;
};