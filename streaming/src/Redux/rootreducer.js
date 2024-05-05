// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, counterReducer, themeReducer } from './slices';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  theme: themeReducer,
  // Add other reducers here if needed
});

export default rootReducer;
