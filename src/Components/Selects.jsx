import React from 'react'

function Selects({options,label,inputValue,setinputValue}) {
  return (
    <div className='w-full sm:col-start-1 sm:col-end-3'>
        <div><label className='w-full text-xs'>{label}</label><br /></div>
        <select onChange={(e)=>setinputValue(e.target.value)} value={inputValue} className='w-full px-2 border py-1 rounded-[3px] focus:outline-blue-300 placeholder:text-sm'>
            <option>--Select--</option>
            {options.map((elemen,index)=><option key={index} value={elemen} >{elemen}</option>)}
        </select>
    </div>
  )
}

export default Selects