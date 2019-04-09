var test = require('tape');
var logic = require('./logic');

var testTodos = []
var newTodoTest = {
  description: "Add to do",
  done: false
}

test('Testing Tape', function(t) {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('Leaves the original array unchanged', function(t) {
  var actual = testTodos === logic.addTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, 'Return array is a copy of original array');
  t.end();
});


test('Testing addTodo funcion', function(t){
  var actual = logic.addTodo(testTodos, newTodoTest);
  var expected = [
    {id: 2,
    description: "Add to do",
    done: false
  }
  ]
  t.deepEqual(actual, expected, 'New todo has been added to the todo array');
  t.end();
});
