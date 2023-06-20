import './Styles.css';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import {NavBar2} from './components/NavBar2';

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

function Blogs() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Blogs">
        <div class="flex flex-col h-screen content-center">
        <header class="content-start">
          <NavBar2 />
        </header>
        <main class="flex flex-col h-screen content-center items-center justify-center">
        <Typography variant="h1" color="text.secondary" align="center">
          Coming Soon
        </Typography>
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

export default Blogs;