class Stack 
{
    constructor() 
    {
      this.items = [];
    }

    push(element) 
    {
      this.items.push(element);
    }

    pop() 
    {
      if (this.isEmpty()) 
      {
        return "Stack is empty";
      }
      return this.items.pop();
    }

    top() 
    {
      if (this.isEmpty()) 
      {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    print() {
      return this.items.toString();
    }
  }
  
  const stack = new Stack();
  
  stack.push(5); 
  stack.push(7);
  stack.push(2);
  stack.push(1);
  
  console.log("The elements in the stack are : "+ stack.print()); 

  console.log("The top element in the stack is : "+stack.top()); 
  
  console.log("The size of the stack is : "+stack.size()); 

  console.log("The element popped out of the stack is : "+stack.pop());

  console.log("After popping out, the elements in the stack are : "+ stack.print()); 
  
  console.log("Is the stack empty ? "+ stack.isEmpty());



  