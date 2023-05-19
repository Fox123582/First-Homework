import React, {useEffect, useState} from 'react';
import Input from "../../global/input/input";
import Button from "../../global/button/button";
import styles from '../styleForTable.module.css'
import API from "../../../services/api";
function DisplayArray({changeInputCheckbox,changeData,deleteElem,elem,...props}) {

    const [changeInputState,setInputState] = useState({
        buttonText: 'Change',
        disabled: true
    })
    const [status,setStatus] = useState({

    })
    useEffect(()=>{
        setStatusCheckbox()
    },[])

    function setStatusCheckbox () {
        if (elem.completed){
            setStatus({
                statusState:'Completed',
                butColor:'green',
                completed: elem.completed,
            })
        } else {
            setStatus({
                statusState:'Pending',
                butColor:'red',
                completed: elem.completed
            })
        }
    }

    const [newElemTitle,setNewElemTitle] = useState(elem.title)
    const [newElemDescription,setNewElemDescription] = useState(elem.description)

    function editData (){
        const newElement = {
            id:elem.id,
            title: newElemTitle,
            description: newElemDescription,
            completed: elem.completed
        }
        changeData(newElement)
    }
    function newObjStatus (){
        const newItem = JSON.parse(JSON.stringify(status))
        if(newItem.statusState==='Pending'){
            newItem.statusState = 'Completed'
            newItem.butColor = 'green'
            newItem.completed = true
        } else {
            newItem.statusState = 'Pending'
            newItem.butColor = 'red'
            newItem.completed = false
        }
        setStatus(newItem)
        const newElement = {
            id:elem.id,
            title: newElemTitle,
            description: newElemDescription,
            completed:newItem.completed
        }
        API.updateStatus(newElement).then(r => changeInputCheckbox(r))
    }
    const deleteCurrentElement = ()=>{
        deleteElem(elem)
    }
    function changeClick (){
        if(changeInputState.disabled === true){
            setInputState({
                buttonText: 'Save',
                disabled: false
            })
        } else {
            setInputState({
                buttonText: 'Change',
                disabled: true
            })
            editData()
        }

    }
    return (
        <tr {...props}>
            <td><Input defaultChecked= {status.completed} onClick = {newObjStatus} type ={'checkbox'}></Input></td>
            <td><Input onChange = {e => setNewElemTitle(e.target.value) } type={'text'} disabled = {changeInputState.disabled} value = {newElemTitle}></Input></td>
            <td><Input onChange = {e => setNewElemDescription(e.target.value) } type={'text'} disabled = {changeInputState.disabled} value = {newElemDescription} ></Input></td>
            <td><Button color={status.butColor}>{status.statusState}</Button></td>
            <td><Button onClick = {changeClick} >{changeInputState.buttonText}</Button> <Button onClick = {deleteCurrentElement} color={'red'}>Delete</Button></td>
        </tr>
    );
}

export default DisplayArray;