import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './tasksSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    filter: filtersReducer,
  },
});
