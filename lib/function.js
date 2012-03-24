/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/24
 * Time: 23:44
 * To change this template use File | Settings | File Templates.
 */
if(!Function.prototype.bind){
    Function.prototype.bind = function(thisObj){
        var target = this;

        return function(){
            return target.apply(thisObj, arguments);
        }
    }
}