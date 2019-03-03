class LinkedList{
    constructor(value){
        this.length = 0;
        this.head = null;
        this.add(value);
    }
    add(value){
        const node = { value };
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    remove(){
        if(this.length === 0){
            return 'The list is empty'
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
}