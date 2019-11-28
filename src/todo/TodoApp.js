import React from "react";
import TodoForm from "./TodoForm.js";
import TodoHeader from "./TodoHeader.js";
import TodoList from "./TodoList.js";

var todoItems = [
  { index: 1, value: "learn react", done: false },
  { index: 2, value: "Go shopping", done: false },
  { index: 3, value: "buy flowers", done: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: todoItems };
  }

  addItem = todoItem => {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  };
  removeItem = itemIndex => {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  };
  markTodoDone = itemIndex => {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  };
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoForm addItem={this.addItem} />

        <TodoList
          items={todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
      </div>
    );
  }
}

export default TodoApp;
