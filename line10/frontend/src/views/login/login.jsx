import React from 'react'

const login = () => {
return (
    <div className='bg-white flex flex-col items-center justify-center h-full w-full p-4'>
            <div className='flex flex-col gap-4 bg-black text-white font-[montserrat] font-semibold p-4 rounded-lg'>
                    <div>Login</div>
                    <div className='flex flex-col gap-4'>
                            <div className='flex flex-col'>
                                    username
                                    <input className='border border-slate-400 rounded-lg font-light'></input>
                            </div>
                            <div className='flex flex-col'>
                                    password
                                    <input className='border border-slate-400 rounded-lg font-light'></input>
                            </div>
                            <button className='bg-green-600 rounded-lg border border-slate-400 hover:bg-green-300'>Login</button>
                    </div>
            </div>
    </div>
)
}

export default login