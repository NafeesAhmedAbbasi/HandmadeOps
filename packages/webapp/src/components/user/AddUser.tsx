import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/userAction';
import { User } from '../../redux/actions/types';
import { TextField, Button, Container, Box } from '@mui/material';

const AddUser: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      const newUser: Omit<User, 'id'> = {
        name,
        email,
        password,
        status: 'active',
      };
      await dispatch(addUser(newUser) as any);
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">Add User</Button>
      </Box>
    </Container>
  );
};

export default AddUser;
