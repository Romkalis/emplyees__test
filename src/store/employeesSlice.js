import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsers} from "../utils/fetchUsers.js";

export const fetchEmployee = createAsyncThunk('employee/fetchEmployee', fetchUsers)

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    sortedEmployees: [],
    status: 'wait', // 'pend', 'load', 'fail', 'ok'
    error: null
  },
  reducers: {
    sortBy: (state, {payload}) => {
      if (payload === 'all') {
        state.sortedEmployees = []
      } else {
        state.sortedEmployees = state.employees.filter( el => el.role === payload)
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
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
      })
  }
})

export const {sortBy, isArchive, changeUser} = employeesSlice.actions
export default employeesSlice.reducer
