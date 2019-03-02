class LinkedList<T> {
    head: T;
    length: number;
    next: any;
    constructor(value: T, index: number){
        this.length = 0;
        this.head = null;
    }
    // object
    add(value: T, index){
        const node: any = { value, index };
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    // remove(){
    //     const value: any = this.head.value;
    //     this.head = this.head.next;
    //     this.length--;
    //     return value;
    // }
}