import Card from "../UI/Card";
import React from "react";
// import UserItem from "./UserItem";
import classes from "./UserList.module.css";


const UserList = (props) => {
    return (
        <Card className={classes.users}> 
            <ul>
                {props.users.map((user)=> (
                    <li key={user.id}>
                        {user.name} ({user.age} year old)
                    </li>
                ))}
                
            </ul>
        </Card>
    )
}


export default UserList;