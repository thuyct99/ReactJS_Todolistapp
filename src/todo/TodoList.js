import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}
export default TodoList;
