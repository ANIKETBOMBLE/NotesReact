import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaNoteSticky } from "react-icons/fa6";

import './App.css'

function App() {
 const[input , setinput] = useState("")
 const[tasks , settask] = useState([]);
 
 

 
 function handelsubmit(e){
  e.preventDefault();
  if(input.trim() === "") return;
  
  
  
  const obj = {task : input.trim() , id : Date.now() ,  };
  
  console.log(obj);
  settask([...tasks , obj]);
  
  
 
 }
 

  return (
    <>
    <div className="wrapper">
  <div className="flex justify-center items-center gap-3 p-6 bg-gradient-to-r from-sky-600 via-sky-450 to-sky-400 text-white font-bold text-3xl rounded-full mt-10  shadow-xl max-w-48 ml-10">
        <FaNoteSticky className="w-10 h-10 text-white " />
        <span className="">Notes</span>
      </div>

   
      <form
        onSubmit={handelsubmit}
        className="flex flex-col items-center justify-center mt-10 gap-4 w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl border border-sky-200"
      >
        <h2 className="text-2xl font-semibold text-sky-800">Write Notes Here</h2>

        <textarea
          placeholder="Enter your tasks..."
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className="w-full h-48 border border-sky-300 placeholder:text-gray-500 text-gray-700 p-4 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />

        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-all duration-200 shadow"
        >
          Add Task
        </button>
      </form>

    
      <ul className="flex flex-wrap gap-6 justify-center mt-8 px-4">
        {tasks.map((item) => (
          <li
            key={item.id}
            className="bg-white border border-sky-200 p-6 rounded-xl shadow-md max-w-sm w-full text-gray-800"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-md font-semibold text-sky-700">
                #{item.id}
              </span>
              <span className="text-xs text-gray-500">
                {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
                
              </span>
            </div>
            <p className="text-gray-700 max-h-40 overflow-y-auto">
              {item.task}
            </p>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App


