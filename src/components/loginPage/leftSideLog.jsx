import React, {useEffect, useState} from 'react';
import ErrorBlock from "../common/errorBlock";
import Form from "./form";

function LeftSideLog({styles,...props}) {
    let [error,setError] = useState({
        status:true,
        description:''
    })

    function drawError (){
        if (!error.status){
            return <ErrorBlock className = {styles.error}>{error.description}</ErrorBlock>
        }
        return ''
    }

    function changeError(newState){
        setError(newState)
    }


    return (
        <div {...props}>
            <h2>Secure Sign In</h2>
            <p>For current customers</p>
            {drawError()}
            <Form changeError = {changeError} className={styles.signIn} styles = {styles}></Form>
        </div>
    );
}

export default LeftSideLog;