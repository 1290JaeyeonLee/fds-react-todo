import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  }
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  }
  handleLoginClick = async e => {
    const {onLogin} = this.props;
    onLogin(this.state.name, this.state.password);
  }
  render(){ 
    const{
      username,
      password
    } = this.state;
    return(
      <React.Fragment>
          <label>아이디
            <input type="text" value={username} onChange={this.handleUsernameChange} />
          </label>
          <label>비밀번호
            <input type="password" value={password} onChange={this.handlePasswordChange} />
          </label>
        <button onClick={this.handleLoginClick}>로그인</button>
      </React.Fragment>
    )
  }
}