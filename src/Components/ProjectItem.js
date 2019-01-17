import React, { Component } from 'react';


class ProjectItem extends Component {

  deleteProject(id){
    // console.log("delete");
    this.props.onDelete(id);
  }

  render() {
    // console.log(this.props);
    return (
      <li className="Project">
      <strong>  {this.props.project.time}</strong> :{this.props.project.title}  : {this.props.project.category}
      <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

      </li>
    );
  }
}

export default ProjectItem;
