import {useEffect, useState} from "react";
import WrapperForInputs from "./componenets/wrapperForButtonAndInputs/wrapperForInputs";
import styles from '../src/componenets/wrapperForButtonAndInputs/styleForWrapper.module.css'
import DisplayTable from "./componenets/displayTodos/displayTable";
import API from "./services/api";
import WrapperForCategoryButtons from "./componenets/wrapperForCategoryButtons/wrapperForCategoryButtons";

function App() {

    const [toDisplay,setToDisplay] = useState([])
    const [allData,setAllData] = useState([])
    const [filter,setFilter] = useState('All')

    const pushNewData = (newElem) =>{
        API.createNewTask(newElem).then(res =>{
            setAllData([...allData,res])
        })
    }

    useEffect(()=>{
        API.getTodos().then(data => setAllData(data))

    },[])
    useEffect(()=>{

        if (filter === 'Completed'){
            setToDisplay(allData.filter(el => el.completed))
        } else if(filter === 'Pending'){
            setToDisplay(allData.filter(el => !el.completed))
        } else {
            setToDisplay(allData)
        }

    },[filter,allData])
    function changeInputCheckbox(newElem){
        let arr = []
        allData.forEach(el => {
            if (newElem.id === el.id ){
                arr.push(newElem)
            } else {
                arr.push(el)
            }
        })
        setAllData(arr)
    }

    const  changeData = (newElem)=>{
        API.updateInfo(newElem).then(r => console.log(r))
        let newArr = []
        allData.forEach((elem)=>{
            if (newElem.id === elem.id){
                newArr.push(newElem)
            } else newArr.push(elem)
        })
        setAllData(newArr)
    }

    const deleteElem = (currentDeleteElem)=>{
        API.deleteElement(currentDeleteElem).then(res => setAllData(allData.filter((element)=> element.id !== res.id)))

    }

    function changeFilter(e){
        setFilter(e.target.innerText)
    }

  return (
    <div  className="App">
        <div className={styles.wrapperForAllContent}>
            <h2 className={styles.tittle}> Todo application </h2>
            <WrapperForInputs pushNewData={pushNewData}></WrapperForInputs>
            <WrapperForCategoryButtons changeFilter={changeFilter}></WrapperForCategoryButtons>
            {allData  !== undefined ? <DisplayTable changeInputCheckbox = {changeInputCheckbox} changeData = {changeData} deleteElem={deleteElem} allData={toDisplay}></DisplayTable> : <div className={styles.notFound}> You dont have any tasks</div>}
        </div>

    </div>
  );
}

export default App;
