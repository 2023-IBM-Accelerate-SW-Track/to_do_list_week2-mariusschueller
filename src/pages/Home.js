import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    const exists = this.state.todos.find((t) => t.title === todo.title);
    if (exists) {
      return; // If the todo already exists, do nothing and return
    }

    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
