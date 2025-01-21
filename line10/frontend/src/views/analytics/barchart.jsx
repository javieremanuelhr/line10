import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D'] }]}
      series={[{ data: [4, 3, 5, 2] }, { data: [1, 6, 3, 4] }, { data: [2, 5, 6, 1] }]}
      width={500}
      height={300}
      colors={['#7b1fa2', '#039be5', '#fbc02d']}
      

    />
  );
}
