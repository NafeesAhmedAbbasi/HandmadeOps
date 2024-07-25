import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Add password field
}

// Define the state type
interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await axios.get<User[]>('http://localhost:8080/api/users');
    return response.data;
  }
);

// Async thunk to add a user
export const addUser = createAsyncThunk<User, Omit<User, 'id'>>(
  'users/addUser',
  async (newUser) => {
    const response = await axios.post<User>('http://localhost:8080/api/users', newUser);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default userSlice.reducer;
