import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';


class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getJsonData(){

  }

  componentWillMount() {
    this.getProjects()
    this.getTodos()
    this.getJsonData();
  }


  componentDidMount() {
    this.getJsonData();
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(json => {
    //   this.setState({
    //     isLoaded: true,
    //     items: json,
    //   })
    // });

    this.getTodos();
  }

  getProjects() {
    this.setState({projects: [
      {
      id: uuid.v4(),
      title: "Business Website",
      category: "Web design"
    },
    {
      id: uuid.v4(),
      title: "Social App",
      category: "Mobile Development"
    },
    {
      id: uuid.v4(),
      title: "eCommerche Shopping Cart",
      category: "Web development"
    }
  ]});
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos:data}, function() {
          console.log('state');
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }

    })
  }


  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects test="Hello World"
        projects={this.state.projects}
        onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
