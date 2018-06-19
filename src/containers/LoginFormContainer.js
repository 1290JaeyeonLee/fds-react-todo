import React from 'react';
import LoginForm from '../components/LoginForm';
import {UserConsumer} from '../contexts/UserContext';
import {PageConsumer} from '../contexts/PageContext';
import OnMount from '../components/OnMount';
export default class LoginFormContainer extends React.Component {
  render(){
    return (
      <UserConsumer>
        {({login}) =>(
          <PageConsumer>
          {({goToTodoPage}) => (
            <React.Fragment>
              <LoginForm onLogin={async (username, password) => {await login(username, password);
              goToTodoPage();
              }}/>
              localStorage.getItem('token') && <OnMount onMount={goToTodoPage}/>
            </React.Fragment>
          )}
          </PageConsumer>
        )}
      </UserConsumer>
    )
  }
}