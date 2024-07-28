// Define the User type
export interface User {
    id: string;
    name: string;
    email: string;
    status: string;
  }
  
  // Define the User state
  export interface UserState {
    loading: boolean;
    users: User[];
    error: string | null;
  }
  
  // Define action types
  export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
  export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
  export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
  
  // Define action interfaces
  interface FetchUsersRequestAction {
    type: typeof FETCH_USERS_REQUEST;
  }
  
  interface FetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: User[];
  }
  
  interface FetchUsersFailureAction {
    type: typeof FETCH_USERS_FAILURE;
    payload: string;
  }
  
  // Union of all action types
  export type UserActionTypes =
    | FetchUsersRequestAction
    | FetchUsersSuccessAction
    | FetchUsersFailureAction;
  