export class Stack<T>{
    value: T;
    next = null;
    head: Stack<T>;
    private length: number = 0;
    push(elem: T){
        let node = new Stack<T>();
        node.value = elem;
        node.next = this.next;
        this.next = node;
        this.head = node; 
        this.length++;
    }
    pop(){
        if(this.next === null){
            return false;
        }
        let delElem = this.next.value;
        this.head = this.head.next;
        this.next = this.next.next;
        this.length--;
        return delElem;
    }
    toString() {
        let str: string = '';
        let h = this.head;
        while (this.head) {
            str += this.head.value + ' ';
            this.head = this.head.next;
        }
        this.head = h;
        return str;
    }
    equals(stack: Stack<T>){
        if(this.size() === stack.size() && stack.toString() === this.toString()){
            return true;
        }
        else {
            return false
        }
    }
    size(){
        return this.length;
    }
}


