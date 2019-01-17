import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
      this.setState({projects: [
        {
        title: "Business Website",
        category: "Web design"
      },
      {
        title: "Social App",
        category: "Mobile Development"
      },
      {
        title: "eCommerche Shopping Cart",
        category: "Web development"
      }
    ]});
  }

  render() {
    return (
      <div className="App">
        <AddProject/>
        <Projects test="Hello World"
        projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
