import React from 'react'
import '../../index.css'
import { useState } from 'react';

const Jumbo = () => {

    const [fastScrap, setFastScrap] = useState('');
    const [fastScrapPercentage, setFastScrapPercentage] = useState('');
    
    const handleFastTotal = (e) => {
      if (e.key === 'Enter'){
        const calculatedPercentage = (parseFloat(fastScrap)*0.15).toFixed(2);
        setFastScrapPercentage(calculatedPercentage);
      }
    };



return (
    <div className="w-full h-full flex flex-col">
                {/*Jumbo Weight*/}
                <table className="w-full h-full border-separate border-spacing-0.5 font-semibold  text-white ">
                    <tr className='bg-amber-500'>
                        <td className="w-1/5 text text-center">Weight</td>
                        <td className="w-1/5"><input type='number' value={fastScrap} onChange={(e) => {setFastScrap(e.target.value)}} onKeyDown={handleFastTotal} className="text text-center w-full h-full"></input></td>
                    </tr>
                    <tr className='bg-amber-500'>
                        <td className="w-1/5 text text-center">Scrap (15%)</td>
                        <td className="w-1/5 text text-center">{fastScrapPercentage}</td>
                    </tr>
                    <tr className='bg-amber-500'>
                        <td className="w-1/5 text text-center">Total</td>
                        <td className="w-1/5 text-center">{(parseFloat(fastScrap) + parseFloat(fastScrapPercentage)).toFixed(2)}</td>
                        </tr>
                </table>
                {/*Recipe*/}
                <table className="w-full  h-full border-separate border-spacing-0.5 border-white text-white">
                        <thead>
                            <tr className="bg-[#0f1214]">
                                <th className="text text-center w-1/4">MATERIAL</th>
                                <th className="text text-center w-1/4">MAIN</th>
                                <th className="text text-center w-1/4">COEX</th>
                                <th className="text text-center w-1/4">QTY</th>
                            </tr>
                        </thead>
                        <tbody className='bg-teal-500 font-semibold text-center'>
                            <tr>
                                <td className="w-1/4">RGG</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">MG</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Recron</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Garden</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Chinese</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Silica</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">PCR</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">RGGPCR</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">RGGMat</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr className='bg-black'>
                            <td className="w-1/4">Skin Layer</td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr className='bg-black'>
                            <td className="w-1/4">Total</td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                        </tbody>
                </table>
                </div>
)
}

export default Jumbo