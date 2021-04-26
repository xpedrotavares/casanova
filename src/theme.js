import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette:{
      primary:{
        main: "#EC8F6A",
        contrastText: "#fff"
      },
      text:{
        primary: "#fff"
      }
      
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 1200,
        lg: 1410,
        xl: 1900,
      }
    },
  })

  export default theme;