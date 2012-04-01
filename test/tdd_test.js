/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/18
 * Time: 21:34
 * To change this template use File | Settings | File Templates.
 */
TestCase("NamespaceTest", {
    tearDown: function(){
        delete tddjs.nstest;
    },

    "test should create non-existent object" :
        function(){
            tddjs.namespace("nstest");
            assertObject(tddjs.nstest);
        },

    "test should not overwrite existing objects" :
        function(){
            tddjs.nstest = {nested : {}};
            var result = tddjs.namespace("nstest.nested");

            assertSame(tddjs.nstest.nested, result);
        },

    "test only create missing parts" :
        function(){
            var existing = {};
            tddjs.nstest = {nested: {existing : existing}};
            var result = tddjs.namespace("nstest.nested.ui");

            assertSame(existing, tddjs.nstest.nested.existing);
            assertObject(tddjs.nstest.nested.ui);
        },

    "test namespacing inside other objects" :
        function(){
            var custom = { namespace: tddjs.namespace };
            custom.namespace("dom.event");

            assertObject(custom.dom.event);
            assertUndefined(tddjs.dom);
        }
});

TestCase("ObjectExtendTest", {
   setUp : function(){
       this.dummy = {
           setName : function(name){
               return (this.name == name);
           },

           getName : function(){
               return this.name || null;
           }
       };
   },

    "test should copy properties" : function(){
        var object = {};
        tddjs.extend(object, this.dummy);

        assertEquals("function", typeof object.getName);
        assertEquals("function", typeof object.setName);
    }
});