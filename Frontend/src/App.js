import './App.css';
import { createTheme, colors, ThemeProvider, Typography } from '@mui/material';
import { NavBar2 } from './components/NavBar2';
import SearchRoot from './pages/SearchRoot';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: "#ff002f",
    },
  },
});

function App() {
  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar2/>
        <SearchRoot/>
      </div>
    </ThemeProvider>
  );
}

export default App;
