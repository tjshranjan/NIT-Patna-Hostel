import axios from 'axios'
import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'

const Application = () => {
    const location = useLocation()
    const arr = location.pathname.split('/')
    const roll = arr[arr.length-2]
    const [letter,setLetter] = useState('')

    const handleFileApplication = async(e) =>{
        try {
            await axios.post('http://localhost:5000/application',{
                roll : roll,
                letter : letter
            })
        } 
        catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <h4>Only important application allowed</h4>
        <textarea rows={20} cols={100} value={letter} onChange={e=>setLetter(e.target.value)}/>
        <button onClick={e=>{handleFileApplication(e); setLetter('')}}>File Application</button>
    </>
  )
}

export default Application