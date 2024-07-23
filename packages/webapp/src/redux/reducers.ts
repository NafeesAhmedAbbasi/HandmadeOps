import { combineReducers } from 'redux';

// Placeholder reducer
const initialState = {};
const exampleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  example: exampleReducer,
});
