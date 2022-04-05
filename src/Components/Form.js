const Form  = (props) => {
    return (
        <div>
            <div>{props.firstname}</div>
            <div>{props.lastname}</div>
            <div>{props.phonenumber}</div>
            <div>{props.message}</div>
            <div>{props.role}</div>
        </div>
    );
};

export default Form;