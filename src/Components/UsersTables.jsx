import React from 'react'

function UsersTables({users}) {
  return (
    <div className='p-2 overflow-auto'>
        
        <table className='w-full border-black border text-center  border-collapse'>
            <thead>
            <tr>
                <th className='border border-black p-2' colSpan={6}>Users' Data</th>
            </tr>
            <tr className='bg-[#f3f2f2]'>
               <th className='border border-black whitespace-nowrap p-2'>First Name</th>
               <th className='border border-black whitespace-nowrap p-2'>Last Name</th>
               <th className='border border-black whitespace-nowrap p-2'>Email</th>
               <th className='border border-black whitespace-nowrap p-2'>School Name</th>
               <th className='border border-black whitespace-nowrap p-2'>Major</th>
               <th className='border border-black whitespace-nowrap p-2'>Course</th>
            </tr>
            </thead>
            <tbody>
            {
                users.length == 0 ? 
                <tr>
                    <td colSpan={6} className='py-10'>No Data</td>
                </tr> 
                :
                users.map((e,i)=>{
                    return(
                      <tr className='' key={i}>
                      <td className='border border-black whitespace-nowrap p-2'>{e.firstName}</td>
                      <td className='border border-black whitespace-nowrap P-2'>{e.lastName}</td>
                      <td className='border border-black whitespace-nowrap p-2'>{e.email.toLowerCase()}</td>
                      <td className='border border-black whitespace-nowrap p-2'>{e.schoolName}</td>
                      <td className='border border-black whitespace-nowrap p-2'>{e.major}</td>
                      <td className='border border-black whitespace-nowrap p-2'>{e.course}</td>
                      </tr>

                    )
                })
            }
            </tbody>
    </table>
    </div>

  )
}

export default UsersTables