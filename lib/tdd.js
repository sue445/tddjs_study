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

    function isHostMethod(object, property){
        var type = typeof object[property];

        return type == "function" ||
            (type == "object" && !object[property]) ||
            type == "unknown";
    }

    return {
        namespace : namespace,
        isHostMethod : isHostMethod
    };

}());

// P138
tddjs.isOwnProperty = (function(){
    var hasOwn = Object.prototype.hasOwnProperty;

    if(typeof hasOwn == "function"){
        return function(object, property){
            return hasOwn.call(object, property);
        };
    } else{
        // TODO
    }

}());

tddjs.isLocal = (function(){
    function isLocal(){
        return !!(window.location &&
            window.location.protocol.indexOf("file:") === 0);
    }
    return isLocal;
}());

// P140
tddjs.each = (function(){
    function unEnumerated(object, properties){
        var length = properties.length;

        for(var i = 0; i < length; i++){
            object[properties[i]] = true;
        }

        var enumerated = length;

        for(var prop in object){
            if(tddjs.isOwnProperty(object, prop)){
                enumerated -= 1;
                object[prop] = false;
            }
        }

        if(!enumerated){
            return;
        }

        var needsFix = [];

        for(i = 0; i < length; i++){
            if(object[properties[i]]){
                needsFix.push(properties[i]);
            }
        }

        return needsFix;
    }

    var oFixes = unEnumerated(
        {},
        ["toString", "toLocaleString", "valueOf",
        "hasOwnProperty", "isPrototypeOf",
        "constructor", "propertyIsEnumerable"]);

    var fFixes = unEnumerated(
        function(){},
        ["call", "apply", "prototype"]
    );

    if(fFixes && oFixes){
        fFixes = oFixes.concat(fFixes);
    }

    var needsFix = {"object" : oFixes, "function" : fFixes};

    return function(object, callback){
        if(typeof callback != "function"){
            throw new TypeError("callback is not a function");
        }

        for(var prop in object){
            if(tddjs.isOwnProperty(object, prop)){
                callback(prop, object[prop])
            }
        }

        var fixes = needsFix[typeof object];

        if(fixes){
            var property;
            for(var i = 0, l = fixes.length; i < l; i++){
                property = fixes[i];

                if(tddjs.isOwnProperty(object, property)){
                    callback(property, object[property]);
                }
            }
        }
    };
}());

// P164
tddjs.extend = (function(){
    function extend(target, source){
        target = target || {};

        if(!source){
            return target;
        }

        tddjs.each(source, function(prop, val){
            target[prop] = val;
        });

        return target;
    }

    return extend;
}());

// P278
(function(){
    if(typeof encodeURIComponent == "undefined"){
        return;
    }

    function urlParams(object){
        if(!object){
            return "";
        }

        if(typeof object == "string"){
            return encodeURI(object);
        }

        var pieces = [];

        tddjs.each(object, function(prop, val){
            pieces.push(encodeURIComponent(prop) + "=" + encodeURIComponent(val));
        });
    }

    tddjs.namespace("util").urlParams = urlParams;
}());
