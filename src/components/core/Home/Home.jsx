import {useEffect} from "react";


import {useDispatch, useSelector} from "react-redux";
import {EmployeeList} from "../EmployeeList/EmployeeList.jsx";
import {fetchEmployee} from "../../../store/employeesSlice.js";
import {FilterBlock} from "../FilterBlock/FilterBlock.jsx";
import {Spinner} from "../../share/Spinner/Spinner.jsx";

export function Home() {

  const dispatch = useDispatch()
  const {showedEmployee, sortedEmployees, status} = useSelector(state => state.employees)

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);


  const renderedEmployee =
    sortedEmployees.length === 0
      ? showedEmployee
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

