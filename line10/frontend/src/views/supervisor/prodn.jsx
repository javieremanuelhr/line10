import React from 'react'
import '../../index.css'

const prodn = () => {
  return (
    <div>
        <table className="w-full h-full border-separate border-spacing-0.5 rounded-t-lg ">
            <thead className="bg-black">
              <tr>
                <th className="w-1/4">Shift</th>
                <th className="w-1/4">A</th>
                <th className="w-1/4">B</th>
                <th className="w-1/4">C</th>
              </tr>
            </thead>
            <tbody className="bg-teal-500">
              <tr className="bg-pink-800">
                <th className="w-1/4">Lead</th>
                <th className="w-1/4"><input className="text text-center w-full"></input></th>
                <th className="w-1/4"><input className="text text-center w-full"></input></th>
                <th className="w-1/4"><input className="text text-center w-full"></input></th>
              </tr>
              <tr>
                <th className="w-1/4">RGG</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">MG</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Recron</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Garden</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Chinese</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className='w-1/4'>Silica</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">PCR</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">RGGPCR</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">RGGMat</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
          <table className="w-full border-separate border-spacing-0.5 ">
            <tbody className='bg-pink-700'>
              <tr>
                <th className="w-1/4">Gross</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Net</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Recycled</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Erema</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className="w-1/4">Intarema</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
    </div>
  )
}

export default prodn