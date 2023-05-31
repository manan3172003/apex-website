import './App.css';
import './Styles.css';
import { createTheme, colors, ThemeProvider, Typography } from '@mui/material';
import {NavBar2} from './components/NavBar2';
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
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div class="flex flex-col h-screen content-center">
        <header class="content-start">
          <NavBar2 />
        </header>
        <main>
          <SearchRoot />
        </main>
        <footer id="footer">
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            ApexTravels
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;