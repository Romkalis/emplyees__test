import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchUsers} from "../utils/fetchUsers.js";
import {sortingCallback} from "../utils/sortingCallback.js";

export const fetchEmployee = createAsyncThunk('employee/fetchEmployee', fetchUsers)

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    sortedEmployees: [],
    showedEmployee: [],
    status: 'pending', // 'pending', 'ok', 'fail',
    error: null,
    filter: {
      role: 'all',
      isArchive: 'all',
    }
  },
  reducers: {

    filterBy: (state, {payload}) => {

      switch(payload) {
        case 'allEmployee': {
          state.filter = {...state.filter, isArchive: 'all'}
          break
        }
        case 'inArchive': {
          state.filter = {...state.filter, isArchive: true}
          break
        }
        case 'outArchive': {
          state.filter = {...state.filter, isArchive: false}
          break
        }
        default:
          state.filter = {...state.filter, role: payload}
      }

      state.sortedEmployees = state.employees.filter((el) => {

        // console.log(state.filter.role)
        // console.log(state.filter.isArchive)

        const matchRole = state.filter.role === 'all' || el.role === state.filter.role;
        const matchArchive =
          state.filter.isArchive === 'all' ||
          el.isArchive === state.filter.isArchive;

        return matchRole && matchArchive;
      });

    },

    sortBy: (state, {payload}) => {

      if (state.sortedEmployees.length === 0) {
        state.showedEmployee = state.employees.sort(sortingCallback(payload))
      } else {
        state.showedEmployee = state.sortedEmployees.sort(sortingCallback(payload))
      }

    },

    addUser: (state, {payload}) => {

      state.employees = [...state.employees, payload]
      state.showedEmployee = [...state.employees]

    },

    changeUser: (state, {payload}) => {
      const index = state.employees.findIndex(user => user.id === payload.id);
      if (index !== -1) {
        state.employees[index] = payload;
      }
      state.showedEmployee = state.employees
    },


    isArchive: (state, {payload}) => {
      let user = state.employees.find(el => el.id === payload)
      user.isArchive = !user.isArchive
    },

    findBy: (state, {payload}) => {
      state.showedEmployee = state.employees.filter(el =>
        Object.values(el).some(
          value => {
            return value.toString().replace(/[()\-\s]/g, '').toLowerCase().includes(payload.toLowerCase()
            )
          }
        )
      )
    }


  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployee.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.showedEmployee = action.payload;
        state.status = 'ok'
      })
      .addCase(fetchEmployee.rejected, (state) => {
        state.status = 'fail'
      })
  }
})

export const {
  filterBy,
  isArchive,
  sortBy,
  findBy,
  addUser,
  changeUser,
} = employeesSlice.actions
export default employeesSlice.reducer
