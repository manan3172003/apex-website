import './App.css';
import {NavBar} from './components/NavBar';
import { createTheme, colors, ThemeProvider, Typography } from '@mui/material';
import { NavBar2 } from './components/NavBar2';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[900],
    },
    secondary: {
      main: colors.red['A200'],
    },
  },
});

function App() {
  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <NavBar /> */}
        <NavBar2/>
      </div>
    </ThemeProvider>
  );
}

export default App;
