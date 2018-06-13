import React from 'react';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

export default class App extends React.Component {
  state = {
    page: 'login'
  }
  // 1. 상태가 있는 쪽에서 상태를 바꾸는 함수를 만든다. ( 상태에 따라 다르게 만들어주는 페이지는 구조상 App에서 밖에 할 수 없다.)
  // 2. render로 함수를 내려준다.
  // 3. 로그인 페이지에서 함수를 받아서 쓴다. (위에서 받아온 것이니 props로 불러오기)

  // goToTodoPage = () => {}
  handleLoginBtn = e => {
    this.setState({
      page: 'todo'
    });
  }
  
  render() {
    const {
      page
    } = this.state;
    return (
      <div>
        {page === 'login' ? (
          <LoginPage onLogin={this.handleLoginBtn}/>
        ) : (
          <TodoPage />
        )}
      </div>
    )
  }
}