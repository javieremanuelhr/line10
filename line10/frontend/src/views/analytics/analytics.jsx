import { react } from 'react';
import '../../index.css';
import BasicBars from './barchart';

function Analytics () {
    return(
        <div className='bg-[#444950] h-screen screen flex flex-col'>
            <div>
            <h1>Analytics</h1>
            <p>analytics goes right here xd</p>
            </div>
            <div>
                <BasicBars />
            </div>
        </div>
    )
}

export default Analytics