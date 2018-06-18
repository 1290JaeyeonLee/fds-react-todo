import React from 'react';
import todoAPI from '../todoAPI';

const {Provider, Consumer} = React.createContext();

// 상태, 외부세계와 연결 작성
class UserProvider extends React.Component {
  login = async (username, password) => {
    try {
      // 로그인 요청
      const res = await todoAPI.post('/users/login',{
        username : username,
        password: password
      })
        // localStorage에 토큰 저장
        localStorage.setItem('token', res.data.token);
    
        // 페이지 전환
        this.props.onLogin(); // 위쪽에서 함수를 주고, prop으로 받기
    } catch(e) {
      if(e.response) {
        if(e.response.status === 400) {
          alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
        }
      }
    }
  }
  render(){
    const value = {
      login: this.login
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {UserProvider, Consumer as UserConsumer};