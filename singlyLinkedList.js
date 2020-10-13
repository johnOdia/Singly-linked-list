function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function(val){
    let current
    if(!this.head) this.head = new Node(val) //checks if list is empty them appends val as first element
    else{
       current = this.head
       while(current.next){ //loops through to find the last index
           current = current.next // resets the current variable to loop through again
       }
       current.next = new Node(val) // sets a new index to the next value
       this.tail = current.next // sets the tail to the value
    }
    this.length++
    return this
}


SinglyLinkedList.prototype.pop = function(){
    let current = this.head //sets the root index to a variable
    let previous 
    if(!this.head) return // if list is empty return undefined
    else{
        while(current.next){ // loops through the list
            previous = current // this will be the element at -2 position in the list at the end of the iteration
            current = current.next // reset the current variable to run the loop again
        }
        previous.next = current.next//current.next will be null at this point.Same thing as writing previous.next = null
        this.tail = previous // sets the tail to the previous variable which is now the last index in the list
        this.length--
    }
    return current.val
}

SinglyLinkedList.prototype.unshift = function(val){
    let current = this.head
    let index =  new Node(val) //create new index
    if(!this.head) this.head = index // if list is empty sets index as first element
    else{
       this.head = index // sets index as first element
       this.head.next = current // appends the current value of the head to next
    }
    this.length++
    return this
}

SinglyLinkedList.prototype.shift = function(){
    let current = this.head // set initial value
    if(!this.head) return // if list is empty return undefined
    let newCurrent = this.head.next // sets the new value to the next
    this.head = newCurrent // sets the new head to the previous next index
    this.length--
    return current.val
}

SinglyLinkedList.prototype.set = function(index,newVal){
    let current = this.head
    let count = 0
    if(index === 0) return current.val = newVal // changes the value at index 0 to the new value
    while(current.next){ //loops through the node
        count++ //increment count
        if(count === index){ //checks if count variable is equal to the index parameter
            return current.next.val = newVal //if it is change the val at that iteration count to the newVal parameter
            }
            current = current.next // reset the current variable to the next in order to loop through again
        }
        return // return undefined if no condition is met
}

SinglyLinkedList.prototype.get = function(index){
    let current = this.head
    let count = 0
    if(index === 0) return current.val // if index is 0 return the head value
    while(current.next){ //loop through the node
        count++ //increment count
        if(index === count){ // check if index is equal to count at current iteration count
            return current.next.val //if so return the value at that count
        }
        current = current.next // reset current to loop through again
    }
    return null //return null if index is not found 
}

SinglyLinkedList.prototype.insert = function(index,newVal){
    this.length++
    let current = this.head
    let previous
    let node = new Node(newVal)
    let count = 0
    
    //insert at the first node if index is 0
    if(index === 0){
        this.head = node
        return this.head.next = current
    }

    while(count < index){
      previous = current // set previous to current
      count++ // increment count
      current = current.next // set current to next in order to create space to insert new node
    }
    node.next = current // set the bottom half
    previous.next = node // set the top half, new node is now in the middle
}

SinglyLinkedList.prototype.remove = function(index){
    if(index > 0 && index > this.length) return null // return null if an invalid index is entered

    let current = this.head
    let previous
    let count = 0

    if(index === 0) return this.head = current.next // if the 0 index is entered set the next value to the head
    else{
        while(count < index){
            count++
            previous = current
            current = current.next
        }

        previous.next = current.next
    }
    this.length--
}

SinglyLinkedList.prototype.reverse = function(){
    let node = this.head,
        previous,
        tmp;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;

        // reverse pointer
        node.next = previous;

        // step forward in the list
        previous = node;
        node = tmp;
    }
    return this.head = previous;
}