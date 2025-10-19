'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    bgcolor: {
      main: 'hsl(0 0% 98%)'
    },
    primary: {
      main: 'hsl(158 64% 52%)',
      contrastText: 'hsl(0 0% 100%)'
    },
    secondary: {
      main: 'hsl(217 91% 60%)',
      contrastText: "hsl(0 0% 100%)"
    }
  },
});

export default theme;
