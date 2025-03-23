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
    if (status === "pending") {
      dispatch(fetchEmployee());
    }
  }, [dispatch, status]);

  const renderedEmployee =
    sortedEmployees.length === 0
      ? showedEmployee
      : sortedEmployees;

  return (
    <>

      {status === 'pending' && <Spinner  /> }

      <FilterBlock />
      <EmployeeList data={renderedEmployee}/>

      {status === 'fail' && <p> Список пустой, возможно, стоит попить чайку и попробовать позже =) </p>}

    </>
  )
}

