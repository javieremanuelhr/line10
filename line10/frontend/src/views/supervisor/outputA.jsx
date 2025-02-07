import React from 'react'
import '../../index.css'

const OutputA = () => {
  return (
    <div className='w-1/3 h-full font-semibold text text-center border flex flex-col'>
        <table className='bg-lime-500 w-full'>
            <thead>
                <tr className='bg-black'>
                    <th>Throuhput</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Main</td>
                    <td className='w-1/2'><input className='w-full'></input></td>
                </tr>
                <tr>
                    <td>Coex</td>
                    <td className='w-1/2'><input className='w-full'></input></td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td className='w-1/2'><input className='w-full'></input></td>
                </tr>
            </tbody>
        </table>
        <table className='w-full'>
            <thead>
                <tr>
                    <th>MAIN</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>RGG</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default OutputA