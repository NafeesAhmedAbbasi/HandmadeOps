import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER,
} from '../types/userTypes';
import { User } from '../actions/types';

interface UserState {
  users: User[];
  status: 'inactive' | 'loading' | 'active' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: 'inactive',
  error: null,
};

export default function userReducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        status: 'active',
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
