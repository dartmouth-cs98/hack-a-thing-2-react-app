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
        time: getDateTime()
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
        <h3> Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input type='text' placeholder="Enter title" ref='title'/>
          </div>
          <div>
            <select  ref='category'>
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input id='submit' type="submit" value="Submit"/>
        </form>

      </div>
    );
  }
}

//courtesy of https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js
function getDateTime() {

    var date = new Date();

    var year = date.getFullYear();

      var month = date.getMonth() + 1;
      month = (month < 10 ? "0" : "") + month;

      var day  = date.getDate();
      day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day;

}

export default AddProject;
