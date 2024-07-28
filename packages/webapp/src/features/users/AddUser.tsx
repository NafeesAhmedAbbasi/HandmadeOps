// src/components/AddUserForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addUser } from './usersSlice';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';

const AddUserForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // New password state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(addUser({ name, email, password })); // Include password in dispatch
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUserForm;
