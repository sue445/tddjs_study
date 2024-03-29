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

    setRequestHeader : function(header, value){
        if(!this.headers){
            this.headers = {};
        }
        this.headers[header] = value;
    },

    readyStateChange : function(readyState){
        this.readyState = readyState;
        this.onreadystatechange();
    }
};
