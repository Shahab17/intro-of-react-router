import { Link } from "react-router-dom";

 

const User = ({userData}) => {
    const {id, name, email, phone}= userData;
    const userStyle = {
        border: '1px solid gray',
        padding: '15px',
        margin: '20px',
        borderRadius: '12px'
    }
    return (
        <div style={userStyle}>
            <h3> {name} </h3>
            <h6> {email} </h6>
            <p> {phone} </p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;