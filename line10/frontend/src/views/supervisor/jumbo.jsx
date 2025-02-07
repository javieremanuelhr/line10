import React from 'react'
import '../../index.css'
import { useState } from 'react';

const Jumbo = () => {

    {/*Fast Jumbo Variables*/}

    const [weight, setWeight] = useState(0);

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

    {/*Quantities Variables*/}

    /*const [rgg, setRgg] = useState(0);
    const [mg, setMg] = useState(0);
    const [recron, setRecron] = useState(0);
    const [garden, setGarden] = useState(0);
    const [chinese, setChinese] = useState(0);
    const [silica, setSilica] = useState(0);
    const [pcr, setPcr] = useState(0);
    const [rggPcr, setRggPcr] = useState(0);
    const [rggMat, setRggMat] = useState(0);*/

    {/*Skin Layer Variables*/}

    const [mainLayer, setMainLayer] = useState(0);
    const [coexLayer, setCoexLayer] = useState(0);

    {/*Functions*/}

    const mainSum = mainRgg + mainMg + mainRecron + mainGarden + mainChinese + mainSilica + mainPcr + mainRggPcr + mainRggMat;
    const mainSumColor = mainSum === 100 ? "bg-green-500" : "bg-red-500";
    const coexSum = coexRgg + coexMg + coexRecron + coexGarden + coexChinese + coexSilica + coexPcr + coexRggPcr + coexRggMat;
    const coexSumColor = coexSum === 100 ? "bg-green-500" : "bg-red-500";
    const skinLayerSum = mainLayer + coexLayer;
    const skinLayerSumColor = skinLayerSum === 100 ? "bg-green-500" : "bg-red-500";
    const scrap = (weight/100)*15;
    const total = Number(weight) + Number(scrap);
    const rggQty = ((Number(total)/100)*Number(mainRgg))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexRgg))*(Number(coexLayer)/100);
    const mgQty = ((Number(total)/100)*Number(mainMg))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexMg))*(Number(coexLayer)/100);
    const recronQty = ((Number(total)/100)*Number(mainRecron))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexRecron))*(Number(coexLayer)/100);
    const gardenQty = ((Number(total)/100)*Number(mainGarden))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexGarden))*(Number(coexLayer)/100);
    const chineseQty = ((Number(total)/100)*Number(mainChinese))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexChinese))*(Number(coexLayer)/100);
    const silicaQty = ((Number(total)/100)*Number(mainSilica))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexSilica))*(Number(coexLayer)/100);
    const pcrQty = ((Number(total)/100)*Number(mainPcr))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexPcr))*(Number(coexLayer)/100);
    const rggPcrQty = ((Number(total)/100)*Number(mainRggPcr))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexRggPcr))*(Number(coexLayer)/100);
    const rggMatQty = ((Number(total)/100)*Number(mainRggMat))*(Number(mainLayer)/100) + ((Number(total)/100)*Number(coexRggMat))*(Number(coexLayer)/100);
    const absoluteTotal = Number(rggQty) + Number(mgQty) + Number(recronQty) + Number(gardenQty) + Number(chineseQty) + Number(silicaQty) + Number(pcrQty) + Number(rggPcrQty) + Number(rggMatQty);

return (
    <div className="w-full h-full flex flex-col">
                {/*Jumbo Weight*/}
                <table className="w-full h-full border-separate border-spacing-0.5 font-semibold  text-white ">
                    <tr className='bg-amber-500'>
                        <td className="w-1/5 text text-center">Weight</td>
                        <td className="w-1/5"><input type='number' onChange={(e) => {setWeight(e.target.value)}} className="text text-center w-full h-full"></input></td>
                    </tr>
                    <tr className='bg-amber-500'>
                        <td className="w-1/5 text text-center">Scrap (15%)</td>
                        <td className="w-1/5 text text-center"><label>{scrap}</label></td>
                    </tr>
                    <tr className='bg-amber-500'>
                        <td className="w-1/5 text text-center">Total</td>
                        <td className="w-1/5 text-center"><label>{total}</label></td>
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
                                <td className="w-1/4"><label className="text text-center w-full">{rggQty}</label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">MG</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainMg(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexMg(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full">{mgQty}</label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Recron</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainRecron(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRecron(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full">{recronQty}</label></td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Garden</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainGarden(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexGarden(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{gardenQty}</td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Chinese</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainChinese(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexChinese(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{chineseQty}</td>
                            </tr>
                            <tr>
                                <td className="w-1/4">Silica</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainSilica(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexSilica(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{silicaQty}</td>
                            </tr>
                            <tr>
                                <td className="w-1/4">PCR</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{pcrQty}</td>
                            </tr>
                            <tr>
                                <td className="w-1/4">RGGPCR</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainRggPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRggPcr(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{rggPcrQty}</td>
                            </tr>
                            <tr>
                                <td className="w-1/4">RGGMat</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainRggMat(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexRggMat(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{rggMatQty}</td>
                            </tr>
                            <tr className='bg-black'>
                            <td className="w-1/4">Skin Layer</td>
                                <td className="w-1/4"><input onChange={(e) => {setMainLayer(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className="w-1/4"><input onChange={(e) => {setCoexLayer(Number(e.target.value))}} className="text text-center w-full"></input></td>
                                <td className={`w-1/4 ${skinLayerSumColor}`}><label className="text text-center w-full">{skinLayerSum}</label></td>
                            </tr>
                            <tr className='bg-black'>
                            <td className="w-1/4">Total</td>
                                <td className={`w-1/4 ${mainSumColor}`}><label className="text text-center w-full">{mainSum}</label></td>
                                <td className={`w-1/4 ${coexSumColor}`}><label className="text text-center w-full">{coexSum}</label></td>
                                <td className="w-1/4"><label className="text text-center w-full"></label>{absoluteTotal}</td>
                            </tr>
                        </tbody>
                </table>
                </div>
)
}

export default Jumbo