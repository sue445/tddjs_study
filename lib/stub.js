/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/21
 * Time: 23:37
 * To change this template use File | Settings | File Templates.
 */

function stubFn(){
    var fn = function(){
        fn.called = true;
    };

    fn.called = false;

    return fn;
}
