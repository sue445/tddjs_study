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

    }

    tddjs.util.Observable = Observable;

    function addObserver(observer){
        this.observers = [observer];
    }

    Observable.prototype.addObserver = addObserver;
}());
