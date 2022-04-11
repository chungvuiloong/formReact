import React from "react";

const Form = (props) => {
    return (

        /// i put the onchange in form. Thus all will change accordingly.
        <form onChange={props.onChange} className="inputContainer">
            <label htmlFor="firstname">First name </label>
            <input type="text"    name="firstname" id="firstname" required />

            <label htmlFor="lastname">Last name </label>
            <input type="text"    name="lastname" id="lastname" required />

            <label htmlFor="phonenumber">Phone number</label>
            <input type="number"  name="phonenumber" id="phonenumber" required/>

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" id="message" required/>

            <label>Role </label>
            <select name="role" id="role">
                    <option value="Coder">Coder</option>
                    <option value="Manager">Manager</option>
                    <option value="Sleeper">Sleeper</option>
                    <option value="Mugger">Mugger</option>
                </select>      
            <button type="button">Submit</button>
            <input type="submit" name="submit" id="submit"/>
      </form>
    )
}

export default Form;