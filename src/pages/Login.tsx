// src/components/Login.tsx
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import texts from '../utils/texts';
import APP_URLS from '../utils/appurls';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user.users);
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState<any>({});

  /**
   * To handle login button click
   * @param e 
   */
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(login({ username }));
      navigate(APP_URLS.TODOS);
    }
  };

  /**
   * To validate the form
   * @returns boolean
   */
  const validateForm = (): boolean => {
    const newErrors = { ...errors };

    // Validate username
    if (username.trim().length < 3) {
      newErrors.username = texts.error_username;
    } else if (!users.some((user) => user.username === username.trim())) {
      newErrors.username = texts.error_username_doesnot_exist;
    } else {
      delete newErrors.username;
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  return (
    <Container maxWidth="sm">
       <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1">
          Login here..
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          label="User Name"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          component={Link}
          to={APP_URLS.SIGNUP}
          variant="text"
          color="secondary"
        >
          Click here to Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
