import { AppBar, Toolbar, IconButton, Typography, Button} from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React from "react";
import logo from '../assets/logo1.png';
import { Link } from "react-router-dom";

const pages = ['Flights', 'Hotels', 'Blog'];

export const NavBar2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <img src={logo} alt="logo" width="46px" height="40px" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="p"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color: 'secondary.main',
              '&hover': {
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                textDecoration: 'none',
                color: 'secondary.main',
              }
            }}
          >
            ApexTravels
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => {
              if (page == "Flights") {
                return (
                  <MenuItem component={Link} to="/" key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                )
              } else {
                return (
                  <MenuItem component={Link} to={`/${page}`} key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                )
              }
            })}
            </Menu>
          </Box>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
            <img src={logo} alt="logo" width="40px" height="40px" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="p"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'secondary.main',
              textDecoration: 'none',
              '&hover': {
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'secondary.main',
                textDecoration: 'none',
              }

            }}
          >
            ApexTravels
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => 
            {
              if (page == "Flights") {
                return (
                  <Button
                  component={Link}
                  to={`/`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
                )
              } else {
                return (
                  <Button
                  component={Link}
                  to={`/${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
                )
              }
            }
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};