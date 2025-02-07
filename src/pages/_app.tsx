import "@/styles/globals.css";
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
