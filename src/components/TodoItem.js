import React, { Component } from 'react'; 

export default class TodoItem extends Component { //모듈을 대표하는 하나의 값
  // 실제로 사용자에게 UI를 제공하는 컴포넌트
  handleBodyClick = e => {
    const newBody = prompt('새 내용을 입력하세요.');
    if(newBody){
      const {id, onBodyUpdate} = this.props;
      onBodyUpdate(id, newBody);
    }
  }
  render(){
    const {
      id,
      body,
      complete,
      onComplete,
      onDelete
    } = this.props;
    return(
      <li className={complete ? 'complete' : ''} key={id}>
        <span onClick={this.handleBodyClick}>{body}</span>
        <button onClick={e => {
          onComplete(id);
        }}>완료</button>

        <button onClick={e => {
          onDelete(id);          
        }}>삭제</button>
      </li>
    )
  }
}
