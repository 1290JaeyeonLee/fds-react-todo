import React from 'react';
import {UserConsumer} from '../contexts/UserContext';
import {PageConsumer} from '../contexts/PageContext'

export default class LogoutButtonContainer extends React.Component {
  render(){
    return (
      <UserConsumer>
        {({logout}) =>(
          <PageConsumer>
          {({goToLoginPage}) => (
            <button onClick={e => {
              logout();
              goToLoginPage();
            }}>로그아웃</button>
          )}
          </PageConsumer>
        )}
      </UserConsumer>
          // <LoginForm onLogin={(username, password) => {
          //   console.log(username, password)
          // }
          // />
          // 인터페이스
          // 로그인폼의 사용법은 onLogin에 username과 password를 넘겨주는 것이다.

    )
  }
}