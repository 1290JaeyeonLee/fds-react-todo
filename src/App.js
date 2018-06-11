import React, { Component } from 'react'; // 설치되어있는 라이브러리모듈
import TodoList from './components/TodoList';//./ :src밑
let count = 0;
class App extends Component {
  state = { //클래스 필드 state라는 객체 만들기 
    todos : [
      {
        id: count++,
        body: 'React 공부',
        complete: true
      },
      {
        id: count++,
        body: 'Redux 공부',
        complete: false
      },
    ],
    newTodoBody:''
  }

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  }

  handleButtonClick = e => {
    if(this.state.newTodoBody){ // 빈문자열은 falsy
      const newTodo = {
        body:this.state.newTodoBody,
        complete: false,
        id: count++
      }
      this.setState({
        todos: [
          ...this.state.todos,
          newTodo
        ],
        newTodoBody: ''
      });
    }
  }

  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        };
        if(t.id === id) {
          newTodo.complete = true;
        }
        return newTodo
      })
    })  
  }

  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => (id !== t.id))
    })
  }
  render() {
    const {todos, newTodoBody} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        <TodoList 
          todos={todos} 
          handleTodoItemComplete={this.handleTodoItemComplete}
          handleTodoItemDelete={this.handleTodoItemDelete}
        />
      </div>
    );
  }
}

export default App;
