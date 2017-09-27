import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm.js';
import ToDoList from './ToDoList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['clean bedroom', 'drink milk', 'sleep']
    }
  }


  addNewTodo(todo) {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <ToDoForm addNewTodoFunc={this.addNewTodo.bind(this)} />
        <ToDoList todo_data={this.state.todos} />
      </div>
    );
  }
}

export default App;
