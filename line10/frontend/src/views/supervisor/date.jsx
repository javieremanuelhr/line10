import * as React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ControlledComponent() {
  const [value, setValue] = React.useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
    </ThemeProvider>
  );
}
