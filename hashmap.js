#!/usr/bin/env node

class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    } 

    set(key, value) {
        if (this.buckets[this.hash(key)] === null) {
            const list = new LinkedList();
            this.buckets[this.hash(key)] = list;
        }
        this.buckets[this.hash(key)].append(key, value);
    }

    get(key) {

    }

    print() {
        console.log(this.buckets)
    }

}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(key, value) {
        const newNode = new Node(key, value);
        if (this.head === null) {
            this.head = newNode;
            return
        };
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode
        };
        current.nextNode = newNode
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return
        };
        newNode.nextNode = this.head;
        this.head = newNode
    }

    size() {
        let current = this.head;
        let count = 0;
        if (current === null) {
            return count
        };
        count += 1;
        while (current.nextNode) {
            current = current.nextNode;
            count += 1;
        };
        return count
    }

    getHead() {
        if (this.head === null) {
            return undefined
        };
        return this.head.value
    }

    getTail() {
        if (this.head === null) {
            return undefined
        };
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        };
        if (current.nextNode === null) {
            return current.value
        };
    }

    at(index) {
        let current = this.head;
        if (current === null) {
            return undefined
        };
        if (index === 0) {
            return current.value
        };
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
            if (current === null) {
                return undefined
            };
        }
        return current.value;
    }

    pop() {
        if (this.head === null) {
            return undefined
        };
        const headValue = this.head.value;
        this.head = this.head.nextNode;
        return headValue
    }

    contains(input) {
        let current = this.head;
        if (current === null) {
            return false
        };
        if (current.value === input) {
            return true
        };
        while (current.nextNode) {
            current = current.nextNode;
            if (current.value === input) {
                return true
            }
        };
        return false;
    }

    findIndex(input) {
        let current = this.head;
        let index = 0;
        if (current === null) {
            return -1
        };
        if (current.value === input) {
            return index
        };
        while (current.nextNode) {
            current = current.nextNode;
            index += 1;
            if (current.value === input) {
                return index
            }
        };
        return -1
    }

    toString() {
        let listString = "";
        let current = this.head;
        if (current === null) {
            return listString
        };
        listString += `(${current.value}) -> `;
        while (current.nextNode) {
            current = current.nextNode;
            listString += `(${current.value}) -> `;
        };
        return listString += "null"
    }

    insertAt(index, ...inputs) {
        let current = this.head;
        let saveCurrent = current;
        if (index < 0) {
            return console.log(RangeError)
        } else if (index > 0) {
            for (let i = 0; i < index; i++) {
                saveCurrent = current;
                current = current.nextNode;
                if (current === null) {
                    return console.log(RangeError)
                };
            };

            for (const input of inputs) {
                const newNode = new Node(input);
                saveCurrent.nextNode = newNode;
                saveCurrent = saveCurrent.nextNode;
            }
            saveCurrent.nextNode = current
        } else {
            let count = 0;
            for (const input of inputs) {
                const newNode = new Node(input);
                if (count === 0) {
                    this.head = newNode; 
                    saveCurrent = newNode;
                    count += 1;
                } else {
                    saveCurrent.nextNode = newNode;
                    saveCurrent = saveCurrent.nextNode;
                }
            }
            saveCurrent.nextNode = current
        };
    }

    removeAt(index) {
        let current = this.head;
        let saveCurrent = current;
        if (index < 0) {
            return console.log(RangeError)
        } else if (index === 0) {
            this.head = this.head.nextNode;
        } else {
            for (let i = 0; i < index; i++) {
                saveCurrent = current;
                current = current.nextNode;
                if (current === null) {
                    return console.log(RangeError)
                };
            };
            saveCurrent.nextNode = current.nextNode;
        }
    }

}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.print()


