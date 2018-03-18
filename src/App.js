import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("consutructor");

  }

  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
    console.log("mounted");
  }

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({ //change the state of toggle to the opposite of what is the currently is
      toggle: !this.state.toggle //the value that we want to change : to what we want to change to
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text = "Hello to Praips, using props react"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.toggle &&  <p>This should show and hide</p>} 
       
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}

class Welcome extends Component{
  render() {
    return (
      <h1 className="App-title">{this.props.text}</h1>
    )

  }
}

export default App;
