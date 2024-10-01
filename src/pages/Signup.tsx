import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/slices/userSlice';
import texts from '../utils/texts';
import APP_URLS from '../utils/appurls';

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Error state for validation
  const [errors, setErrors] = useState<any>({});

  /**
   * To Validate the form data
   * @returns boolean
   */
  const validateForm = (): boolean => {
    const newErrors = { ...errors };

    // Validate username
    if (username.trim().length < 3) {
      newErrors.username = texts.error_signup_username;
    } else {
      delete newErrors.username;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = texts.error_signup_valid_emailId;
    } else {
      delete newErrors.email;
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  /**
   * To handle the form submit button click
   * @param e 
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid; handle the signup logic here
      dispatch(signup({ username, email }));
      navigate(APP_URLS.TODOS, { state: { fromSignup: true } });

    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1">
          Sign up here..
        </Typography>
      </Box>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username Field */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="User Name"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
          />
        </Box>

        {/* Email Field */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>

        {/* Submit Button */}
        <Box sx={{ mb: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </Box>
      </form>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button component={Link} to={APP_URLS.LOGIN} variant="text" color="secondary">
          Click here to Login
        </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
