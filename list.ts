class LinkedList<T> {
    head: T;
    length: number;
    constructor(value: T){
        this.length = 0;
        this.head = null;
    }
    // object
    add(value: T){
        const node: any = { value };
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    remove(){
        const value: any = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}