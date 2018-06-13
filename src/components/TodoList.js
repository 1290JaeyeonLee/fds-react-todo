import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component{
  render(){
    const {
      todos,
      onTodoComplete,
      onTodoDelete,
      onTodoBodyUpdate
     } = this.props;
    return(
      <ul>
      {
        todos.map(todo => (
          <TodoItem 
            {...todo}
            onComplete={onTodoComplete} 
            onDelete={onTodoDelete}
            onBodyUpdate={onTodoBodyUpdate}
          />
        ))
      }
      </ul>
    )
  }
}
