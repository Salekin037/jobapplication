Answer question no-1:
getElementById() is select one element by ID, getElementsByClassName() is select all elements with a class, querySelector() is the first element matching a CSS selector and 
querySelectorAll() is select all elements matching a CSS selector.

Answer question no-2: At first, I use createElement() to create a new element. Then, I add content using textContent, innerText, or innerHTML. I insert it into the DOM using append(), appendChild().

Answer question no-3: The process known as event bubbling occurs when an event begins with the target element and proceeds up via its parent elements in the DOM. 
The clicked element is the first to be affected by the event. After that, it "bubbles up" to its parent. The grandparent comes next. It keeps going till it gets to the document.

Answer question no-4: Attach the event listener to a parent element to handle events for its child elements. It is useful because it improves performance and easier to manage

Answer question no-5: preventDefault() is prevents the default behavior of an element. On the other hand stopPropagation() is stops the event from bubbling to parent elements.
