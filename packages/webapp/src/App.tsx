import React from 'react';
import { Container, Typography } from '@mui/material';
import UserList from './features/users/UsersList';
const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <UserList />
    </Container>
  );
}

export default App;