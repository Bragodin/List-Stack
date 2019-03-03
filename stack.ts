class Stack<T>{
    length: number;
    storage: object;
    constructor(){
        this.length = 0;
        this.storage = {};
    }
    push(value: T){
        const len = ++this.length;
        this.storage[len] = value;
    }
    pop(){
        const len: number = this.length;
        let removeData;
        if(len){
            removeData = this.storage[len];
            delete this.storage[len];
            this.length--;
            return removeData;
        }
    }
}