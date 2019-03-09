class NodeElement<T>{
    value: T;
    next: NodeElement<T> = null;
    constructor(element: T){
        this.value = element;
        this.next = null;
    }
}
class LinkedList<T>{
    length: number = 0;
    head: NodeElement<T>;
    constructor(headEl?: NodeElement<T>){
        this.head = headEl || null;
    }
    add(value: T, positionition?: number) {
        if(!positionition){
            let node = new NodeElement(value);
            let current: NodeElement<T>;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
        return true;
        }

        if (positionition > -1 && positionition < this.length && this.head) {
            let current = this.head;
            let index = 0;
            let previous = current;
            let node = new NodeElement<T>(value);

            if (positionition === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < positionition && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    }
    size(){
        return this.length;
    }
    remove(position: number): NodeElement<T> | null {
        if (position > -1 && position < this.length && this.head) {
            let current = this.head;
            let previous: NodeElement<T> = current;
            let index = 0;

            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        } else {
            return null;
        }
    }
    toString() {
        let current: NodeElement<T> = this.head;
        let str:string = '';
        while (current) {
            str += current.value;
            current = current.next;
        }
        return str;
    }
    equals(list: LinkedList<T>){
        if(list.size() === this.size() && this.toString() === list.toString()){
            return true;
        }
        else{
            return false;
        }
    }
    get(index: number){
        let element: NodeElement<T> = this.head;

    }
}