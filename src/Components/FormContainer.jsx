import React, { useState } from 'react'
import formsInputs from "../store/Formsinputs"
import Selects from './Selects'
import InoutsFields from "./InputsFields"
import InputsFields from './InputsFields'

function FormContainer({handler}) {

  let [firstName,setFirstName] = useState("");
  let [lastName,SetLastName] = useState("");
  let [emai,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [schoolName,setSchoolName] = useState("");
  let [major,setMajor] = useState("");
  let [course,setCours] = useState("");
  let [check,setcheck] = useState(false);

  const sumbitHandler= (event)=>{
    event.preventDefault();
    handler(firstName,lastName,emai,password,schoolName,major,course);
    setFirstName("");
    SetLastName("");
    setEmail("");
    setPassword("");
    setSchoolName("");
    setMajor("");
    setCours("");
    setcheck(false)
  }

  return (
    <div className='h-full w-full font-popins px-2 flex flex-col gap-1 pt-1'>
        <div>
            <h1 className='text-center font-semibold text-2xl uppercase'>Registration form</h1>
        </div>

        <form onSubmit={(event)=>sumbitHandler(event)}>

          <div className='max-w-3xl m-auto bg-white border shadow-lg  p-4 py-4 flex flex-col gap-3 rounded-lg overflow-hidden'>
            <div className='grid  sm:grid-cols-2 gap-y-3 gap-x-4'>
             <InputsFields Label="FIRST NAME" type="text" holder="john" inputValue={firstName} setinputValue={setFirstName} />
             <InputsFields Label="LAST NAME" type="text" holder="doe" inputValue={lastName} setinputValue={SetLastName} />
             <InputsFields Label="EMAIL" type="email" holder="john@doe.com" inputValue={emai} setinputValue={setEmail}  styling="sm:col-start-1 sm:col-end-3"/>
             <InputsFields Label="PASSWORD" type="password" holder="Password" inputValue={password} setinputValue={setPassword} styling="sm:col-start-1 sm:col-end-3"/>
             <InputsFields Label="SCHOOL NAME" type="text" holder="ABC NAME" inputValue={schoolName}setinputValue={setSchoolName}  styling="sm:col-start-1 sm:col-end-3"/>

             <Selects label='Major' options={["Compuer Science","Engineering","Pre Medical","Arts"]} inputValue={major} setinputValue={setMajor}/>
             <Selects label="Courses Name" options={["Graphic Designing","Flutter","Mern Stack","Figma"]} inputValue={course} setinputValue={setCours}/>
            </div>

          <div className='flex gap-2'>
            <input id='agree' type="checkbox" checked={check} onChange={()=> setcheck((prev)=>!prev)} />
            <label htmlFor='agree'>I understand and agrre to <a href="#" className='underline text-blue-500'>Privacy Policy</a></label>
          </div>

          <div>
            <button className='w-full bg-blue-500 text-white py-2' >Register Yourself</button>
          </div>

         </div>
        </form>
    </div>
  )
}

export default FormContainer