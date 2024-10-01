// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import { RootState } from '../redux/store';
import APP_URLS from '../utils/appurls';

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
     <AppBar position="static">
      <Toolbar>
        {/* Left aligned buttons */}
        <Box sx={{ flexGrow: 1 }}>
          {user ? (
            <>
              <Button color="inherit" component={Link} to={APP_URLS.TODOS}>To do's</Button>
            </>
          ) : (
            <>
              {/* Center aligned text */}
              <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Welcome to To Do's App
              </Typography>
            </>
          )}
        </Box>

        {/* Right aligned buttons */}
        {user && (
          <Box sx={{ ml: 'auto' }}>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            <Button color="inherit" onClick={handleLogout}>Log out</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
    {/* This is where child routes will be rendered */}
    <Outlet />
    </>
  );
};

export default Navbar;
