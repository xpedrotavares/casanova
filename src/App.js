
import './styles.css'

import { ThemeProvider } from '@material-ui/core'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from "./pages";
import theme from "./theme"


// const useStyles = makeStyles({
//   root:{

//   }
// })


function App() {
  // const classes = useStyles();
  return (

    <Router >
      <Home />
    </Router>
  );
}

export default App;
