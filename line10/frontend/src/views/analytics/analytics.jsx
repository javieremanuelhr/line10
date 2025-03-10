import React from 'react';
import '../../index.css';

import DowntimeBars from './downtimebars';
import ProdnBars from './prodnbars';
import LineOE from './lineoe';
import Pieidk from './pieidk';

import ProdnAndDtBiaxial from './prodnanddtbiaxial';
import Prodnanddowntime from './prodnanddowntime';

import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Analytics() {
    const [message, setMessage] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:5555/analytics')
        .then(res => {
            console.log(res)
            if(res.data.valid) {
                setMessage(res.data.message)
            } else {
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    })

    return (
        <div className="bg-white min-h-screen flex flex-col gap-4 font-[montserrat] font-semibold p-4 mb-4">
            {/* Title */}
            <div className="flex flex-row">
                <h1 className="text-[#0f1214] text-2xl">Analytics</h1>
                <div className="ml-auto"></div>
            </div>

            {/* Chart Container */}
            <div className="flex flex-col gap-4 h-screen p-4 bg-[#0f1214] rounded-lg overflow-auto">
                {/*<div className="bg-teal-400 h-[40px] text-white w-full flex items-center justify-center font-bold rounded-lg sm:h-[50px]">
                    Line Prodn: XXXX
                </div>*/}
                <div className="w-full flex flex-col-reverse gap-4 md:flex-row">
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        <ProdnBars />
                        <DowntimeBars />
                        <Pieidk />
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full md:w-3/4">
                        <Prodnanddowntime />
                        <ProdnAndDtBiaxial />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
