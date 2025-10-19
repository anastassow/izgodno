import "@mui/material/styles"

declare module '@mui/material/styles' {
  interface Palette {
    bgcolor: Palette['primary'],
    neutral: Palette['primary'],
    title: Palette['primary']
  }
  interface PaletteOptions {
    bgcolor?: PaletteOptions['primary'],
    neutral?: PaletteOptions['primary'],
    title?: PaletteOptions['primary']
  }
}