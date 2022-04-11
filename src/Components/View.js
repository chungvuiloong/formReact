import React from "react";
import style from './View.module.css';

const View  = (props) => {
    return (
        <div className={style.viewContainer}>
            <h2>This is your input:</h2>
            <p>First name:  <span>{props.firstname}</span></p>
            <p>Last name:   <span>{props.lastname}</span></p>
            <p>Phonenumber: <span>{props.phonenumber}</span></p>
            <p>Message:     <span>{props.message}</span></p>
            <p>Role:        <span>{props.role}</span></p>
        </div>
    );
};

export default View;