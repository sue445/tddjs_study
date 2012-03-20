/**
 * Created by JetBrains WebStorm.
 * User: sue445
 * Date: 12/03/18
 * Time: 22:38
 * To change this template use File | Settings | File Templates.
 */
(function(){
    function observe(event, observer){
        if(!this.observers){
            this.observers = [];
        }

        if(typeof observer != "function"){
            throw new TypeError("observer is not function");
        }

        this.observers.push(observer);
    }

    function hasObserver(event, observer){
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

    function notify(event){
        if(!this.observers){
            return;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for(var i = 0, l = this.observers.length; i < l; i++){
            try {
                this.observers[i].apply(this, args);
            } catch (e){}
        }
    }

    tddjs.namespace("util").observable = {
        observe: observe,
        hasObserver: hasObserver,
        notify: notify
    };
}());
