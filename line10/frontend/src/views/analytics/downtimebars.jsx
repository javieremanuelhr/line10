import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

export default function DowntimeBars() {
  return (
    <div className="w-full overflow-hidden rounded-lg pt-2 text-center">
      <div className="text-white">Downtime per Team</div>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C', 'D'] }]}
        series={[
          { data: [4, 3, 5, 2] },
        ]}
        width={300} // Make it responsive
        height={175}
        colors={['#7c4dff ']}
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
  );
}
