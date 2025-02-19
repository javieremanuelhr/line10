import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5555/login', {email, password})
        .then(res => {
            console.log(res)
            if(res.data.Login) {
                navigate("/analytics")
            } else {
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='bg-white flex flex-col items-center justify-center h-full w-full p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-black text-white font-[montserrat] font-semibold p-4 rounded-lg'>
                <div>Login</div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        username
                        <input 
                            type='text' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='border border-slate-400 rounded-lg font-light'
                        />
                    </div>
                    <div className='flex flex-col'>
                        password
                        <input 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className='border border-slate-400 rounded-lg font-light'
                        />
                    </div>
                    <button type='submit' className='bg-green-600 rounded-lg border border-slate-400 hover:bg-green-300'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default login