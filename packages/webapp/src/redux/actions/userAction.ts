import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER,
} from "../types/userTypes";
import { User } from "./types";
import config from "../../config";

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (users: User[]) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

export const fetchUserFailure = (error: string) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const updateUser = (user: User) => ({
  type: UPDATE_USER,
  payload: user,
});

export const fetchUsers =
  (): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch: Dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const response = await axios.get(`${config.baseURL}/users`);
      dispatch(fetchUserSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchUserFailure(error.message));
    }
  };

export const addUser =
  (user: Omit<User, "_id">): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        `${config.baseURL}/users`,
        user
      );
      dispatch(updateUser(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  export const setUserInactive = (userId: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch, getState) => {
    const { users } = getState().users;
    const user = users.find((u) => u._id == userId);
  
    if (!user) {
      console.error(`User with id ${userId} not found.`);
      return;
    }
  
    try {
      await axios.put( `${config.baseURL}/users/${userId}`, { ...user, status: 'inactive' });
      dispatch(fetchUsers() as any); // Refetch users to update the list
    } catch (error) {
      console.error(error);
    }
  };