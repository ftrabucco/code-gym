// 1-->5-->16-->20

// let myLinkedList = {
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 value:16,
//                 next:null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tale = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tale.next = newNode;
        this.tale = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array);
    }
    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            console.log('yes')
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    /*
    insert(index, value){
        const newNode = new Node(value);
        let currentNode=this.head;
        let followingNode=null;
        //loopeamos hasta el anterior al indice que vamos a incertar
        for (let i = 0; i <= index-1; i++) {
            //const element = array[i];
            currentNode=currentNode.next;
        }
        followingNode=currentNode.next;
        //el anterior,que tiene que apuntar al valor del insertado
        currentNode.next=newNode;
        //ahora el nuevo nodo insertado apunta al que sigue
        newNode.next=followingNode;
    }
        */
}

let myLinkedList = new LinkedList(5);
//console.log(myLinkedList);

myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(1, 85);
myLinkedList.printList();
//console.log(myLinkedList);