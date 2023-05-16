import {useState} from "react";
import WrapperForInputs from "./componenets/wrapperForButtonAndInputs/wrapperForInputs";
import styles from '../src/componenets/wrapperForButtonAndInputs/styleForWrapper.module.css'
import DisplayTable from "./componenets/displayTodos/displayTable";

function App() {

    const [obj,setArray] = useState([
    ])

    const pushNewData = (newElem) =>{
        setArray([...obj,newElem])
    }

    const  changeData = (newElem)=>{
        let newArr = []
        obj.forEach((elem)=>{
            if (newElem.id === elem.id){
                newArr.push(newElem)
            } else newArr.push(elem)
        })
        setArray(newArr)
    }

    const deleteElem = (currentDeleteElem)=>{
        setArray(obj.filter((element)=> element.id !== currentDeleteElem.id))
    }


  return (
    <div  className="App">
        <div className={styles.wrapperForAllContent}>
            <h2 className={styles.tittle}> Todo application </h2>
            <WrapperForInputs pushNewData={pushNewData}></WrapperForInputs>
            {obj.length !== 0 ? <DisplayTable changeData = {changeData} deleteElem={deleteElem} allData={obj}></DisplayTable> : <div className={styles.notFound}> You dont have any tasks</div>}
        </div>

    </div>
  );
}

export default App;
