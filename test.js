var test = require('tape');
var logic = require('./logic');

var testTodos = []
var newTodoTest = {
  description: "Add to do",
  done: false
}

var copyTodoTest = [
  {id: 1,
  description: "Add to do",
  done: false
}]

test('Testing Tape', function(t) {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('Leaves the original array unchanged', function(t) {
  var actual = testTodos === logic.cloneArrayOfObjects(testTodos);
  var expected = false;
  t.equal(actual, expected, 'Return array is a copy of original array');
  t.end();
});

test('Testing addTodo funcion', function(t){
  var actual = logic.addTodo(testTodos, newTodoTest);
  var expected = [
    {id: 1,
    description: "Add to do",
    done: false
  }
]
  t.deepEqual(actual, expected, 'New todo has been added to the todo array');
  t.end();
});

test('Testing deleteTodo function', function(t) {
  var actual = logic.deleteTodo(copyTodoTest, 1);
  var expected = [];
  t.deepEqual(actual, expected, 'Return an array that does not contain any todo with an id of idToDelete');
  t.end();
});

test('Testing markTodo function', function(t) {
  var actual = logic.markTodo(copyTodoTest, 1);
  var expected = [
    {id: 1,
    description: "Add to do",
    done: true
  }
];
  t.deepEqual(actual, expected, 'Return the same array with the element with the id: idToMark with its done value true');
  t.end();
});
