// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Signup from './pages/Signup';
import Login from './pages/Login';
import TodoList from './pages/TodoList';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Normalizes styles for dark mode
import darkTheme, { darkGlassyTheme, greyGlassyTheme, darkGlassyClassicTheme } from './styles/theme';
import APP_URLS from './utils/appurls';


const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const users = useSelector((state: RootState) => state.user.users);

  return (
    <ThemeProvider theme={darkGlassyClassicTheme}>
      <CssBaseline /> {/* Ensures dark theme background and text are applied */}

      <Router>
        <Routes>

          {/* Default Navigation */}
          <Route path="/" element={<Navigate to={user ? APP_URLS.TODOS : users.length ? APP_URLS.LOGIN : APP_URLS.SIGNUP} />} />

          {/* UnAuthorized Route */}
          <Route
            path="/"
            element={
              <Navbar />
            }
          >
            {/* Nested routes will be rendered inside the layout */}
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Protected routes with sidebar layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
              </ProtectedRoute>
            }
          >
            {/* Nested routes will be rendered inside the layout */}
            <Route path="todos" element={<TodoList />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Page not found redirect to login */}
          <Route path="*" element={<Navigate to={user ? APP_URLS.TODOS : APP_URLS.LOGIN} />} />
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;



