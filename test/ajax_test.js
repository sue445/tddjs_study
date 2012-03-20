/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/20
 * Time: 22:52
 * To change this template use File | Settings | File Templates.
 */
TestCase("AjaxCreateTest", {
    "test should return XMLHttpRequest object": function(){
        var xhr = tddjs.ajax.create();

        assertNumber(xhr.readyState);
        assert(tddjs.isHostMethod(xhr, "open"));
        assert(tddjs.isHostMethod(xhr, "send"));
        assert(tddjs.isHostMethod(xhr, "setRequestHeader"));
    }
});
