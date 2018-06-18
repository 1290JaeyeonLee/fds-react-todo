import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import todoAPI from '../todoAPI';

export default class TodoPage extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: count++,
      //   body: 'React 공부',
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: 'Redux 공부',
      //   complete: false
      // },
    ]
  }

  async componentDidMount() {
    await this.fetchTodos();
  }

  fetchTodos = async () => {
    this.setState({
      loading: true
    })
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    });
  }

  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      };

      this.setState({
        loading: true
      });
      await todoAPI.post('/todos', newTodo);
      await this.fetchTodos();
    }
  }

  updateTodoBody = async (id, body) => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      body
    })
    await this.fetchTodos();
  }

  completeTodo = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    });
    await this.fetchTodos();
  }

  deleteTodo = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.delete(`/todos/${id}`);
    await this.fetchTodos();
  }

  render() {
    const {todos, loading} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <TodoForm onCreate={this.createTodo} />
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList
            todos={todos}
            onTodoComplete={this.completeTodo}
            onTodoDelete={this.deleteTodo}
            onTodoBodyUpdate={this.updateTodoBody}
          />
        )}
      </div>
    );
  }
}
