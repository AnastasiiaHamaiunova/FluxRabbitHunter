export default class Store {
    constructor(){
        this.x = 0;
        this.y = 0;
    
        this.views = [];
    }

    reduce(payload){
        switch(payload.eventType){
            case "CHANGE_POSITION":
                this.x = payload.x;
                this.y = payload.y;
        }        
        
        this.updateViews();        
    } 

    addView(callback){
        this.views.push(callback);
    } 

    removeView(callback){
        let index = this.views.indexOf(callback);
        this.views.splice(index, 1);
    } 

    updateViews(){
        this.views.map(callback => callback());
    }
}