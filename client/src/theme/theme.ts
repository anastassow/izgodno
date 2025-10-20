'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  shape: {
    borderRadius: "16px"
  },
  typography: {
    h1: {
      fontSize: "4.5rem"
    }
  },
  palette: {
    bgcolor: {
      main: '#EEEEEE'
    },
    primary: {
      main: '#555879',
      contrastText: 'hsl(0 0% 100%)',
      light: "#a991701a"
    },
    secondary: {
      main: '#98A1BC',
      contrastText: "hsl(0 0% 100%)",
      light: '#6c7f931a'
    },
    neutral: {
      main: "hsl(220 9% 46%)"
    },
    title: {
      main: "hsl(220 13% 13%)"
    },
    border: {
      main: "hsl(214 32% 91%)"
    },
    accent: {
      main: "#901E3E",
      contrastText: "hsl(0 0% 100%)"
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
    },
    MuiChip: {
      styleOverrides: {
        outlinedSecondary: ({ theme }) => ({
          background: theme.palette.secondary.light
        })
      }
    }
  }
});

export default theme;
