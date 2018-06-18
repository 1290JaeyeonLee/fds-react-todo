import React from 'react';

export default class Box extends React.Component {
  render(){
    const value = {
      a:1,
      b:2
    }
    return (
      <div className="box">
      {this.props.children} 
      {this.props.children(value)}
      </div>
    )
  }
}
// childeren은 다른 내용을 포함하는 컴포넌트를 만들 때 쓴다.


<Box>
  <div>
    박스
  </div>
  <div>
    !!
  </div>
</Box>