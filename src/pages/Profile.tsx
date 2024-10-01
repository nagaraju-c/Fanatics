import React from 'react';
import { Avatar, Card, CardContent, Typography, Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card elevation={3} style={{ padding: '20px' }}>
        <Box display="flex" alignItems="center">
          {/* Profile Icon / Avatar */}
          <Box display="flex" justifyContent="center" width="30%">
            <Avatar
              alt={user?.username}
              src={'https://via.placeholder.com/150'}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          
          {/* Profile Details */}
          <Box width="70%">
            <CardContent>
              <Typography 
                variant="h5" 
                component="div"
                sx={{ textTransform: 'capitalize' }}  // Capitalize first letter using sx
              >
                {user?.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.email}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default ProfilePage;
