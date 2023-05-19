import React, {useState} from 'react';
import Input from "../global/input/input";
import Button from "../global/button/button";
import styles from './styleForWrapper.module.css'

function WrapperForInputs({pushNewData}) {
    const [todoListElemTittle,setElementTittle] = useState('')
    const [todoListElemDescription,setElementDescription] = useState('')
    const clickBut = ()=>{
        const newElem = {
            title: todoListElemTittle,
            description: todoListElemDescription,
        }
        pushNewData(newElem)
        setElementTittle('')
        setElementDescription('')

    }

    return (
        <div className={styles.wrapperForInputs}>
            <Input value = {todoListElemTittle} className={styles.inputToDo} onChange = {e =>setElementTittle(e.target.value)} placeholder = 'Todo tittle'></Input>
            <Input value = {todoListElemDescription} className={styles.inputToDo} onChange = {e =>setElementDescription(e.target.value)} placeholder = 'Description'></Input>
            <Button onClick = {clickBut}>Create todo</Button>
        </div>
    );
}

export default WrapperForInputs;