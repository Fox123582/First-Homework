import React from 'react';

function Input({elemInfo,inner = '',...props}) {
    return (
        <input {...props}></input>
    );
}

export default Input;