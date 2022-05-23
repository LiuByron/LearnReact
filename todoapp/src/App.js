import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id:1, content: '买菜'},
      {id:2, content: '打扫卫生'},
      {id:3, content: '阅读书籍'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }
  addTodo = (todo) => {
    todo.id = Math.random().toString(16);
    const _todos = [...this.state.todos, todo];
    this.setState({ todos:_todos });
  }
  render() {
    return (
      <div className="todo-app container">
        <h3 className="center blue-text">任务列表</h3>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
