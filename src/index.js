import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import App from './App';
import theme from './theme'

import './styles.css'
// const theme = createMuiTheme({
//   palette:{
//     primary:{
//       main: "#EC8F6A",
//       contrastText: "#fff"
//     },
//   },

// })

ReactDOM.render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>

    
    <App />
    </ThemeProvider>

 
  </React.StrictMode>,
  document.getElementById('root')
);

