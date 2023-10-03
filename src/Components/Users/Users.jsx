import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css' 
 

const Users = () => {

    const users = useLoaderData()
    // console.log(users)

     

    return (
        <div>
            <h3>Our Users {users.length} </h3>
            <p>Info of Ours</p>
            <div  className="user-container">
                {
                    users.map( userInfo => <User key={userInfo.id} userData={userInfo} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;