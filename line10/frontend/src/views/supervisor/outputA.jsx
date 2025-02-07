import React from 'react'
import '../../index.css'

const OutputA = () => {



  return (
    <div className='w-full h-full font-semibold text text-center border flex flex-col'>
        <table className='w-full border-separate'>
            <thead>
                <tr className='bg-black'>
                    <th>Throuhput</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody className='bg-blue-500'>
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
        <table className='w-full border-separate'>
            <thead>
                <tr className='bg-black'>
                    <th className='w-1/4'>MAIN</th>
                    <th className='w-1/4'>I</th>
                    <th className='w-1/4'>II</th>
                    <th className='w-1/4'>III</th>
                </tr>
            </thead>
            <tbody className='bg-blue-500'>
                <tr>
                    <td>RGG</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>MG</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Recron</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Garden</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Silica</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>PCR</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>RGGPCR</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>RGGMat</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='bg-black'>
                    <td>COEX</td>
                    <td>I</td>
                    <td>II</td>
                    <td>III</td>
                </tr>
                <tr>
                    <td>MG</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Recron</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Garden</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Silica</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Other</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='bg-black'>
                    <td>TIME</td>
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