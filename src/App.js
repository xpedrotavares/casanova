
import './styles.css'

import { makeStyles } from '@material-ui/core/styles'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from "./pages";


const useStyles = makeStyles({
  root:{

  }
})


function App() {
  const classes = useStyles();
  return (
    <Router classeName={classes.root}>
      <Home />
    </Router>
  );
}

export default App;
