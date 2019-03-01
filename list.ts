class LinkedList<T> {
    head: T;
    length: number;
    constructor(value: T){
        this.length = 0;
        this.head = null;
    }
    add(value: T){
        const node: any = { value };
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
}