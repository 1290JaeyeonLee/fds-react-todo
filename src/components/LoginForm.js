import React, { Component } from 'react';

export default class LoginForm extends Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  handleLoginClick = async e => {
    const {onLogin} = this.props;
    onLogin(this.usernameRef.current.value, this.passwordRef.current.value);
  }
  render(){ 
    const {onLogin} = this.props;
    return(
      <React.Fragment>
          <label>아이디
            <input type="text" ref={this.usernameRef} />
          </label>
          <label>비밀번호
            <input type="password" ref={this.passwordRef} />
          </label>
        <button onClick={this.handleLoginClick}>로그인</button>
      </React.Fragment>
    )
  }
}