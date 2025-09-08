# emergency-hotline
A PH assignment,

Questions:

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById: It returns a single element, where ID is unique for every element, so it is very fast.
getElementsByClassName: There can be multiple element using same class name, so it returns multiple elements lively, but it is slower than getelementbyid.
querySelector: It returns the first element that matches the specified CSS selector.
querySelectorAll: It returns all elements that matches the specified CSS selector. It is an array. 

How do you create and insert a new element into the DOM?
Ans:
const container = document.getElementById('container'); (this is the parent div)
const newelement= document.createElement('div'); (new element)
newelement.innerHTML='<p>Hello World</p>';
container.appendChild(newelement); (inserting)



What is Event Bubbling and how does it work?
Ans:
document.getElementById("child").addEventListener("click", function() {
  console.log("Child has clicked");
});
then, it goes to the parental element and checks if there is any event listener. If there is, it will execute the function. It will continue to root and function an event like bubbling.


What is Event Delegation in JavaScript? Why is it useful?
Ans:
Here, we add an event listener only to the parent element. It will execute the function when any of its child element is clicked. That is called. Event Delegation.

It helps to save memory, also manage events more efficiently.

What is the difference between preventDefault() and stopPropagation() methods?
Ans:
Preventdefault() stops the default or normal behavior of an element.
StopPropagation() stops the bubbling of an event.