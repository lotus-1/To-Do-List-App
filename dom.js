// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: "", description: "", done: false},
    // { id: -2, description: 'second todo' },
    // { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

state[0].id = todoFunctions.generateId;
// state[0].description = document.getElementByClassName("box")[0].value;
console.log(state.description);
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    console.log(todo);
  var todoNode = document.createElement('li');
  container.appendChild(todoNode);
  console.log(container);
    // you will need to use addEventListener
  addTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();
  // todo.description = descriptionText;
  // todoFunctions.addTodo(state, todo.description);
  // console.log(descriptionText);
});
    // add span holding description
    this.value = addTodoForm.firstChild.value;
var newSpan = document.createElement('span');
newSpan.setAttribute('id', "mySpan");
document.getElementById('ul').appendChild(newSpan);
console.log(container);
// var newContent = document.createTextNode("value");
// var mySpan = document.getElementById('mySpan').appendChild(newContent);
 // mySpan.textContent = this.value;
// document.getElementById("mySpan").textContent = addTodoForm.value;

// this adds the text content
var addState = todoFunctions.addTodo(state, todo["description"]);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      var description = '?'; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
