import './App.css';
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div class="flex-col h-screen justify-center">
        <header class="content-start">
          <NavBar2 />
        </header>
        <main>
          <SearchRoot />
        </main>
        <footer id="footer"class="content-end" sx= {{position: 'absolute', bottom:0}}>
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