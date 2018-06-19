import React, {Component} from 'react';
import todoAPI from '../todoAPI';

const {Provider, Consumer} = React.createContext();

// page와 관련된 '상태'와 '상태를 나타내는 함수'-> container component
class TodoProvider extends Component {
  state = {
    loading: false,
    todos: [
    ]
  }
  async componentDidMount(){
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
    }) 
  }


  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      }
      this.setState({
        loading: true
      })
      await todoAPI.post('/todos', newTodo)
      await this.fetchTodos()
    }
  };

 deleteTodo = async (id, body) => {
   this.setState({
     loading: true
   });
   await todoAPI.patch(`/todos/${id}`, {
     body
   })
   await this.fetchTodos();
 }

 updateTodoBody = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    })
    await this.fetchTodos();
  };

  completeTodo = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.delete(`todos/${id}`)
    await this.fetchTodos();
  }
  render() {
    const value = {
      todos: this.state.todos,
      loading: this.state.loading,
      fetchTodos: this.fetchTodos,
      createTodo: this.createTodo,
      deleteTodo: this.deleteTodo,
      updateTodoBody: this.updateTodoBody,
      completeTodo: this.completeTodo
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    );
  }
}

export {TodoProvider, Consumer as TodoConsumer}

