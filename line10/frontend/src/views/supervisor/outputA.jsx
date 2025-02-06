import React from 'react'
import '../../index.css'

const OutputA = () => {
  return (
    <div className='w-full h-full font-semibold text text-center border flex flex-row'>
        <table className='bg-lime-500 w-1/8'>
            <thead>
                <tr className='bg-black'><th>Throuhput</th></tr>
            </thead>
            <tbody className='w-full'>
                <tr><td>Main</td></tr>
                <tr><td><input></input></td></tr>
                <tr><td>Coex</td></tr>
                <tr><td><input></input></td></tr>
                <tr><td>Total</td></tr>
                <tr><td><label></label></td></tr>
            </tbody>
        </table>
        <table className='w-full'>
            <thead>

            </thead>
            <tbody>
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default OutputA