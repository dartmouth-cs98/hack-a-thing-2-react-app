import React, { Component } from 'react';


class TodoItem extends Component {

  render() {
    // console.log(this.props);
    return (
      <li className="Todo">
      {this.props.todo.website}
      </li>
    );
  }
}

// TodoItem.propTypes = {
//   todo: React.PropTypes.object
//
// }

export default TodoItem;
