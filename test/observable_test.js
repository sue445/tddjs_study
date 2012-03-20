/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/18
 * Time: 22:34
 * To change this template use File | Settings | File Templates.
 */

TestCase("ObservableAddObserverTest", {
    "test should store function(single)" : function(){
        var observable = new tddjs.util.Observable();
        var observer = function(){};

        observable.addObserver(observer);

        assertEquals(observer, observable.observers[0]);
    },

    "test should store function(multiple)" : function(){
        var observable = new tddjs.util.Observable();
        var observers = [function(){}, function(){}];

        observable.addObserver(observers[0]);
        observable.addObserver(observers[1]);

        assertEquals(observers, observable.observers);
    }
});

TestCase("ObservableHasObserverTest", {
    "test should return true when has observer" : function(){
        var observable = new tddjs.util.Observable();
        var observer = function(){};

        observable.addObserver(observer);

        assertTrue(observable.hasObserver(observer));
    },

    "test should return false when no observers" : function(){
        var observable = new tddjs.util.Observable();

        assertFalse(observable.hasObserver(function(){}));
    }
});
