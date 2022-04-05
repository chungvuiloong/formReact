import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import React, { Component } from "react";
// import classes from './Components/Form.module.css';

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

  // removeHandler = (name)=> {
  //   const updatedArray = this.state.animals.filter((animal) => animal.name !== name);
  //   this.setState({
  //     animals: updatedArray,
  //   });
  //  };

  submitHandler = () => {
    console.log("Pressed submit");

  }

  // let className = '';

  // if (this.state.counter % 2 == 0) {
  //   className = classes.green;
  // } else {
  //   className = classes.blue;
  // };



  render () {
    return (
      <div className="App">
        <div className="inputContainer">
          <div>First name <input type="text"    name="firstname"   onChange={this.inputHandler}/></div>
          <div>Last name <input type="text"    name="lastname"    onChange={this.inputHandler}/></div>
          <div>Phone number<input type="number"  name="phonenumber" onChange={this.inputHandler}/></div>
          <div>Message<textarea type="text"    name="message"      onChange={this.inputHandler}/></div>
          <div>Role 
              <select name="role"   onChange={this.inputHandler}>
                <option value="Coder">Coder</option>
                <option value="Manager">Manager</option>
                <option value="Sleeper">Sleeper</option>
                <option value="Mugger">Mugger</option>
              </select>
          </div>      
          <button type="button" onClick={this.submitHandler}>Submit</button> 
        </div>

        <Form 
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
