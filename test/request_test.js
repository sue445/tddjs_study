/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/21
 * Time: 0:08
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var ajax = tddjs.ajax;

    TestCase("GetRequestTest", {
        "test should define get method" : function(){
            assertFunction(ajax.get);
        },

        "test should throw error without url" : function(){
            assertException(function(){
                ajax.get();
            }, "TypeError");
        },

        "test should obtainan XMLHttpRequest object" : function(){
            var originalCreate = ajax.create;

            ajax.create = function(){
                ajax.create.called = true;
            };
            
            ajax.get("/url");
            
            assert(ajax.create.called);
            
            ajax.create = originalCreate;
        }
    });
}());

