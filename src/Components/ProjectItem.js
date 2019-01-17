import React, { Component } from 'react';


class ProjectItem extends Component {

  deleteProject(id){
    // console.log("delete");
    this.props.onDelete(id);
  }

  render() {
    // console.log(this.props);
    return (
      <tr className="Project">
      <td> {this.props.project.title} </td>
      <td> {this.props.project.category} </td>
      <td> {this.props.project.time} </td>
      <td> <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a> </td>
      </tr>
    );
  }
}

export default ProjectItem;
