//Levelorder traversal

class Node {
    constructor(data, next=null){
      this.data = data;
      this.next = next;
  
    }
  }
  class LinkedList {
    constructor(){
      this.head = null;
      this.address = 0;
    }
    putFirst(data) {
      this.head = new Node (data, this.head)
    }
    printListData() {
        let current = this.head;
    
        while(current){
          console.log(current.data);
          current = current.next;
        }
      }
    }
    function midpoint(list) {
      let moveOne = list.head;
      let moveTwo = list.head;
      while ( moveTwo.next &&  moveTwo.next.next) {
        moveOne = moveOne.next;
       moveTwo =  moveTwo.next.next;
      }
      
      return moveOne;
     }
    
    
     const nl = new LinkedList();
    
     nl.putFirst(1);
     nl.putFirst(2);
     nl.putFirst(7);
     nl.putFirst(4);
     nl.putFirst(5);
     nl.putFirst(6);
     nl.printListData();