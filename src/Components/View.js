import classes from './View.module.css';

const View  = (props) => {
    return (
        <div className={classes.viewContainer}>
            <h2>This is your input:</h2>
            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Phonenumber: {props.phonenumber}</p>
            <p>Message: {props.message}</p>
            <p>Role: {props.role}</p>
        </div>
    );
};

export default View;