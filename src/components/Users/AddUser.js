import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';



const AddUser = (props) => {
    const [ enteredUsername, setEnteredUsername] = useState('');
    const [ enteredAge, setEnteredAge] = useState('');
    const [ error, setError ] = useState();


    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            // 밑에까지 내려가지 않고 그대로 끝내버린다.
            // trim()을 쓰면 문자열 앞뒤 공백을 없애준다.
            setError({
                title: "Invalid input",
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if(+enteredAge < 1) {
            // 문자열앞에 +를 쓰면 숫자형이 된다.
            setError({
                title: "Invalid age",
                message: 'Please enter a valid age ( > 0 )'
            })
            return;
        }

        props.onAddUsers(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const onErrorHandler = () => {
        // 에러 모달창의 확인 버튼을 누르면 에러가 null이 되어야 모달창이 닫힘
        setError(null);
    }


    return (
        <div>
            {/* error가 true일때만 모달창 띄움*/}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" className="labels">Username</label>
                    <input 
                    type="text" 
                    id="username" 
                    onChange={usernameHandler}
                    value={enteredUsername}/>
                    <label htmlFor="userage" className="labels">Age (Years)</label>
                    <input 
                    type="number" 
                    id="userage" 
                    onChange={ageHandler}
                    value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
    </div>
    )
}

export default AddUser;