import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo  => {
          // console.log(project);
          return <TodoItem key={todo.website} todo={todo}/>
        });
    }
    // console.log(this.props);
    return (
      <div className="Todos">
        <h3>JSON DATA Collected </h3>
        {todoItems}
      </div>
    );
  }
}

// Todos.proptypes = {
//   todos: React.Proptypes.array
//
// }

export default Todos;
