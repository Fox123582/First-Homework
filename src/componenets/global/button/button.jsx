import React from 'react';
import styles from '../../wrapperForButtonAndInputs/styleForWrapper.module.css'
const Button = ({color = 'blue',...props}) => {
    return (
        <button {...props} className={styles.mainButton} style={{backgroundColor: color}} >
            {props.children}
        </button>
    );
};

export default Button;