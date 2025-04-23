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

class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tale=this.head;
        this.lenght=1;
    }
    append(value){
        const newNode={value:value, next:null}
        this.tale.next=newNode;
        this.tale=newNode;
        this.lenght++; 
    }
    prepend(value){
        const newNode={value:value, next:null}
        newNode.next=this.head;
        this.head=newNode;
        this.lenght++; 
    }
}

let myLinkedList=new LinkedList(5);
//console.log(myLinkedList);

myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);

console.log(myLinkedList);