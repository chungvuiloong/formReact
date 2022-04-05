import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import React, { Component } from "react";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    // phonenumber: "",
    // message: "",
    // role: "",
  };

  inputHandler =(e) => {
    this.setState({
      [e.target.name]: e.target.value});
  }




  render () {
    return (
      <div className="App">
        <div className="form-container">
          <input type="text"    name="firstname"   onChange={this.inputHandler}/>
          <input type="text"    name="lastname"    onChange={this.inputHandler}/>
          <input type="number"  name="phonenumber" onChange={this.inputHandler}/>
          <input type="text"    name="message"      onChange={this.inputHandler}/>
          {/* <select name="role"   onChange={this.inputHandler}>
            <option value="coder">Coder</option>
            <option value="manager">Manager</option>
            <option value="sleeper">Sleeper</option>
            <option value="mugger">Mugger</option>
          </select> */}

      
        </div>

        <Form 
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          // phonenumber={this.state.phonenumber}
          // message={this.state.message}
          // role={this.state.role}
        />
      </div>
    );
  }
};

export default App;
