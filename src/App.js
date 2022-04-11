import logo from './logo.svg';
import './App.css';
import View from './Components/View';
import Form from './Components/Form';
import Popup from './Components/Popup';
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
    showPopup: false,
  };

  // input handler and state
  inputHandler =(e) => {
    // this.setState({
    //   [e.target.name]: e.target.value});
    this.setState({
      inputData: {...this.state.inputData, [e.target.name]: e.target.value}
    });
  }

  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  }

  render () {
    return (
      <div className="App">
        <Form onChange={this.inputHandler} submit={this.popUpHandler}></Form>

        {/* <View 
          firstname={this.state.inputData.firstname}
          lastname={this.state.inputData.lastname}
          phonenumber={this.state.inputData.phonenumber}
          message={this.state.inputData.message}
          role={this.state.inputData.role}
        /> */}

        <View {...this.state.inputData}/>

        {this.state.showPopup && 
        (
        <Popup close={this.closeHandler}{...this.state.inputData}/>)}
        
        
      </div>
    );
  }
};

export default App;
