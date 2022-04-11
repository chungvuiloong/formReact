import React from "react";

const Popup = (props) => {
    return (
        <div>
            <h2>This is your input:</h2>
            <p>First name:  <span>{props.firstname}</span></p>
            <p>Last name:   <span>{props.lastname}</span></p>
            <p>Phonenumber: <span>{props.phonenumber}</span></p>
            <p>Message:     <span>{props.message}</span></p>
            <p>Role:        <span>{props.role}</span></p>
            <button onclick={props.close}>Yes, I am sure</button>
            <button onclick={props.close}>No, I don't want to post it</button>
        </div>
    );
};

export default Popup;