import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormContainer from './Components/FormContainer'
import Navbar from './Components/Navbar'
import UsersTables from './Components/UsersTables'

function App() {
  let [users,setUsers] = useState([]);
  let [showcompo,setshowChompo] = useState("register");

  const valuesHandler = (firstName,lastName,email,password,schoolName,major,course)=>{
    let finalUsers = [...users,{firstName,lastName,email,password,schoolName,major,course}];
    setUsers(finalUsers);
    console.log(users)
  }
  const registerHandler = ()=> {
    setshowChompo("register");
  }
  const formHandler = ()=>{
    setshowChompo("form");
  }
  
  return (
    <>
    <Navbar registerHandler={registerHandler} formHandler={formHandler} length={users.length}/>
    {
      showcompo == "register" ?
      <FormContainer handler={valuesHandler}/> :  <UsersTables users={users} /> 
    }

    </>
  )
}

export default App
