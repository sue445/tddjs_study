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
        var observers = [function(){}, function(){}];

        observable.addObserver(observers[0]);
        observable.addObserver(observers[1]);

        assertTrue(observable.hasObserver(observers[0]));
        assertTrue(observable.hasObserver(observers[1]));
    }
});

TestCase("ObservableHasObserverTest", {
    "test should return false when no observers" : function(){
        var observable = new tddjs.util.Observable();

        assertFalse(observable.hasObserver(function(){}));
    }
});

TestCase("ObservableNotifyObserversTest", {
    "test should call all observers" : function(){
        var observable = new tddjs.util.Observable();
        var observer1 = function(){ observer1.called = true; };
        var observer2 = function(){ observer2.called = true; };

        observable.addObserver(observer1);
        observable.addObserver(observer2);
        observable.notifyObservers();

        assertTrue(observer1.called);
        assertTrue(observer2.called);
    }
});
