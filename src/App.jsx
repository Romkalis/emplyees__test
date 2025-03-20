import './App.css'
import {useEffect} from "react";
import {EmployeeList} from "./components/core/EmployeeList/EmployeeList.jsx";

import {useDispatch, useSelector} from "react-redux";
import {fetchEmployee} from "./store/employeesSlice.js";

function App() {

  const dispatch = useDispatch()
  const {employees, sortedEmployees, status} = useSelector(state => state.employees)


  const renderedEmployee = sortedEmployees.length === 0
        ? employees
        : sortedEmployees

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  return (
    <>
      <EmployeeList data={renderedEmployee}/>
    </>
  )
}

export default App
