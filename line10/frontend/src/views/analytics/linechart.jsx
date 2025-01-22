import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[
        {
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Ensure this matches the length of series data
          label: 'Months',
          valueFormatter: (index) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index], // Formatting indices as months
        },
      ]}
      series={[
        {
          data: [12, 19, 3, 5, 2, 3, 10, 15, 8, 6, 9, 12], // Match length with xAxis
          
        },
      ]}
      width={600}
      height={400}
    />
  );
}
