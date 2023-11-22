import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
  ,
)
