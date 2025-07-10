import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [length,setlength]=useState(8);
  const [num,setnum]=useState(false);
  const [char,setchar]=useState(false);
  const [pass,setpass]=useState("");

  const PasswordGenerator=useCallback(()=>{
    let str="ABCDEFGHJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz";
    let Password="";
    if(num) str+="123456789";
    if(char) str+="!@#$%^&*()";
    for (let i = 0; i < length; i++) {
      let ch=Math.floor(Math.random() * str.length+1);
      Password+=str.charAt(ch);
    }
    setpass(Password);

  },[length,num,char,setpass])

  useEffect(()=>{
    PasswordGenerator();
  },[PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text" 
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button className='outline-none bg-blue-600 text-white px-3 py-0.3 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setlength(e.target.value)}}  
          />
          <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={num}
            id="numbernput"
            onChange={()=>{setnum((prev)=>!prev)}}
             />
             <label htmlFor="numbernput">numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={num}
            id="numberinput"
            onChange={()=>{setchar((prev)=>!prev)}}
             />
             <label htmlFor="numberinput">characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
