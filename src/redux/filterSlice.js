const { createSlice } = require('@reduxjs/toolkit');
const { statusFilter } = require('./constants');

const filterInitialState = {
  status: statusFilter.all,
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
