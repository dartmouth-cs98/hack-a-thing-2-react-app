import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import uuid from 'uuid';

class AddProject extends Component {

  constructor () {
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps =  {
    categories: ['Web Design', 'Web Development',
  'Mobile Development','Software Engineering', 'Personal', 'Other']
  }
  handleSubmit (e) {
      e.preventDefault();


    if (this.refs.title.value === '') {
      alert("Title is required");
    }
    else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
        time: "Submitted At " + Date(this.props.date)
      }}, function(){
        this.props.addProject(this.state.newProject);
      })
    }
  }
  render() {
    let categoryOptions = this.props.categories.map(category =>
    {
      return <option key={category} value={category}>
      {category}
      </option>
    });
    return (
      <div>
        <h3> Add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title </label> <br />
            <input type='text' ref='title'/>
          </div>
          <div>
            <label> Category </label> <br />
            <select  ref='category'>
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    );
  }
}

export default AddProject;
