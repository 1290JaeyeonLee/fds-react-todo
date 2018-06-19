import React from 'react';
import LoginForm from '../components/LoginForm';
import {UserConsumer} from '../contexts/UserContext';
import {PageConsumer} from '../contexts/PageContext'

export default class LoginFormContainer extends React.Component {
  render(){
    return (
      <UserConsumer>
        {({login}) =>(
          <PageConsumer>
          {({goToTodoPage}) => (
            <LoginForm onLogin={async (username, password) => {await login(username, password);
            goToTodoPage();
           }}/>
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