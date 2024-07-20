import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [data, setdata] = useState([]);

  const getData =async()=>{
    const mainData= await axios.get('https://mern-felix-ps-backend.onrender.com/movies')
    setdata(mainData.data)
  }

  useEffect(()=>{
      getData()
  },[])
  return (
   <>
   <div className='text-center'>
   <h1 className="text-3xl text-center text-white bg-gray-500 italic p-2 ">This is Movies Page</h1>

   <div className=" w-[100vw] flex justify-center ">
   {
    data.map((val,index)=>{
        return(  
        <>
            <div className="w-[100vw] flex justify-center">         
        
              <div className="w-60 h-[400px] border  m-5 rounded-lg hover:shadow-xl bg-white hover:border-2 solid">
                
                  <img src={val.cover} className="rounded-t-lg w-[100%] h-[60%]"  alt={val.title} />
                  <div className="p-3">
                  <h1 className="text-lg text-red-900 text-center">{val.title}</h1>
                <br /> <br />
                  <a href={val.link} className="bg-black rounded-lg text-white w-20 h-20 border p-2 hover:drop-shadow-xl hover:bg-gray-500 ">Watch Now</a>
                  </div>       
              </div>     
            </div>
      </>
        )
    })
   }
   </div>
   </div>
   </>
  )
}

export default App
