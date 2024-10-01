// src/components/TodoList.tsx
import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Box, Snackbar, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo } from '../redux/slices/todoSlice';
import { RootState } from '../redux/store';
import { useLocation } from 'react-router-dom';

const TodoList: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos.todos);
  const user = useSelector((state: RootState) => state.user.user);

  const [text, setText] = useState('');
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null); // Track the todo being edited

  // Snackbar state to manage popup alert
  const [showSnackbar, setShowSnackbar] = useState(false);

  //#region User Navigated from sign up
  useEffect(() => {
    // Check if the user navigated from signup page
    if (location.state?.fromSignup) {
      setShowSnackbar(true); // Show snackbar on first load after signup
    }
  }, [location]);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false); // Close the Snackbar
  };
  //#endregion #region User Navigated from sign up


  //#region Todo Items Data Manipulation Functions
  /**
   * Handles the Add Todo Item functionality
   */
  const handleAddTodo = () => {
    if (text.trim()) {
      if (user) {
        dispatch(addTodo({ id: Date.now(), text, completed: false, username: user?.username }));
      }
      setText('');
    }
  };

  /**
   * Handles the Edit Todo Item functionality
   */
  const handleEditTodo = (id: number) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
      setEditingId(null); // Exit edit mode
      setEditText(''); // Reset input field
    }
  };

  /**
   * Handles the Cancle Edit Todo Item functionality
   */
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText(''); // Reset edit input when canceling
  };

  //#endregion Todo Items data manipulation functions

  return (
    <Container maxWidth="sm">

      <h2>To do's List</h2>
      <TextField
        label="New To do"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddTodo}>
        Add
      </Button>

      <List>
        {todos.filter(item => item.username === user?.username).map((todo) => (
          <ListItem key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
            {editingId === todo.id ? (
              <TextField
                variant="outlined"
                fullWidth
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <ListItemText
                primary={todo.text}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              />
            )}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {editingId === todo.id ? (
                <>
                  <IconButton onClick={() => handleEditTodo(todo.id)} color="primary">
                    <SaveIcon />
                  </IconButton>
                  <IconButton onClick={handleCancelEdit} color="secondary">
                    <CancelIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton onClick={() => { setEditingId(todo.id); setEditText(todo.text); }} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" onClick={() => dispatch(deleteTodo(todo.id))} color="error">
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Snackbar for success message */}
      <Snackbar
        open={showSnackbar}
        anchorOrigin={{ vertical:'top', horizontal: 'center' }}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Signup successful! Welcome {user?.username}!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default TodoList;
