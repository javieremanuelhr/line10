import React from 'react';
import '../../index.css';
import Box from '@mui/material/Box';
import SxStyling from './testchart';
import DowntimeBars from './downtimebars';
import ProdnBars from './prodnbars';


function Analytics() {
    return (
        <div className="bg-white min-h-screen flex flex-col gap-4 font-[montserrat] font-semibold p-3">
            {/* Title */}
            <div className='flex flex-row'>
                <h1 className="text-[#0f1214] text-2xl ">Analytics</h1>
                <div className='justify-end'>
                    
                    
                </div>
            </div>
            

            {/* Chart Container */}
            <div className="flex flex-col gap-4 h-screen items-center p-5.5 bg-[#0f1214] rounded-lg">
                
                <div className="bg-teal-400 h-[40px] text-white w-full flex items-center justify-center text-black font-bold rounded-lg">
                    Line Prodn: XXXX
                </div>
                <div className='flex flex-col gap-4 items-center '>
                    
                    <ProdnBars />
                    <DowntimeBars />

                </div>


            </div>
        </div>
    );
}

export default Analytics;
