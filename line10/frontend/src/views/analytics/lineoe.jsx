import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

export default function LineOE() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge
        width={100}
        height={100}
        value={60}
        sx={{
          '& .MuiGauge-valueText': {
            fill: '#ffffff !important', // Ensure white text
            fontSize: '40px',
          },
        }}
      />
      
      <Gauge
        width={100}
        height={100}
        value={60}
        startAngle={-90}
        endAngle={90}
        sx={{
          '& .MuiGauge-valueText': {
            fill: '#ffffff !important', // Ensuring white text
            fontSize: '40px',
          },
        }}
      />
    </Stack>
  );
}
