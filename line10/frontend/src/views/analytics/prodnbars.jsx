import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

export default function ProdnBars() {
  return (
    <div className="w-full overflow-hidden rounded-lg text-center pt-2 bg-slate-800 border border-slate-400">
      <div className='text-white'>Production per Team</div>
      <div className='flex align-center'>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C', 'D'] }]}
        series={[
          { data: [30, 31, 29, 27] },
        ]}
        width={300} // Make it responsive
        height={175}

        colors={['#ff1744 ']}
        sx={(theme) => ({
          [`& .${axisClasses.root}`]: {
            [`& .${axisClasses.tick}, & .${axisClasses.line}`]: {
              stroke: '#ffffff', // White border for ticks and axes
              strokeWidth: 2,
              position: 'bottom',
            },
            [`& .${axisClasses.tickLabel}`]: {
              fill: '#ffffff', // White text for labels
            },
          },
        })}
      />
      </div>
    </div>
  );
}
