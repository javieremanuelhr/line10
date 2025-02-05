import React from 'react';
import '../../index.css';
import Box from '@mui/material/Box';
import SxStyling from './lineoe';
import DowntimeBars from './downtimebars';
import ProdnBars from './prodnbars';
import LineOE from './lineoe';


function Analytics() {
    return (
        <div className="bg-white min-h-screen flex flex-col gap-4 font-[montserrat] font-semibold p-2">
            {/* Title */}
            <div className='flex flex-row px-1'>
                <h1 className="text-[#0f1214] text-2xl ">Analytics</h1>
                <div className='ml-auto'>
                </div>
            </div>

            {/* Chart Container */}
            <div className="flex flex-col gap-4 h-screen items-center p-4 bg-[#0f1214] rounded-lg">
                <div className="bg-teal-400 h-[40px] text-white w-full flex items-center justify-center font-bold rounded-lg sm:bg-amber-400 md:h-[50px]">
                    Line Prodn: XXXX
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col gap-4 items-center'>
                        <ProdnBars />
                        <DowntimeBars />
                    </div>
                    <div>
                        <LineOE />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Analytics;
