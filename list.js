var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.length = 0;
        this.index = 0;
        this.head = null;
    }
    // object
    LinkedList.prototype.add = function (value, index) {
        var node = { value: value };
        this.index = index;
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    };
    return LinkedList;
}());
