class LinkedList {
    constructor(value){
        this.length = 0;
        this.head = null;
        
    }
    add(value){
        const next = this.head;
        this.head = {value};
        this.length++;
        return this;
    }
    remove(){
        if(this.length === 0 ){
            throw 'error';
        }
        const value = this.head;
        this.head = this.head.next;

        this.length--;
        return this;
    }
    get(value){
        if(this.value )

    }
}