import { AppBar, Toolbar, IconButton, Typography, Stack, Button, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React from "react";
import logo from '../assets/logo1.png';


const pages = ['Products', 'Pricing', 'Blog'];

export const NavBar2 = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }}}>
          <IconButton
            size="medium"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            marginright="0px"
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
  
        <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'center' }}>
          <img src={logo} alt="logo" style={{ width: '60px', height: '60px', marginright: '8px' }} />
          <Typography
            variant="h6"
            noWrap
            component="p"
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'secondary.main',
              textDecoration: 'none',
              '&:hover': {
                fontWeight: 700,
                color: 'secondary.main',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            ApexTravels
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="p"
            href=""
            sx={{
              mr: 6,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'secondary.main',
              textDecoration: 'none',
              '&:hover': {
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'secondary.main',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }
            }}
          >
            ApexTravels
          </Typography>
        </Box>
  
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  

  );
};