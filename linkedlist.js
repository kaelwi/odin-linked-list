import Node from './nodes.js';

export default class LinkedList {
    constructor () {
        this.listHead = null;
    }

    append(value) {
        const n = new Node(value);
        if (this.listHead === null) {
            this.listHead = n;
        } else {
            let temp = this.listHead;
            while (temp.nextNode !== null) {
                temp = temp.nextNode;
            }
            temp.nextNode = n;
        }
    }

    prepend(value) {
        const n = new Node(value);
        if (this.listHead !== null) {
            n.nextNode = this.listHead;
        }
        this.listHead = n;
    }

    size() {
        if (this.listHead === null) {
            return 0;
        }

        let size = 1;
        let temp = this.listHead.nextNode;

        while (temp !== null) {
            size++;
            temp = temp.nextNode;
        }

        return size;
    }

    head() {
        console.log('head method');
        return this.listHead;
    }

    tail() {
        if (this.listHead !== null) {
            let temp = this.listHead.nextNode;
            if (temp === null) {
                return this.listHead;
            } else {
                while (temp.nextNode !== null) {
                    temp = temp.nextNode;
                }

                return temp;
            }
        }
    }

    at(index) {
        console.log(index);
        let temp = this.listHead;

        if (index === 0) {
            return temp;
        } else {
            let counter = 0;
            while (temp.nextNode !== null) {
                temp = temp.nextNode;
                counter++;
                if (index === counter) {
                    return temp;
                }
            }
        }
    }

    toString() {
        let str = '';
        if (this.listHead !== null) {
            str = '( ';
            str += this.listHead.value;
            let temp = this.listHead.nextNode;
            while (temp !== null) {
                str += ' ) -> ( ' + temp.value;
                temp = temp.nextNode;
            }
            str += ' ) -> ';
        }
        str += null; 
        return str;
    }

    pop() {
        if (this.listHead !== null) {
            let temp = this.listHead.nextNode;
            if (temp === null) {
                this.listHead = null;
            } else {
                let prev = this.listHead;
                while (temp.nextNode !== null) {
                    prev = temp;
                    temp = temp.nextNode;
                }

                prev.nextNode = null;
            }
        }
    }

    contains(value) {
        if (this.listHead === null) {
            return false;
        }

        if (this.listHead.value === value) {
            return true;
        }

        let temp = this.listHead;
        while (temp.nextNode !== null) {
            temp = temp.nextNode;
            if (temp.value === value) {
                return true;
            }
        }

        return false;
    }

    find(value) {
        if (this.listHead === null) {
            return -1;
        }

        if (this.listHead.value === value) {
            return 0;
        }

        let counter = 0;
        let temp = this.listHead;
        while (temp.nextNode !== null) {
            counter++;
            temp = temp.nextNode;
            if (temp.value === value) {
                return counter;
            }
        }
        return -1;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
            console.log('Invalid index');
            return;
        }

        let n = new Node(value);

        if (this.listHead === null) {
            this.listHead = n;
            return;
        }

        if (index === 0) {
            n.nextNode = this.listHead;
            this.listHead = n;
            return;
        }

        let temp = this.listHead.nextNode;
        if (temp === null) {
            this.listHead.nextNode = n;
        } else {
            index--;
            let prev = this.listHead;
            while (index !== 0) {
                index--;
                prev = temp;
                temp = temp.nextNode;
            }
            prev.nextNode = n;
            n.nextNode = temp;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.log('Invalid index');
            return;
        }

        if (this.listHead.nextNode === null) {
            this.listHead = null;
            return;
        }

        if (index === 0) {
            this.listHead = this.listHead.nextNode;
            return;
        }

        let temp = this.listHead.nextNode;
        index--;
        let prev = this.listHead;

        while (index > 0) {
            index--;
            prev = temp;
            temp = temp.nextNode;
        }

        prev.nextNode = temp.nextNode;
    }
}