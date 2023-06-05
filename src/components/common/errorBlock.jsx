import React from 'react';


function ErrorBlock(props) {
    return (
        <div {...props}>
            <p>{props.children}</p>
        </div>
    );
}

export default ErrorBlock;