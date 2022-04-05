import classes from './Form.module.css';

const Form  = (props) => {
    return (
        <div className={classes.formContainer}>
            <div>First name: {props.firstname}</div>
            <div>Last name: {props.lastname}</div>
            <div>Phonenumber: {props.phonenumber}</div>
            <div>Message: {props.message}</div>
            <div>Role: {props.role}</div>
        </div>
    );
};

export default Form;