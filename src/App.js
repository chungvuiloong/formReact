import logo from './logo.svg';
import './App.css';
import View from './Components/View';
import Form from './Components/Form';
import React, { Component } from "react";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
  };

  inputHandler =(e) => {
    this.setState({
      [e.target.name]: e.target.value});
  }

  submitHandler = () => {
    console.log("Pressed submit");
  }

  render () {
    return (
      <div className="App">
        <Form></Form>
        <View 
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
        />
        
      </div>
    );
  }
};

export default App;
