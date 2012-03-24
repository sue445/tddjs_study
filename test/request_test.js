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
        setUp : function(){
            this.ajaxCreate = ajax.create;
            this.xhr = Object.create(fakeXMLHttpRequest);
            ajax.create = stubFn(this.xhr);
        },

        tearDown : function(){
            ajax.create = this.ajaxCreate;
        },

        "test should define get method" : function(){
            assertFunction(ajax.get);
        },

        "test should throw error without url" : function(){
            assertException(function(){
                ajax.get();
            }, "TypeError");
        },

        "test should obtain XMLHttpRequest object" : function(){
            ajax.get("/url");

            assert(ajax.create.called);
        },

        "test should call open with method, url, async flag" : function(){
            var url = "/url";
            ajax.get(url);

            assertEquals(["GET", url, true], this.xhr.open.args);
        }

    });
}());

