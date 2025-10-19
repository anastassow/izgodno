'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  shape: {
    borderRadius: "16px"
  },
  palette: {
    bgcolor: {
      main: 'hsl(0 0% 98%)'
    },
    primary: {
      main: 'hsl(158 64% 52%)',
      contrastText: 'hsl(0 0% 100%)',
      light: "#36d3991a"
    },
    secondary: {
      main: 'hsl(217 91% 60%)',
      contrastText: "hsl(0 0% 100%)"
    },
    neutral: {
      main: "hsl(220 9% 46%)"
    },
    title: {
      main: "hsl(220 13% 13%)"
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1rem"
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "hsla(158, 78%, 60%, 1.00)"
          }
        }
      }
    }
  }
});

export default theme;
