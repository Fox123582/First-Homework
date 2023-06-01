import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import LogIn from "./components/loginPage/logIn";
import preventStyles from './globalStyles/preventstyles.css'
import MainPage from "./components/mainPage/mainPage";
import AppContext from "./context/appContext";
import {useState} from "react";
import localStorage from "./localStorage";

function App() {
    let [isExist,setIsExist] = useState(localStorage.getFromLocalstorage())

    function changeState(data){
        setIsExist(data)
    }

  return (
    <div className="App">
        <AppContext.Provider value ={{changeState}}>
        <Header person = {isExist}></Header>
        <Routes>
            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={''} element={<MainPage/>}/>
        </Routes>
        </AppContext.Provider>
    </div>
  );
}

export default App;
