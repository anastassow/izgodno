import "@mui/material/styles"

declare module '@mui/material/styles' {
  interface Palette {
    bgcolor: Palette['primary'];
  }
  interface PaletteOptions {
    bgcolor?: PaletteOptions['primary'];
  }
}