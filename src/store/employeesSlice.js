import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsers} from "../utils/fetchUsers.js";

export const fetchEmployee = createAsyncThunk('employee/fetchEmployee', fetchUsers)

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    sortedEmployees: [],
    status: 'pending', // 'pend', 'ok', 'fail',
    error: null
  },
  reducers: {

    filterBy: (state, { payload }) => {
      if (payload === 'inArchive') {
        state.sortedEmployees = state.employees.filter(el => el.isArchive === true);
      } else if (payload === 'outArchive') {
        state.sortedEmployees = state.employees.filter(el => el.isArchive === false);
      } else if (payload === 'all') {
        state.sortedEmployees = []
      } else {
        state.sortedEmployees = state.employees.filter(el => el.role === payload);
      }
    },

    sortBy: (state, payload) => {

      if (payload === 'name') {
        console.log('sort by name')
      } else if (payload === 'date') {
        console.log('sort by date')
      }
    },

    addUser: (state, payload) => state.employees.push(payload),

    isArchive: (state, {payload}) => {
      let user = state.employees.find( el => el.id === payload)
      user.isArchive = !user.isArchive
    },


  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployee.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.status = 'ok'
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.status = 'fail'
      })
  }
})

export const {
  filterBy,
  isArchive,
  sortBy,
} = employeesSlice.actions
export default employeesSlice.reducer
