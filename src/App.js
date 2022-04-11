import logo from './logo.svg';
import './App.css';
import View from './Components/View';
import Form from './Components/Form';
import React, { Component } from "react";

class App extends Component {
  state = {
    // firstname: "",
    // lastname: "",
    // phonenumber: "",
    // message: "",
    // role: "",

    inputData:{
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    },
  };

  // input handler and state
  inputHandler =(e) => {
    // this.setState({
    //   [e.target.name]: e.target.value});
    this.setState({
      inputData: {...this.state.inputData, [e.target.name]: e.target.value}
    });
  }

  submitHandler = () => {
    console.log("Pressed submit");
  }

  render () {
    return (
      <div className="App">
        <Form onChange={this.inputHandler}></Form>
        {/* <View 
          firstname={this.state.inputData.firstname}
          lastname={this.state.inputData.lastname}
          phonenumber={this.state.inputData.phonenumber}
          message={this.state.inputData.message}
          role={this.state.inputData.role}
        /> */}

        <View {...this.state.inputData}/>
        
      </div>
    );
  }
};

export default App;
