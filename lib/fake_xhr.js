/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/24
 * Time: 22:43
 * To change this template use File | Settings | File Templates.
 */
var fakeXMLHttpRequest = {
    open: stubFn(),
    send: stubFn(),

    readyStateChange : function(readyState){
        this.readyState = readyState;
        this.onreadystatechange();
    }
};
