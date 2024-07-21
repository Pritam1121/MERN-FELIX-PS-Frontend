import React,{ useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App1() {
  const [data, setdata] = useState([]);

  const getData =async()=>{
    const mainData= await axios.get(import.meta.env.VITE_LINK2)
    setdata(mainData.data)
  }

  useEffect(()=>{
      getData()
  },[])


    
  return (
   <>
   <div className='text-3xl text-center text-white bg-gray-500 italic p-2'>This is Data Table</div>

   <table className='border-2	border-neutral-400	 table-fixed	w-[100%]'>
          <thead className='bg-gray-300 '>
              <tr className='grid-cols-5 divide-x'>
                <th  className='w-[10%]'>Sr.No</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Phone No</th>
                <th>Address</th>

              </tr>
            </thead>

            <tbody className='text-center'>

               {
              data.map((val,index)=>{
                  return(  
                    
                  <tr  key={index} className='border border-neutral-400 grid-cols-5 divide-x'>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.phone}</td>
                      <td>{val.address.street},{val.address.suite}</td>
                      <></>
                  </tr>
                    
                      )
                  })
                }  
                </tbody>
   </table>
   </>
  )
}

export default App1
