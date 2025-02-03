import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../../index.css';

export default function ProdnPie() {
  return (
    <div className='w-full sm:max-w-[700px] overflow-hidden bg-[#1de9b6] rounded-lg'>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Team A' },
            { id: 1, value: 15, label: 'Team B' },
            { id: 2, value: 20, label: 'Team C' },
            { id: 3, value: 8, label: 'Team D' }
          ],
        },
      ]}
      width='100%'
      margin={{
        right:4.5
      }}
      height={175}
      slotProps={{
        legend:{hidden:true}
      }}
    />
    </div>
  );
}
