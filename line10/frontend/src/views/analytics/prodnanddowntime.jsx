import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function Prodnanddowntime() {
  return (
    <div className='p-4 w-full flex align-center bg-slate-800 rounded-lg border border-slate-400'>
    <ThemeProvider theme={darkTheme}>
    <BarChart
      width={500}
      height={300}
      margin={{ right: 0 }}
      colors={['#18ffff', '#FFA500']}
      series={[
        { data: pData, label: 'prodn', id: 'prodnId' },
        { data: uData, label: 'dt', id: 'dtId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </ThemeProvider>
    </div>
  );
}
