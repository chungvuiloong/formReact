import React from "react";

const Form = (props) => {
    return (
        <form onChange={props.onChange} className="inputContainer">
            <div>First name <input type="text"    name="firstname" /></div>
            <div>Last name <input type="text"    name="lastname"/></div>
            <div>Phone number<input type="number"  name="phonenumber"/></div>
            <div>Message<textarea type="text"    name="message"/></div>
            <div>Role 
                <select name="role">
                <option value="Coder">Coder</option>
                <option value="Manager">Manager</option>
                <option value="Sleeper">Sleeper</option>
                <option value="Mugger">Mugger</option>
                </select>
            </div>      
            <button type="button">Submit</button>
      </form>
    )
}

export default Form;