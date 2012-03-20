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
        if(!this.observers){
            this.observers = [];
        }

        if(typeof observer != "function"){
            throw new TypeError("observer is not function");
        }

        this.observers.push(observer);
    }

    Observable.prototype.addObserver = addObserver;

    function hasObserver(observer){
        if(!this.observers){
            return false;
        }

        for(var i = 0, l = this.observers.length; i < l; i++){
            if(this.observers[i] == observer){
                return true;
            }
        }

        return false;
    }

    Observable.prototype.hasObserver = hasObserver;


    function notifyObservers(){
        if(!this.observers){
            return;
        }

        for(var i = 0, l = this.observers.length; i < l; i++){
            try {
                this.observers[i].apply(this, arguments);
            } catch (e){}
        }
    }

    Observable.prototype.notifyObservers = notifyObservers;
}());
