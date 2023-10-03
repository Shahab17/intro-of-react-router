import {   useLoaderData } from "react-router-dom";

 

const UserDetails = () => {
    const user = useLoaderData()
    const {name, website} = user;

    return (
        <div>
            <h3>show about user details: {name} </h3>
            <p >Visit: {website} </p>
        </div>
    );
};

export default UserDetails;