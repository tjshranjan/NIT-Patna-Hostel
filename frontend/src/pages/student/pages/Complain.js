import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ComplainCard from '../components/ComplainCard'

const Complain = () => {
    const location = useLocation()
    const arr = location.pathname.split('/')
    const roll = arr[arr.length-2]
    const [msg,setMsg] = useState('')
    const [complains,setComplains] = useState([])
    const [signal,setSignal] = useState(false)
    const handleFileComplain = async(e) =>{
        try {
            await axios.post('http://localhost:5000/complain',{
                roll : roll,
                msg  : msg
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        const helper = async()=>{
            const res = await axios.get('http://localhost:5000/complain/'+roll)
            setComplains(res.data)
        }
        helper()
    },[signal])
    useEffect(()=>{
        console.log(complains)
    },[complains])
    const handleDelte = async(id) =>{
        try {
            const res = await axios.delete(`http://localhost:5000/complain/`+id)
            if(res.status === 200){
                console.log(`deleted successfully`)
                setSignal(prev=>!prev)
            }
        } 
        catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <h4>File in as brief as possible</h4>
        <textarea value={msg} onChange={e=>setMsg(e.target.value)}/>
        <button onClick={e=>{handleFileComplain(e); setMsg(''); setSignal(prev=>!prev)}}>Register Complain</button>
        <h3>Complains</h3>
        {complains.map((complain,index)=>(
            <ComplainCard key={index} msg={complain.msg} id={complain._id} handleDelte={handleDelte}/>
        ))}
    </>
  )
}

export default Complain