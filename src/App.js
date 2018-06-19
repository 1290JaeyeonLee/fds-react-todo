import React from 'react';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';

import {PageProvider, PageConsumer} from './contexts/PageContext';
import {UserProvider} from './contexts/UserContext';
import {TodoProvider} from './contexts/TodoContext';

export default class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => value.page === 'login' ? (
              <LoginPage />
            ) : (
              <TodoPage />
            )}
            
          </PageConsumer>
        </UserProvider>  
      </PageProvider>
      // PageProvider 내부의 div는 
      // PageContent.js 의 Provider의 props.children으로 들어간다. 
    )
  }
}