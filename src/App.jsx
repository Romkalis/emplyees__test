import './App.css'
import {useEffect} from "react";
import {EmployeeList} from "./components/core/EmployeeList/EmployeeList.jsx";

import {useDispatch, useSelector} from "react-redux";
import {fetchEmployee} from "./store/employeesSlice.js";
import {Spinner} from "./components/share/Spinner/Spinner.jsx";
import {FilterBlock} from "./components/core/FilterBlock/FilterBlock.jsx";

function App() {

  const dispatch = useDispatch()
  const {employees, sortedEmployees, status} = useSelector(state => state.employees)

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);


  const renderedEmployee =
    sortedEmployees.length === 0
      ? employees
      : sortedEmployees;


  return (
    <>

      {status === 'pending' && <Spinner  /> }

      <FilterBlock />
      <EmployeeList data={renderedEmployee}/>

      {status === 'fail' && <p> Houston, we have some problems, try again later! </p>}

    </>
  )
}

export default App
