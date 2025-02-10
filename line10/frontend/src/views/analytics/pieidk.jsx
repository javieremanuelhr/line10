import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../../index.css';

const data = [
  { label: 'A', value: 400 },
  { label: 'B', value: 300 },
  { label: 'C', value: 300 },
  { label: 'D', value: 200 },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function pieidk () {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='bg-slate-800 border border-slate-400 rounded-lg gap-4 p-4'>
      <div className='text-white font-[montserrat] flex justify-center'>Prodn</div>
    <Stack direction="row">
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        slotProps={{
          legend: { 
            direction: 'row',
            hidden: false,
            position: {
              vertical: 'bottom',
              horizontal: 'middle',
            }
           },
        }}
      />
    </Stack>
    </div>
    </ThemeProvider>
  );
}
