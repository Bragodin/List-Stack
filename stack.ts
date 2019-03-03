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
    pop(): object{
        const len: number = this.length;
        let removeData;
        if(len){
            removeData = this.storage[len];
            delete this.storage[len];
            this.length--;
            return removeData;
        }
    }
    toString(): string{

        let str: string = '';
        for(let i: number = 1; i <= this.length; i++){
            str += this.storage[i] + ' ';
        }
        return str;
    }
    hashcode(): number{
        const str = this.toString();
        console.log(str);
        let hash: number = 0;
        for(let i = 0; i < str.length; i++){
            let character = str.charCodeAt(i);
            hash += character;

        }
        return hash;
    }
    equals(obj: any){
        if(obj.hashcode() === this.hashcode()){
            return true;
        }
        else{
            return false;
        }
    }
}


