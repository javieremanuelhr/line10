import { react } from 'react';
import '../../index.css';
import BasicBars from './barchart';
import BasicLineChart from './linechart';

function Analytics () {
    return(
        <div className='bg-[#ffffff] h-screen screen flex flex-col p-4'>
            <div className='text-[#0f1214] text-2xl font-bold'>
            <h1>Analytics</h1>
            </div>
            <div>
                <BasicBars />
            </div>
            <div>
                <BasicLineChart />
            </div>
        </div>
    )
}

export default Analytics