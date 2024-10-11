// src/components/Navigation.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Tooltip } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListIcon from '@mui/icons-material/List';
import AddUser from './user/AddUser';
import UserList from './user/UserList';

const Navigation: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="User List">
            <IconButton color="inherit" onClick={() => setView('list')}>
              <ListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add User">
            <IconButton color="inherit" onClick={() => setView('add')}>
              <PersonAddIcon />
            </IconButton>
          </Tooltip>
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
