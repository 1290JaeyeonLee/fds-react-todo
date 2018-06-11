import React, { Component } from 'react'; // 설치되어있는 라이브러리모듈
import TodoList from './components/TodoList'; // ./ :src밑
import axios from 'axios';

//let count = 1;
const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

class App extends Component {
  state = { //클래스 필드 state라는 객체 만들기 
    loading: false,
    todos : [
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
    ],
    newTodoBody:''
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

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  }

  handleButtonClick = async e => {
    if(this.state.newTodoBody){
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false
      }
      this.setState({
        loading: true
      });
      await todoAPI.post('/todos/',newTodo);
      await this.fetchTodos();
      this.setState({
        newTodoBody: ''
      }); 
    }
  }

  handleTodoItemComplete = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.patch(`/todos/${id}`,{
      complete: true
    });
    await this.fetchTodos();
  }

  handleTodoItemDelete = async id => {
    this.setState({
      loading: true
    });
    await todoAPI.delete(`/todos/${id}`);
    await this.fetchTodos();
  }
  render() {
    const {todos, newTodoBody, loading} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList 
            todos={todos} 
            handleTodoItemComplete={this.handleTodoItemComplete}
            handleTodoItemDelete={this.handleTodoItemDelete}
          />
        )}
      </div>
    );
  }
}

export default App;
