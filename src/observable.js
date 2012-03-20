/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/18
 * Time: 22:38
 * To change this template use File | Settings | File Templates.
 */
tddjs.namespace("util");

(function(){
    function Observable(){
        this.observers = [];
    }

    tddjs.util.Observable = Observable;

    function addObserver(observer){
        this.observers.push(observer);
    }

    Observable.prototype.addObserver = addObserver;

    function hasObserver(observer){
        return this.observers.indexOf(observer) >= 0;
    }

    Observable.prototype.hasObserver = hasObserver;
}());
