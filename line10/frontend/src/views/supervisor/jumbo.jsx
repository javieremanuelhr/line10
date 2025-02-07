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

    {/*Jumbo per material qty calculator*/}

    {/*Main Variables*/}

    const [mainRgg, setMainRgg] = useState(0);
    const [mainMg, setMainMg] = useState(0);
    const [mainRecron, setMainRecron] = useState(0);
    const [mainGarden, setMainGarden] = useState(0);
    const [mainChinese, setMainChinese] = useState(0);
    const [mainSilica, setMainSilica] = useState(0);
    const [mainPcr, setMainPcr] = useState(0);
    const [mainRggPcr, setMainRggPcr] = useState(0);
    const [mainRggMat, setMainRggMat] = useState(0);

    {/*Coex Variables*/}

    const [coexRgg, setCoexRgg] = useState(0);
    const [coexMg, setCoexMg] = useState(0);
    const [coexRecron, setCoexRecron] = useState(0);
    const [coexGarden, setCoexGarden] = useState(0);
    const [coexChinese, setCoexChinese] = useState(0);
    const [coexSilica, setCoexSilica] = useState(0);
    const [coexPcr, setCoexPcr] = useState(0);
    const [coexRggPcr, setCoexRggPcr] = useState(0);
    const [coexRggMat, setCoexRggMat] = useState(0);

    {/*Functions*/}

    const mainSum = mainRgg + mainMg + mainRecron + mainGarden + mainChinese + mainSilica + mainPcr + mainRggPcr + mainRggMat;
    const mainSumColor = mainSum === 100 ? "bg-green-500" : "bg-red-500";
    const coexSum = coexRgg + coexMg + coexRecron + coexGarden + coexChinese + coexSilica + coexPcr + coexRggPcr + coexRggMat;
    const coexSumColor = coexSum === 100 ? "bg-green-500" : "bg-red-500";

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
                                <td className="w-1/4"><input onChange={(e) => {setMainRgg(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRgg(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">MG</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainMg(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexMg(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Recron</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainRecron(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRecron(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Garden</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainGarden(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexGarden(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Chinese</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainChinese(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexChinese(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Silica</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainSilica(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexSilica(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">PCR</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">RGGPCR</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainRggPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRggPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">RGGMat</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainRggMat(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRggMat(Number(e.target.value))}} className="text text-center w-full"></input></td>
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
                                <td className={`w-1/4 ${mainSumColor}`}><label className="text text-center w-full">{mainSum}</label></td>
                                <td className={`w-1/4 ${coexSumColor}`}><label className="text text-center w-full">{coexSum}</label></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label></td>
                            </tr>
                        </tbody>
                </table>
                </div>
)
}

export default Jumbo