import React from 'react'
import formsInputs from '../store/Formsinputs'

function InputsFields({Label,type,holder,styling,inputValue,setinputValue}) {

  return (
    <>
      <div  className={`w-full ${styling}`}>
            <div><label  className='w-full text-xs'>{Label}</label><br /></div>
            <div>
              <input required value={inputValue} onChange={(e)=>setinputValue(e.target.value)} type={type} placeholder={holder}  className='w-full px-2 rounded-[3px] border py-1 focus:outline-blue-300 placeholder:text-sm'/>
              </div>
      </div>
    </>
  )
}

export default InputsFields