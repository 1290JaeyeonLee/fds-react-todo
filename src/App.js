  import React from 'react';
  import {BrowserRouter, Route, Redirect} from 'react-router-dom';
  import TodoPage from './pages/TodoPage';
  import LoginPage from './pages/LoginPage';
  import {UserProvider} from './contexts/UserContext';

  export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <UserProvider>
            <Route path="/login" component={LoginPage}/>
            <Route path="/todo" component={TodoPage}/>
            <Route exact path="/" component={Home}/>
          </UserProvider>
        </BrowserRouter>  
      )
    }
  }
  const Home = () => ( 
    //함수형 컴포넌트
    //const Home = (props) => ( // props생략
    // 괄호 안에는 표현식을 써야한다.
    localStorage.getItem('token') ? (
      <Redirect to="/todo" />
     ) : (
      <Redirect to="/login" />
     )
  )
  