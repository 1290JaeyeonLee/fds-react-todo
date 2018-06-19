import React, { Component } from 'react';

export default class LoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault(); //안하면 페이지 새로고침이 된다.
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const {onLogin} = this.props;
    onLogin(username, password);
  }
  render(){ 
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>로그인 페이지</h1>
        <input type="checkbox" defaultChecked={true} />
          <label>아이디
            <input type="text" defaultValue="fds" name="username" />
          </label>
          <label>비밀번호
            <input type="password" name="password" />
          </label>
        <button>로그인</button>
      </form>
    )
  }
}