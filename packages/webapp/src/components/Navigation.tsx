// src/components/Navigation.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import AddUser from './user/AddUser';
import UserList from './user/UserList';

const Navigation: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => setView('list')}>User List</Button>
          <Button color="inherit" onClick={() => setView('add')}>Add User</Button>
        </Toolbar>
      </AppBar>
      <Box mt={2}>
        {view === 'list' && <UserList />}
        {view === 'add' && <AddUser />}
      </Box>
    </div>
  );
};

export default Navigation;
