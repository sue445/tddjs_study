/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/21
 * Time: 0:08
 * To change this template use File | Settings | File Templates.
 */
TestCase("GetRequestTest", {
    "test should define get method" : function(){
        assertFunction(tddjs.ajax.get);
    },

    "test should throw error without url" : function(){
        assertException(function(){
            tddjs.ajax.get();
        }, "TypeError");
    }
});
