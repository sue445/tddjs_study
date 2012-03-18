/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/18
 * Time: 22:34
 * To change this template use File | Settings | File Templates.
 */

TestCase("ObservableAddObserverTest", {
    "test should store function" : function(){
        var observable = new tddjs.util.Observable();
        var observer = function(){};

        observable.addObserver(observer);

        assertEquals(observer, observable.observers[0]);
    }
})