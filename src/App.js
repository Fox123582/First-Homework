import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import LogIn from "./components/loginPage/logIn";
import preventStyles from './common/commonStyles/preventstyles.css'
import MainPage from "./components/mainPage/mainPage";
import AppContext from "./context/appContext";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPerson} from "./store/userSlice";
import local from './services/localStorage'

function App() {

    const dispatch = useDispatch()
    const person = useSelector(state=>state.userSlice)

    useEffect(()=>{
        dispatch(setPerson(local.getFromLocalstorage()))
    },[])

  return (
    <div className="App">

        <Header person = {person}></Header>
        <Routes>
            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={''} element={<MainPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
