/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/24
 * Time: 23:44
 * To change this template use File | Settings | File Templates.
 */
if(!Function.prototype.bind){
    (function(){
        var slice = Array.prototype.slice;

        Function.prototype.bind = function(thisObj){
            var target = this;

            if(arguments.length > 1){
                var args = slice.call(arguments, 1);

                return function(){
                    var allArgs = args;

                    if(arguments.length > 0){
                        allArgs = args.concat(slice.call(arguments));
                    }

                    return target.apply(thisObj, allArgs);
                };
            }

            return function(){
                if(arguments.length > 0){
                    return target.apply(thisObj, arguments);
                }
                return target.call(thisObj);
            }
        }
    }());

}