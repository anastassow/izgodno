import "@mui/material/styles"

declare module '@mui/material/styles' {
  interface Palette {
    bgcolor: Palette['primary'],
    neutral: Palette['primary'],
    title: Palette['primary'],
    border: Palette['primary'],
    accent: Palette['primary']
  }
  interface PaletteOptions {
    bgcolor?: PaletteOptions['primary'],
    neutral?: PaletteOptions['primary'],
    title?: PaletteOptions['primary'],
    border?: PaletteOptions['primary'],
    accent?: PaletteOptions['primary']
  }
}



import '@mui/material/Chip';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true;
  }
}